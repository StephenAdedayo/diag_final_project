import React from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const ServiceBanner = () => {
  return (
    <div className="px-5 lg:px-40 bg-[#EFFBFF] min-h-[50vh] flex items-center justify-center text-center">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-[#102D47] lg:text-[40px] md:text-[35px] text-[28px]">
          Our Smart Health Services
        </p>

        <p className="text-[#102D47] max-w-[500px] lg:text-[20px] text-[17px]">
          We offer intelligent, accessible tools  to help users detect
          diabetes risks early  and make informed health decisions.
        </p>

        <div className="flex items-center justify-center gap-1">
          <NavLink
            className={"text-[#879AAC] text-[17px] lg:text-[20px]"}
            to={"/"}
          >
            Home
          </NavLink>

           <div>
                 <MdKeyboardArrowRight className="text-[21px]"/>
          
             </div>
          

          <NavLink
            className={"text-[#102D47] text-[17px]  lg:text-[20px]"}
            to={"/services"}
          >
            Services
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
