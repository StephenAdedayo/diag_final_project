import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { diaContext } from "../context/DiaContext";
import logo from "../assets/Layer 1.png";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import {toast} from 'react-toastify'

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "HealthTips", href: "/healthtips" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  const smallScreenLinks = [
     { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "HealthTips", href: "/healthtips" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ]

  const { location, isMenuOpen, setIsMenuOpen, token, setToken, navigate } = useContext(diaContext);
  console.log(isMenuOpen);
  console.log(setIsMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
    toast.success("user logged out successfully")
  }

  return (
    <>
      <div className="px-5 lg:px-20 xl:px-40 w-full bg-[#EFFBFF]   py-8 flex justify-between items-center">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>

        <div className="gap-5  lg:flex hidden">
          {links.map((link, index) => {
            const isactive = location.pathname === link.href;
            return (
              <Link
                className={`${
                  isactive ? "border-b text-[#0088FF]" : "text-[#102D47]"
                }`}
                to={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>


    {!token && (  <div className="lg:flex hidden  gap-2 items-center ">
          <p onClick={() => navigate('/login')} className="bg-[#0088FF] text-white px-6  text-sm cursor-pointer py-2">Login</p>
          <p onClick={() => navigate("/signup")} className="border  border-gray-400 bg-transparent cursor-pointer px-6 py-2 text-sm">Sign Up</p>
        </div>)}

        {token && (
        <div onClick={logout} className="lg:flex gap-2  hidden items-center cursor-pointer">
           <img className="w-[20px]" src="https://cdn-icons-png.freepik.com/256/2626/2626403.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" />
           <p className="text-[#0088FF]">Logout</p>
        </div>
        )}


        <button
          className="lg:hidden block "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {" "}
          {isMenuOpen ? <FaTimes className="text-[22px]"/> : <BiMenu  className="text-[22px]"/>}{" "}
        </button>
      </div>

      {/* smallers screens */}

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500 delay-75 ease-in z-40 fixed h-full w-full top-0 bg-transparent bg-opacity-100 backdrop-blur-3xl`}
      ></div>

      <div
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-50 fixed h-full w-[80%] bg-[#EFFBFF] top-0 left-0 bottom-0 transition-opacity duration-500 delay-75 ease-in  py-8 lg:hidden block`}
      >
        <div className=" flex flex-col gap-5">
          {smallScreenLinks.map((link, index) => {
            const isactive = location.pathname === link.href;
            return (
              <Link
                className={`${
                  isactive ? "bg-[#0088FF]  text-white" : "text-[#102D47]"
                } py-2 px-10`}
                to={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {!token && (  <div className="flex gap-2 ml-5 mt-5 items-center ">
          <p onClick={() => navigate('/login')} className="bg-[#0088FF] text-white px-6  text-sm cursor-pointer py-2">Login</p>
          <p onClick={() => navigate("/signup")} className="border border-gray-400 bg-transparent cursor-pointer px-6 py-2 text-sm">Sign Up</p>
        </div>)}


         {token && (
        <div onClick={logout} className=" gap-2 absolute bottom-8 left-8 flex items-center cursor-pointer">
           <img className="w-[20px]" src="https://cdn-icons-png.freepik.com/256/2626/2626403.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" />
           <p className="text-[#0088FF]">Logout</p>
        </div>
        )}


      </div>
    </>
  );
};

export default Navbar;
