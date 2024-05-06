import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/about1.jpeg";
import { db, storage } from '../config/firebase-config.js';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
const AllMateri = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
   
    const articlesCollection = collection(db, 'articles');
    getDocs(articlesCollection)
      .then((querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          articles.push({ id: doc.id , ...doc.data() });
        });
        setData(articles);
        console.log(articles)
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
      
      setLoading(false)
    }, []);


  return (
    <div>
      <section className="w-full lg:h-screen flex px-3 lg:py-0 py-3 lg:px-0 lg:flex-row flex-col-reverse justify-between items-center container mx-auto">
        <div className="w-full flex flex-col justify-center gap-5 lg:gap-10">
          <h1 className="text-balance text-xl lg:text-5xl font-semibold">Apakah Anda siap untuk mengungkap rahasia di balik tampilan dan interaksi website yang memukau?</h1>
          <h3 className="text-balance text-sm lg:text-xl">Selamat datang di halaman materi front-end web development, tempat Anda akan memperoleh pemahaman mendalam tentang teknologi terkini dalam pengembangan antarmuka web.</h3>
        </div>
        <img src={HeroImage} className="w-full lg:w-1/2" draggable="false" alt="" />
      </section>
      <section className="w-full bg-custom-primary  bg-custom-1 p-10">
          <h3 className="text-4xl font-bold text-center ">Materi</h3>
        <main className={`${loading ? "h-screen flex justify-center " : "grid grid-cols-4 grid-rows-1"} w-full  container mx-auto  gap-5 p-10  text-custom-secondary `}>
          {loading && <div className="loading-dots loading mx-auto"></div>}
          {!loading &&
            data.map((item, index) => (
              <Link to={`/materi/${item.id}`}>
              <div className="w-full  bg-custom-white p-2 rounded  hover:shadow-2xl duration-300 ease-in-out hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <h3 className="text-sm font-semibold">Category :{item.category}</h3>
              </div>
              </Link>
            ))}
           
        </main>
      
      </section>
    </div>
  );
};

export default AllMateri;
