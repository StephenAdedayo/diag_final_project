import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { useLocation, NavLink } from "react-router-dom";
import { Admincontext } from "../context/Admincontext";
import { toast } from "react-toastify";

const Navbar = ({ token, setToken }) => {
  const location = useLocation();
  const path = location.pathname;

  const formattedPath =
    path === "/" ? "Overview" : path.split("/").filter(Boolean).join(" / ");

  const { isSideBarOpen, setIsSideBarOpen, isMenuOpen, setIsMenuOpen } =
    useContext(Admincontext);
  const links = [
    { tag: "Overview", href: "/", img: assets.vector1 },
    { tag: "Add Blog", href: "/addblogs", img: assets.Notebook },
    { tag: "Blogs", href: "allblogs", img: assets.Notebook },
    { tag: "Users", href: "allusers", img: assets.vector2 },
    // { tag: "UpdateBlogs", href: "update/:id", img: assets.Notebook },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Admin logged out successfully");
  };

  return (
    <>
      <nav className="mb-7.5 w-full overflow-hidden flex justify-between items-center ">
        <div className="flex gap-10 items-center">
          <img
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className="size-[20px] lg:block hidden"
            src={
              "https://cdn-icons-png.freepik.com/256/9458/9458218.png?ga=GA1.1.2728068.1744452084&semt=ais_incoming"
            }
            alt=""
          />

          <img
            onClick={() => setIsMenuOpen(true)}
            className="size-[20px] lg:hidden block"
            src={
              "https://cdn-icons-png.freepik.com/256/2616/2616718.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid"
            }
            alt=""
          />
          <div>
            <p className="text-gray-400">
              Dashboard / <span className="text-black">{formattedPath}</span>
            </p>
          </div>
        </div>

        <div className="lg:block hidden">
          <div className="flex gap-5 items-center  ">
            <div className="flex items-center gap-3 bg-gray-200 py-2 px-2 rounded-lg">
              <img src={assets.vector3} alt="" />
              <input
                type="text"
                placeholder="search"
                className="outline-none flex-1 "
              />
            </div>
            <img className="" src={assets.button} alt="" />
            <img src={assets.icon2} alt="" />
            <img src={assets.icon3} alt="" />
          </div>
        </div>
      </nav>

      {/* smaller screens */}

      <nav
        className={`${
          isMenuOpen ? "w-[100%]" : "w-0"
        } overflow-y-scroll z-50 lg:hidden transition-all duration-500 delay-75 ease-in-out fixed top-0 left-0 bottom-0  h-full py-8 bg-white  overflow-hidden `}
      >
        <div className="mt-4 ">
          <div className="flex px-4 justify-between ">
            <img
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
              src={assets.logo}
              alt=""
              className="w-[100px] mb-10"
            />
            <img
              onClick={() => setIsMenuOpen(false)}
              className="size-[20px]"
              src="https://cdn-icons-png.freepik.com/256/17440/17440622.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid"
              alt=""
            />
          </div>
          <div className="">
            {links.map((link, index) => {
              return (
                <NavLink
                  className={
                    "w-full pr-10 mb-5 flex items-center hover:bg-zinc-200 p-2.5 gap-5 "
                  }
                  key={index}
                  to={link.href}
                >
                  <div className="size-8 bg-white rounded-full items-center flex justify-center">
                    <img className="w-[14px]" src={link.img} alt="" />
                  </div>
                  <p className="uppercase text-sm">{link.tag}</p>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-5 px-4 flex-col">
            <div className="flex max-w-[500px]  items-center gap-3 bg-gray-200 py-3 px-2 rounded-lg">
              <img src={assets.vector3} alt="" />
              <input
                type="text"
                placeholder="search"
                className="outline-none flex-1 w-full"
              />
            </div>

            <div className="flex gap-5 items-center">
              {/* <img className='size-[50px]' src={assets.button} alt="" /> */}
              <img src={assets.icon2} alt="" />
              <img
                onClick={() => setIsMenuOpen(false)}
                src={assets.icon3}
                alt=""
              />
            </div>
          </div>

          {token && (
            <div
              onClick={logout}
              className="flex gap-2 mt-24 ml-5  items-center cursor-pointer"
            >
              <img
                className="w-[20px]"
                src="https://cdn-icons-png.freepik.com/256/2626/2626403.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid"
                alt=""
              />
              <p className="text-[#0088FF]">Logout</p>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
