import React from "react";
import mtest from "../assets/mtest.png";
import test from "../assets/test.png";

const Mlmedicine = () => {
  return (
    <div className="my-20 overflow-hidden w-full p-5 lg:px-40 bg-white flex items-center flex-col-reverse xl:flex-row gap-20">
      <div className="flex-[50%] gap-5 flex flex-col">
        <div className="flex gap-5 w-full items-center">
          <img
            className="max-sm:w-[200px] md:w-[250px] w-[300px]"
            src={test}
            alt=""
          />
          <img className="sm:w-[200px] w-[100px]" src={mtest} alt="" />
        </div>

        <div className="flex justify-end">
          <img className="w-[350px]" src={mtest} alt="" />
        </div>
      </div>

      <div className="flex flex-col  gap-10 flex-[50%]">
        <h1 className="capitalise font-bold text-[#102D47] lg:text-[35px] text-[25px]">
          The heart and science of machine learning in Medicine{" "}
        </h1>

        <p className="text-[#547593] text-[17px]">
          Machine learning (ML) in medicine combines scientific precision with
          human-centered care. On the science side, ML leverages algorithms to
          detect patterns in complex medical data—such as imaging, diagnostics,
          and patient records—enabling early disease detection, personalized
          treatments, and predictive analytics. It enhances clinical
          decision-making and reduces human error. However, the heart of ML in
          medicine lies in its ethical use: ensuring fairness, transparency, and
          patient privacy. Human oversight remains crucial to interpret ML
          outputs compassionately and responsibly. When balanced well, ML
          doesn't replace healthcare professionals—it empowers them to deliver
          smarter, faster, and more personalized care.
        </p>

        <button className="text-[#2F73F2] border border-[#2F73F2] bg-transparent px-6 py-3 w-1/2 hover:bg-[#2F73F2] transition-colors duration-500 delay-75 ease-in-out hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Mlmedicine;
