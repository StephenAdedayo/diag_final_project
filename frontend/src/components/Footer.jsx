import React from "react";
import logo from "../assets/Layer 1.png";
import { NavLink } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="px-5 lg:px-40 w-full py-20">
      <div className="flex flex-col  xl:flex-row gap-20">
        <div className="space-y-5 flex-[60%]">
          <img src={logo} alt="" />

          <p className="text-[#547593] text-[17px] md:w-[500px] w-full">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing Various versions have evolved over the
            years, sometimes.
          </p>
        </div>

        <div className="flex-[40%] flex flex-col max-xl:gap-10  xl:flex-row justify-between">
          <div className="space-y-5">
            <p className="text-[18px] text-[#102D47]">Major Links</p>

            <div className="flex flex-col gap-2">
              <NavLink to={"/"} className={"text-[16px] text-[#547593]"}>
                Home
              </NavLink>
              <NavLink to={"/about"} className={"text-[16px] text-[#547593]"}>
                About
              </NavLink>
              <NavLink
                to={"/services"}
                className={"text-[16px] text-[#547593]"}
              >
                Services
              </NavLink>
              <NavLink to={"/contact"} className={"text-[16px] text-[#547593]"}>
                Contact
              </NavLink>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[18px] text-[#102D47]">Quick Links</p>

            <div className="flex flex-col gap-2">
              <NavLink to={"/blogs"} className={"text-[16px] text-[#547593]"}>
                Blog Post
              </NavLink>
              <NavLink
                to={"/healthtips"}
                className={"text-[16px] text-[#547593]"}
              >
                HealthTips
              </NavLink>
              <NavLink to={"ml"} className={"text-[16px] text-[#547593]"}>
                Machine Learning
              </NavLink>
              <NavLink to={"dl"} className={"text-[16px] text-[#547593]"}>
                Deep Learning
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-8 md:flex-row justify-between">
        <div className="flex gap-2">
          <img className="size-[40px]" src={facebook} alt="" />
          <img className="size-[40px]" src={twitter} alt="" />
          <img className="size-[40px]" src={linkedin} alt="" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-14 gap-2 md:items-center">
          <p className="text-[#102D47] text-[18px]">NewsLetters</p>
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row">
            <input
              type="email"
              placeholder="email address"
              className="outline-none border border-[#D5E4F1] flex-1 px-2 py-3"
              required
            />
            <button className="sm:px-6 px-4 py-3  bg-[#2F73F2] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
