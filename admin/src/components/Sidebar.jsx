import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Admincontext } from "../context/Admincontext";
import { toast } from "react-toastify";

const Sidebar = ({ token, setToken }) => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(Admincontext);

  const links = [
    { tag: "Overview", href: "/", img: assets.vector1 },
    { tag: "Add Blog", href: "/addblogs", img: assets.add },
    { tag: "Blogs", href: "/allblogs", img: assets.Notebook },
    { tag: "Users", href: "/allusers", img: assets.vector2 },
    { tag: "Add Tips", href: "/add", img: assets.add },
    { tag: "Tips", href: "/tips", img: assets.bulb }
  ];

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Admin logged out successfully");
  };

  return (
    <div className="mt-4 sticky top-5">
      <img
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        src={assets.logo}
        alt=""
        className="w-[100px] mb-10"
      />

      <div className="w-full ">
        {links.map((link, index) => {
          return (
            <NavLink
              className={
                "w-full mb-8 flex rounded-lg p-2.5 items-center gap-5 "
              }
              key={index}
              to={link.href}
            >
              <div className="size-8 bg-white rounded-full  items-center flex justify-center">
                <img className="w-[14px]" src={link.img} alt="" />
              </div>
              {isSideBarOpen && (
                <p className="capitalise text-[16px]">{link.tag}</p>
              )}
            </NavLink>
          );
        })}
      </div>
      {token && (
        <div
          onClick={logout}
          className="lg:flex gap-2 mt-40 hidden items-center cursor-pointer"
        >
          <img
            className="w-[20px]"
            src="https://cdn-icons-png.freepik.com/256/2626/2626403.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid"
            alt=""
          />
          <p className="text-gray-500">Logout</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
