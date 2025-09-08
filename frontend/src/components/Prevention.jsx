import React from "react";
import pre from "../assets/prevention.png";
import tick from "../assets/tick.png";

const Prevention = () => {
  return (
    <div className="px-5 lg:px-40 w-full my-20 flex lg:flex-row flex-col-reverse items-center gap-20">
      <div className="flex-[50%] overflow-hidden">
        <img
          className="hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
          src={pre}
          alt=""
        />
      </div>

      <div className="flex-[50%] flex flex-col gap-5">
        <p className="text-[#102D47] font-bold xl:text-[40px] text-[35px]">
          Focused on Diabetes Prevention
        </p>

        <p className="text-[#547593] lg:text-[18px] text-[15px]">
          We specialize in using intelligent systems to detect early signs of
          diabetes, helping users make informed health decisions before
          complications arise. By merging medical knowledge with cutting-edge
          technology, we offer a smarter, faster, and more accessible way to
          stay ahead of diabetes.
        </p>

        <div className="grid lg:grid-cols-2  gap-5">
          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] lg:text-[18px] text-[15px]">
              Identify diabetes likelihood before symptoms escalate.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] lg:text-[18px] text-[15px]">
              Backed by machine learning for smarter results.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] lg:text-[18px] text-[15px]">
              Simple form-based input for anyone to use.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] lg:text-[18px] text-[15px]">
              Get instant, reliable analysis from real-time responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevention;
