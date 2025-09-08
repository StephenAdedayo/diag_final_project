import React, { useContext } from "react";
import rect from "../assets/Rec.png";
import { Link } from "react-router-dom";
import { diaContext } from "../context/DiaContext";

const ForgotPassword = () => {
  const { navigate } = useContext(diaContext);
  return (
    <>
      <div className="w-full">
        {/* <div className="relative"> */}
          <img className="w-full h-[50vh]" src={rect} alt="" />

          {/* <div className="absolute top-4 flex justify-between w-full px-5">
            <img src="" alt="" />
            <button
              onClick={() => navigate("/signup")}
              className="border uppercase text-[13px] bg-transparent px-5 py-2"
            >
              Sign Up
            </button>
          </div> */}
        {/* </div> */}

        <form
          action=""
          className="bg-white shadow p-10 absolute w-full max-w-[500px] inner "
        >
          <div>
            <h1 className="text-center text-[#212121] capitalize font-bold leading-[35px]">
              Enter Your email to recover your password
            </h1>
            {/* <p className="text-center text-[10px] text-[#757575]">
              A Free way to Diagnose yourself on Diabetes
            </p> */}
          </div>

          <div className="mt-5 space-y-4">
            {/* <div className="w-full border border-[#212121] space-y-1 p-2"> 
            <p className="uppercase text-[10px]">First Name</p>
            <input
              type="text"
              placeholder="Stephen"
              className="outline-0 w-full border-0 placeholder:text-[12px]"
            />
          </div> */}

            <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">Email Address</p>
              <input
                type="text"
                placeholder="stephen@gmail.com"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
              />
            </div>

            {/* <div className="w-full border border-[#212121] space-y-1 p-2">
              <p className="uppercase text-[10px]">password</p>
              <input
                type="text"
                placeholder="*******"
                className="outline-0 w-full border-0 placeholder:text-[12px]"
              />
            </div> */}

            {/* <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="w-[15px]" id="Remember Me" />
                <label
                  htmlFor="Remember Me"
                  className="text-[10px] text-[#616161]"
                >
                  Remember Me
                </label>
              </div>

              <Link>
                <p className="text-[10px] text-[#616161]">Forgot Password?</p>
              </Link>
            </div> */}

            <button className="bg-[#2F73F2] cursor-pointer text-white uppercase text-center w-full py-3">
              Recover password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
