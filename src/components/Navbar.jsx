import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        setCategory(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar  text-[#1f306e] px-2 lg:px-10 fixed top-0 z-50 duration-300 ease-in-out ${isScrolled ? "bg-[#F9F6EE] shadow-lg" : "shadow-none bg-transparent"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to={'/materi'}>
            <li>
              <a>Materi</a>
            </li>
            </Link>
            <Link to={'/evaluasi'}>
            <li>
              <a>Evaluasi</a>
            </li>
            </Link>
            <Link to={'/forum'}>
            <li>
              <a>Forum</a>
            </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <a>Profile</a>
              </li>
            </Link>
          </ul>
        </div>
        <Link to={"/"} className="font-black text-3xl lg:block hidden">
          CodeCrush
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <Link to={'/materi'}>
            <li>
              <a>Materi</a>
            </li>
            </Link>
            <Link to={'/evaluasi'}>
            <li>
              <a>Evaluasi</a>
            </li>
            </Link>
            <Link to={'/forum'}>
            <li>
              <a>Forum</a>
            </li>
            </Link>
          <Link to={"/about"}>
            <li>
              <a>Profile</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
