import React from "react";
import Button from "../components/Button";
import JS from "../assets/JS.jpeg";
import CSS from "../assets/CSS.jpeg";
import HTML from "../assets/HTML.jpeg";
import About from "../assets/about2.jpeg";

const fitur = [
  {
    nama: "Kursus Interaktif",
    deskripsi: "Kursus online interaktif dengan modul terstruktur, latihan, dan kuis.",
  },
  {
    nama: "Codepen Virtual",
    deskripsi: "IDE online untuk menulis, mengedit, dan menguji kode HTML, CSS, JavaScript secara real-time.",
  },
  {
    nama: "Forum Komunitas",
    deskripsi: "Platform forum untuk berinteraksi, berbagi pengetahuan, dan berkolaborasi.",
  },
];

const kursus = [
  {
    name: "HTML",
    gambar: HTML,
  },
  {
    name: "CSS",
    gambar: CSS,
  },
  {
    name: "HTML",
    gambar: JS,
  },
];

const Home = () => {
  return (
    <div>
      <section className="hero min-h-screen bg-[#f5487f] relative overflow-hidden">
        <div className="w-[22%] aspect-square rounded-[100%] bg-[#1f306e] absolute -bottom-[15%] -left-10"></div>
        <div className="w-[30%] aspect-square rounded-[100%] bg-[#1f306e] absolute -bottom-[15%] -right-16"></div>
        <div className="w-[15%] aspect-square rounded-[100%] bg-[#F9F6EE] absolute  bottom-[40%] -right-16"></div>
        <div className="w-[30%] aspect-square rounded-[100%] bg-[#F9F6EE] absolute -top-[15%] -left-16"></div>
        <div className="w-[15%] aspect-square rounded-[100%] bg-[#F9F6EE] absolute -bottom-[15%] left-24 -z-0"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="w-3/5 text-[#1f306e]">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Welcome to CodeCrush !!!</h1>
            <p className="mb-5   text-lg lg:text-3xl">Unleash Your Web Wizardry: Conquer HTML, CSS, and JavaScript like a Pro!</p>
            <Button link={'/materi'}>Mulai yuk...</Button>
          </div>
        </div>
      </section>
      <section className=" p-10 container mx-auto ">
        <h1 className="text-center text-3xl lg:text-5xl font-bold mb-10">Fitur kami</h1>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
          {fitur.map((item, index) => (
            <div className="w-80  flex flex-col divide-y-2 items-center p-5">
              <h3 className="text-3xl h-10 font-medium">{item.nama}</h3>
              <p className="h-20 text-balance text-center">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-[#1f306e]  relative">
        <div className="flex p-10 justify-start items-center z-10 relative h-screen  gap-5 container mx-auto">
          <main className="w-1/2 text-[#F9F6EE] ">
            <h2 className="text-2xl lg:text-8xl font-semibold mb-10  " style={{ textShadow: "2px black" }}>
              Tentang CodeCrush
            </h2>
            <p className="text-sm lg:text-xl">
              CodeCrush adalah platform belajar online yang didedikasikan untuk membantu Anda menguasai keterampilan HTML, CSS, dan JavaScript. Kami percaya bahwa belajar teknologi web tidak hanya tentang menghafal sintaks, tetapi juga
              tentang memahami konsep dan berlatih secara intensif.
            </p>
          </main>
        </div>
        <img src={About} className="absolute top-0 right-0 w-3/4  aspect-video" alt="" />
      </section>
      <section className=" p-10 container mx-auto ">
        <h1 className="text-center text-5xl font-bold mb-10">Materi</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {kursus.map((item, index) => (
            <div className="w-64 aspect-[12/16] group relative rounded-md">
            <img
              src={item.gambar}
              className="size-full absolute duration-100 ease-in-out group-hover:grayscale  "
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-full w-0 duration-100 group-hover:duration-500 ease-in-out">
              <h3 className="text-3xl h-10 font-semibold text-center opacity-0 text-[#F9F6EE] group-hover:opacity-100 bg-[#f5487f] duration-100 group-hover:duration-700 ease-in-out">
                {item.name}
              </h3>
            </div>
          </div>
          ))}
        </div>
        <div className="flex justify-center py-5">

        <Button link={'/materi'} variant="secondary">Cek selengkapnya...</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
