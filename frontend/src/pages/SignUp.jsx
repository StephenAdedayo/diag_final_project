import React, { useContext, useEffect, useState } from "react";
import rect from "../assets/Rectangle.png";
import { diaContext } from "../context/DiaContext";
import axios from 'axios'
import {toast} from 'react-toastify'

const SignUp = () => {
  const { navigate, backendUrl, token, setToken} = useContext(diaContext);

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onSubmitHandler = async (e) => {

    e.preventDefault()

    try {
      const {data} = await axios.post(backendUrl + "/api/user/registerUser", {firstName, lastName, email, password})
      if(data.success){
        // navigate("/login")
        setToken(data.token)
        localStorage.setItem("token", data.token)
        toast.success(data.message)
        // navigate("/login")
      }else{
        toast.error(data.message)
      }
    } catch (error) {
       console.log(error.message);
       toast.error(error.message)
       
    }

  }

  useEffect(() => {
       if(token){
        navigate("/")
       }
  }, [token])

  return !token && (
    <>
      <div className="w-full">
        <div className="relative">
          <img className="w-full h-[50vh]" src={rect} alt="" />

          <div className="absolute top-4 flex justify-between w-full px-5">
            <img src="" alt="" />
            <button
              onClick={() => navigate("/login")}
              className="border cursor-pointer uppercase text-[13px] bg-transparent px-5 py-2"
            >
              Sign In
            </button>
          </div>
        </div>

        <form
        onSubmit={onSubmitHandler}
          action=""
          className="bg-white shadow p-10 absolute w-full max-w-[500px] inner "
        >
          <div>
            <h1 className="text-center text-[#212121] font-bold leading-[35px]">
              Sign Up For Quick Diagnosis
            </h1>
            <p className="text-center text-[10px] text-[#757575]">
              A Free way to Diagnose yourself on Diabetes
            </p>
          </div>

          <div className="mt-5 space-y-4">
            <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">First Name</p>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Stephen"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
              required/>
            </div>

             <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">Last Name</p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Alu"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
             required />
            </div>

            <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">Email Address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="stephen@gmail.com"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
              required/>
            </div>

            <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
              required/>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" className="w-[15px]" />
              <p className="text-[10px] text-[#616161]">
                I agree to the terms of services and privacy policy
              </p>
            </div>

            <button className="bg-[#2F73F2] cursor-pointer text-white uppercase text-center w-full py-3">
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
