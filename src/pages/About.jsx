import React from "react";
import nala from "../assets/nala.jpeg";
import putnov from "../assets/putnov.jpeg";
import keira from "../assets/keira.jpeg";
import nanta from "../assets/nanta.jpeg";
const About = () => {
  const creator = [
    {
      nama: "Nala adani putri",
      nim: "225150600111019",
      ig: "@nalaa.p",
      gambar: nala,
    },
    {
      nama: "Putri Nov Syawulandari",
      nim: "225150607111029",
      ig: "@putrinovvs_",
      gambar: putnov,
    },
    {
      nama: "Keira Kayla Aqila",
      nim: " 225150607111021",
      ig: "@keirakey_",
      gambar: keira,
    },
    {
      nama: "Ananta Risky Susanto",
      nim: "225150601111013",
      ig: "@riskykun_",
      gambar: nanta,
    },
  ];

  return (
    <div className="bg-custom-white bg-custom-2">
      <section className="container mx-auto p-5 lg:p-10 h-[50vh] flex flex-col gap-5 justify-center items-center ">
        <h1 className="text-4xl lg:text-6xl font-bold">Creator of CodeCrush</h1>
        <p className="text-sm lg:text-2xl font-bold ">"Front-end web development is like playing a musical instrument; mastering the art requires creativity, precision, and constant practice." - Unknown
</p>
      </section>
      <section className="container mx-auto  p-10  ">
        <main className="grid grid-cols-1 lg:grid-cols-4 gap-5 relative">
            <div className="absolute top-0 lg:-top-1/4  -left-[10%] z-10 lg:size-56 size-24 bg-custom-primary rounded-full"></div>
            <div className="absolute top-0 lg:-top-1/4  left-1/6 z-10 lg:size-72 size-24 bg-custom-secondary rounded-full"></div>
            <div className="absolute top-0 lg:-top-1/4  -right-[10%] z-10 lg:size-56 size-24 bg-custom-primary rounded-full"></div>
            <div className="absolute top-0 lg:-top-1/4  right-[5%] z-10 lg:size-72 size-24 bg-custom-secondary rounded-full"></div>

          {creator.map((item, index) => (
            <div className="w-full aspect-[9/12] mx-auto rounded-lg p-3 relative z-10 ">
              <img src={item.gambar} draggable='false' className='w-full aspect-[9/12] object-cover rounded-md' alt="" />
              <h1 className="text-sm lg:text-2xl font-bold text-neutral-800 text-center">{item.nama}</h1>
              <h1 className="text-xs lg:text-lg font-semibold text-neutral-800 text-center">{item.nim}</h1>
              <h1 className="text-xs lg:text-lg font-semibold text-neutral-800 text-center">IG : {item.ig}</h1>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default About;
