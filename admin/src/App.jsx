import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Allblogs from "./pages/Allblogs";
import Allusers from "./pages/Allusers";
import Addblogs from "./pages/Addblogs";
import Sidebar from "./components/Sidebar";
import { Admincontext } from "./context/Admincontext";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import UpdateBlog from "./pages/UpdateBlog";
import Login from "./components/Login";
import Tips from "./pages/Tips";
import AddTips from "./pages/AddTips";

const App = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(Admincontext);

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  return (
    <>
      <ToastContainer />
      <main className="bg-gray-100  min-h-screen flex gap-10 md:px-10 px-5 py-8 ">
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <div
              className={`${
                isSideBarOpen ? "flex-[15%] w-full" : "flex-[5%] w-0"
              }  lg:block hidden  transition-all duration-500 delay-75 ease-in-out `}
            >
              <Sidebar token={token} setToken={setToken} />
            </div>
              
            {/* <div> */}

            <div
              className={`${isSideBarOpen ? "flex-[85%] " : "flex-[100%]"} overflow-x-scroll hide`}
            >
              <Navbar token={token} setToken={setToken} />
             
              <Routes>
                <Route path="/" index={true} element={<Dashboard />} />
                <Route path="/allblogs" element={<Allblogs token={token}/>} />
                <Route path="/allusers" element={<Allusers token={token} />} />
                <Route path="/addblogs" element={<Addblogs token={token}/>} />
                <Route path="/update/:id" element={<UpdateBlog token={token}/>} />
                <Route path="/tips" element={<Tips token={token}/>} />
                <Route path="/add" element={<AddTips token={token}/>} />
              </Routes>
            </div>
            {/* </div> */}
          </>
        )}
      </main>
    </>
  );
};

export default App;
