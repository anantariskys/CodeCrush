import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../config/firebase-config.js";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddMaterial = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [articles, setArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const articlesCollection = collection(db, "articles");
    getDocs(articlesCollection)
      .then((querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          articles.push({ id: doc.id, ...doc.data() });
        });
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, [reload]);

  // Menambahkan artikel baru
  const handleAddArticle = async () => {
    if (imageFile) {
      // Upload gambar ke Firebase Storage
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Error uploading image:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(collection(db, "articles"), {
              title,
              content,
              category,
              videoUrl,
              imageUrl: downloadURL,
            })
              .then(() => {
                console.log("Article added successfully");
                setTitle("");
                setContent("");
                setCategory("");
                setVideoUrl("");
                setImageFile(null);
                setReload(!reload);
              })
              .catch((error) => {
                console.error("Error adding article:", error);
              });
          });
        }
      );
    } else {
      // Simpan data artikel tanpa gambar
      addDoc(collection(db, "articles"), {
        title,
        content,
        category,
        videoUrl,
      })
        .then(() => {
          console.log("Article added successfully");
          setTitle("");
          setContent("");
          setCategory("");
          setVideoUrl("");
          setReload(!reload);
        })
        .catch((error) => {
          console.error("Error adding article:", error);
        });
    }
  };

  // Memperbarui artikel
  const handleUpdateArticle = async (id, updatedData) => {
    const articleRef = doc(db, "articles", id);
    await updateDoc(articleRef, updatedData)
      .then(() => {
        console.log("Article updated successfully");
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error updating article:", error);
      });
  };

  // Menghapus artikel
  const handleDeleteArticle = async (id) => {
    const articleRef = doc(db, "articles", id);
    await deleteDoc(articleRef)
      .then(() => {
        console.log("Article deleted successfully");
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };

  return (
    <div className="w-full bg-custom-white ">
      <div className="container mx-auto h-fit p-10">
        <h1 className="text-3xl font-bold  mb-3"> CODECRUSH ADMIN PANEL</h1>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Judul</label>
          <input type="text" placeholder="Title" className="border rounded p-1 w-1/2" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Materi</label>

          <ReactQuill value={content} onChange={setContent} placeholder="Content" />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Materi</label>
          <select className="border rounded p-1 w-1/2" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Pilih Kategori</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Link Youtube</label>
          <input type="text" placeholder="Video URL" className="border rounded p-1 w-1/2" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Gambar</label>
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>

        <button className="px-4 py-1 bg-custom-secondary text-custom-white rounded active:scale-95 duration-300 ease-in-out" onClick={handleAddArticle}>
          Tambah Artikel
        </button>
      </div>

      {/* Daftar artikel */}
      <section className="bg-custom-secondary">
          <main className="grid  grid-cols-1 md:grid-cols-4 grid-rows-1 container mx-auto gap-4 p-10">
          {articles && articles.length < 1 && <div className="text-3xl p-10 font-semibold text-center text-custom-white">Tidak ada data</div>}
          {articles.map((article) => (
            <div key={article.id} className="bg-custom-white w-full rounded-md overflow-hidden">
              {article.imageUrl && <img src={article.imageUrl} className='w-full aspect-video' alt="Article" />}
              <div className="w-full p-2">
                <p className="text-sm font-bold">Kategori: {article.category}</p>
                <h2 className="text-3xl font-bold">{article.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-sm line-clamp-2" />
                <button className="px-3 text-sm py-1 rounded bg-red-500 text-custom-white active:scale-95 duration-300 ease-in-out" onClick={() => handleDeleteArticle(article.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          </main>
      </section>
    </div>
  );
};

// Helper function to get video ID from YouTube URL
const getVideoIdFromUrl = (url) => {
  const videoIdPattern = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = url.match(videoIdPattern);
  return match && match[1].length === 11 ? match[1] : null;
};

export default AddMaterial;
