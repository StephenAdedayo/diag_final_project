import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";
import blogs1 from "../assets/blogs1.png";
import author from "../assets/author.png";
import axios from "axios";
import { toast } from "react-toastify";

export const diaContext = createContext();

const DiaContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [allBlogs, setAllBlogs] = useState([]);
  const [allTips, setAllTips] = useState([]);
  const [tipsModal, setTipsModal] = useState(false);

  const allBlog = [
    {
      _id: 1,
      title: "Insights into Modern Medicine Exploring the Latest Breakthroughs",
      image: blog1,
      time: Date.now(),
      desc: "Pricing",
      author: "Stephen",
      authImage: author,
      blogImage: blogs1,
    },
    {
      _id: 2,
      title: "Wellness Writings: Navigating Health in Today's World",
      image: blog2,
      time: Date.now(),
      desc: "Meeting",
    },
    {
      _id: 3,
      title: "Health Matters A Journey Through Medical Science",
      image: blog3,
      time: Date.now(),
      desc: "Updates",
    },
    {
      _id: 4,
      title: "The Pulse Unraveling the Mysteries of Medicine",
      image: blog4,
      time: Date.now(),
      desc: "Pricing",
    },
    {
      _id: 5,
      title: "Beyond the Diagnosis Stories of Healing and Hope",
      image: blog5,
      time: Date.now(),
      desc: "Pricing",
    },
    {
      _id: 6,
      title: "Medical Marvels From Lab to Life",
      image: blog6,
      time: Date.now(),
      desc: "Meeting",
    },
    {
      _id: 7,
      title: "Healing Hands Embracing Holistic Health",
      image: blog7,
      time: Date.now(),
      desc: "Pricing",
    },
    {
      _id: 8,
      title: "Medicine Unboxed Exploring the Frontiers of Healthcare",
      image: blog8,
      time: Date.now(),
      desc: "Meeting",
    },
    {
      _id: 9,
      title: "Breaking Barriers Advancements in Medical Research",
      image: blog9,
      time: Date.now(),
      desc: "Updates",
    },
  ];

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/blog/getblogs", {});
      if (data.success) {
        setAllBlogs(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getAllTips = async () => {
    if (!token) return null;

    if (location.pathname === "/healthtips") {
      try {
        const { data } = await axios.post(backendUrl + "/api/tips/get", {});
        if (data.success) {
          setAllTips(data.data);
          toast.success(data.message, { toastId: "success" });
        } else {
          toast.error(data.message, { toastId: "error" });
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, { toastId: "error" });
      }
    }
  };

  useEffect(() => {
    getAllTips();
  }, [token]);

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  const value = {
    navigate,
    location,
    isMenuOpen,
    setIsMenuOpen,
    allBlogs,
    setIsModalOpen,
    isModalOpen,
    backendUrl,
    token,
    setToken,
    allTips,
    getAllTips,
    tipsModal,
    setTipsModal,
  };

  return <diaContext.Provider value={value}>{children}</diaContext.Provider>;
};

export default DiaContextProvider;
