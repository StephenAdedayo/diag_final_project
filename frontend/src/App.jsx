import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import HealthTips from "./pages/HealthTips";
import Diagnosis from "./pages/Diagnosis";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from 'react-toastify';


const App = () => {
  const location = useLocation();
  const remove =
    location.pathname.includes("/signup") ||
    location.pathname.includes("/login") || location.pathname.includes("/forgot-password") || location.pathname.includes("/reset-password")

    useEffect(() => {
        window.scroll({top : 0, behavior: "smooth"})
    }, [location])

  return (
    <>
    <ToastContainer />
      {!remove && <Navbar />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/singleblog/:id" element={<SingleBlog />} />
          <Route path="/healthtips" element={<HealthTips />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
        </Routes>
      </main>
      {!remove && <Footer />}
    </>
  );
};

export default App;
