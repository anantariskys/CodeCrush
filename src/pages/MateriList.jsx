import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroImage from "../assets/about1.jpeg";

const MateriList = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/material/category/${id}`);
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

   
    fetchData();
  }, [id]);

  
  return (
    <div>
        <section className="w-full lg:h-screen flex px-3 lg:py-0 py-3 lg:px-0 lg:flex-row flex-col-reverse justify-between items-center container mx-auto">
        <div className="w-full flex flex-col justify-center gap-5 lg:gap-10">
          <h1 className="text-balance text-xl lg:text-5xl font-semibold">Apakah Anda siap untuk mengungkap rahasia di balik tampilan dan interaksi website yang memukau?</h1>
          <h3 className="text-balance text-sm lg:text-xl">Selamat datang di halaman materi front-end web development, tempat Anda akan memperoleh pemahaman mendalam tentang teknologi terkini dalam pengembangan antarmuka web.</h3>
        </div>
        <img src={HeroImage} className="w-full lg:w-1/2" draggable="false" alt="" />
      </section>
      <section className="w-full bg-custom-primary flex bg-custom-1">
        <main className={`${loading ? "h-screen flex justify-center " : "grid grid-cols-1"} w-full lg:w-4/6  gap-5 p-10  text-custom-secondary `}>
          <h3 className="text-4xl font-semibold">Latest</h3>
          {loading && <div className="loading-dots loading mx-auto"></div>}
          {!loading &&
            data.map((item, index) => (
              <Link to={`/materi/${item.id}`}>
              <div className="w-full  bg-custom-white p-2 rounded  hover:shadow-2xl duration-300 ease-in-out hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{index+1}. {item.title}</h3>
              </div>
              </Link>
            ))}
           
        </main>
      
      </section>
    </div>
  );
};

export default MateriList;
