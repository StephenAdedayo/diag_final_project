import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Admincontext = createContext();

const AdmincontextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // const backendUrlt = "http://localhost:5050";
  const navigate = useNavigate();

 

  const value = {
    isSideBarOpen,
    setIsSideBarOpen,
    isMenuOpen,
    setIsMenuOpen,
    backendUrl,
    navigate,

  };

  return (
    <Admincontext.Provider value={value}>{children}</Admincontext.Provider>
  );
};

export default AdmincontextProvider;
