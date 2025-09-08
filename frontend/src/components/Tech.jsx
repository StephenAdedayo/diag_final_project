import React from "react";
import about from "../assets/about.png";
import tick from "../assets/tick.png";

const Tech = () => {
  return (
    <div className="w-full my-20 px-5 lg:px-40 flex lg:flex-row flex-col-reverse items-center gap-20">
      <div className="overflow-hidden flex-[50%]">
        <img
          className="hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
          src={about}
          alt=""
        />
      </div>

      <div className="space-y-5 flex-[50%]">
        <p className="text-[#102D47] xl:text-[48px] text-[35px] font-bold">
          Highly Innovative Technology
        </p>
        <p className="text-[#547593] text-[15px] lg:text-[18px]">
          Our system leverages highly innovative technology—machine learning and
          computational intelligence—to enable the early prediction of diabetes.
          By analyzing user-provided data through intelligent algorithms, we can
          identify patterns and risk factors that may go unnoticed in
          traditional screenings. This approach not only enhances diagnostic
          accuracy but also promotes preventive healthcare by offering timely
          insights, empowering users to take proactive steps toward managing
          their health.
        </p>

        <button className="bg-[#2F73F2] rounded text-white px-6 py-3 ">
          Contact Us
        </button>

        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] text-[15px] lg:text-[18px]">
              Expert Help{" "}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={tick} alt="" />
            <p className="text-[#547593] text-[15px] lg:text-[18px]">
              Proven Results{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
