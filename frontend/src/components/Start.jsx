import React, { useContext } from "react";
import { diaContext } from "../context/DiaContext";

const Start = () => {
  const { navigate } = useContext(diaContext);

  return (
    <main className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1748388715/bg1_oyvesh.png")] bg-cover bg-center w-full md:min-h-screen px-5 lg:px-40 flex items-center  bg-no-repeat min-h-[50vh] '>
      <div className="space-y-3 md:w-[588px] w-[350px]">
        <p className="text-[#0088FF] sm:text-[22px] text-[18px] font-bold">
          Advanced Healthcare
        </p>

        <p className="text-[#102D47] xl:text-[50px] sm:text-[30px] text-[20px] font-bold">
          Simplifying healthcare access with innovative technology
        </p>
        <p className="text-[#454D5D] xl:text-[20px] sm:text-[14px]">
  Empowering patients with smarter tools for early diagnosis and better care
        </p>

        <button
          onClick={() => navigate("/diagnosis")}
          className="bg-[#2F73F2] md:px-10 md:py-4 py-3 px-6 text-white hover:bg-[#0088FF] transition-color duration-500 delay-75 ease "
        >
          Diagnose Yourself
        </button>
      </div>
    </main>
  );
};

export default Start;
