import React from "react";
import { Link } from "react-router-dom";

const quiz = [
  {
    title: "Evaluasi Materi HTML",
    soal: "10 Soal",
    image: "https://source.unsplash.com/random/900x700/?html",
    link: "https://quizizz.com/embed/quiz/6637c5950969bd35bb8c6e02",
  },
  {
    title: "Evaluasi Materi CSS",
    soal: "10 Soal",
    image: "https://source.unsplash.com/random/900x700/?css",
    link: "https://quizizz.com/embed/quiz/663678390c32ae8340d2d2ea",
  },
  {
    title: "Evaluasi Materi Javascript",
    soal: "10 Soal",
    image: "https://source.unsplash.com/random/900x700/?javascript",
    link: "https://quizizz.com/embed/quiz/6637aafb07d00bfa2a5daaaa",
  },
];

const Evaluasi = () => {
  const imageUrl = "https://source.unsplash.com/random/900x700/?code";

  return (
    <div className="bg-custom-white">
      <header
        className="h-screen w-full flex items-center justify-center text-custom-white"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-10 px-40 rounded-sm bg-black bg-opacity-30">
          <h1 className="text-8xl font-bold">Evaluasi</h1>
          <p className="text-xl">Uji pengetahuan dan pemahamanmu disini !!!</p>
        </div>
      </header>
      <section className="container mx-auto flex flex-col gap-2 md:gap-5 px-5 md:px-20 lg:px-40 py-20 ">
        {quiz.map((item) => (
          <div className="rounded-lg w-full p-5 border bg-white flex hover:-translate-y-2 duration-300 ease-in-out hover:shadow-2xl gap-5 ">
            <img src={item.image} className="w-1/4 aspect-square rounded-lg" alt="" />
            <div className="md:py-3 flex flex-col justify-between w-full">
              <h1 className="lg:text-5xl md:text-3xl text-sm font-bold">{item.title}</h1>
              <small>{item.soal}</small>
              <Link to={item.link}>
                <div className="px-3 py-1 md:text-base text-sm bg-custom-secondary rounded-md cursor-pointer text-center text-custom-white font-semibold">Mulai</div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Evaluasi;
