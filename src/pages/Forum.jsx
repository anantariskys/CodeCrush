import React from "react";
import { Link } from "react-router-dom";

const Forum = () => {
  return (
    <div className="h-screen w-full text-custom-white bg-custom-secondary flex flex-col gap-5 justify-center items-center">
      <h1 className="text-6xl text-custom-white font-semibold">Forum Coming Soon hehehehee....</h1>
      <small>Developernya tepar banyak tugas :)</small>
      <Link to={"/"}>
        <button className="px-4 py-2 bg-custom-white rounded-md text-custom-secondary active:scale-95 duration-300 ease-in-out">Balik sini ayo</button>
      </Link>
    </div>
  );
};

export default Forum;
