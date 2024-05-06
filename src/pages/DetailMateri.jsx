import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase-config";
import { collection, doc, getDoc } from 'firebase/firestore';
const DetailMateri = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "articles");
        const docRef = doc(collectionRef, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
          setLoading(false);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
    console.log(data);
  
  }, [id]);


  return (
    <div>
      <section className="bg-custom-primary  flex items-center w-full h-[75vh]">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse relative justify-start gap-10 items-center">
          <h1 className="lg:text-7xl text-3xl text-custom-white font-semibold lg:w-1/2">{data.title}</h1>
          {data.imageUrl ? (
            <img src={`${data.imageUrl}`} draggable="false" className=" w-4/5 lg:w-1/2 aspect-video object-cover" alt="" />
          ) : (
            <img src="https://source.unsplash.com/random/900×700/?webdevelopment" draggable="false" className="w-4/5 lg:w-1/2 aspect-video object-cover" alt="" />
          )}
        </div>
      </section>
      <section className="w-full py-10">
        <main className="container mx-auto p-5 overflow-x-auto  bg-custom-white border shadow-md border-custom-secondary rounded">
        <iframe className="w-2/4 aspect-video mx-auto" src={`${data.videoUrl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div dangerouslySetInnerHTML={{ __html: data.content }} className='prose prose-untagged mt-5'></div>


       
     
        </main>
      </section>
    </div>
  );
};

export default DetailMateri;
