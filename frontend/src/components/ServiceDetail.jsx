import React, { useContext, useState } from "react";
import Button from "./Button";
import dia from "../assets/diasec.png";
import { diaContext } from "../context/DiaContext";
import Modal from "./Modal";
import { FaArrowRight } from "react-icons/fa";

const ServiceDetail = () => {

  const data = [
    {
      id: 1,
      title: " Preemptive Risk Assessment",
      detail:
        "The application analyzes user-provided health data such as age, weight, BMI, blood pressure, family history, and lifestyle habits to predict the risk of developing diabetes—before symptoms appear.",
    },

    {
            id: 2,

      title: "Instant Diagnosis Feedback",
      detail:
        "Upon submitting the required information, the system provides real-time feedback on the likelihood of diabetes (positive or negative prediction) along with a confidence score.",
    },

    {
            id: 3,

      title: "Personalized Health Insights",
      detail:
        "Users receive tailored suggestions based on their risk level, including diet tips, physical activity recommendations, and lifestyle changes to lower their chances of developing diabetes.",
    },
    {
            id : 4,

      title: "Accessible and Easy to Use",
      detail:
        "With a user-friendly interface, individuals from all backgrounds can easily access the tool, input their details, and get results—no medical expertise required.",
    },
    {
            id : 5,

      title: "Secure Health Data Collection",
      detail:
        "The system collects and stores user data securely, allowing individuals to track their health trends over time and monitor changes in risk levels.",
    },
  ];

  const {setIsModalOpen} = useContext(diaContext)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleModal = (id) => {
    setIsModalOpen(true)
    setActiveIndex(id)
  }

  return (
    <div className="w-full pl-5 lg:pl-40 bg-zinc-100 pt-20 mb-20">
      <h1 className="text-[#102D47] lg:text-[35px] text-[25px] font-bold">
        What We Do
      </h1>

      <div className="mt-10 lg:pr-40 pr-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
          {data.map((dat, index) => (
            <div onClick={() => handleModal(dat.id)} key={index} className="bg-white cursor-pointer hover:bg-[#2F73F2] text-[#102D47] shadow hover:text-white hover:shadow transition ease-in duration-200 delay-75 w-full p-10 rounded-lg">
              <p className="py-10  text-[14px]">{dat.detail}</p>
              <hr />
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px]">{dat.title}</p>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-20 ">
        <button className="text-[#2F73F2] w-fit border border-[#2F73F2] bg-transparent px-6 py-3  hover:bg-[#2F73F2] transition-colors duration-500 delay-75 ease-in-out hover:text-white">
          View More
        </button>
      </div>

      <div className="bg-white flex md:flex-row flex-col  lg:pr-40 pr-5 gap-10 ">
        <img
          className="xl:w-[600px] object-cover lg:w-[300px] md:w-[300px] w-full"
          src={dia}
          alt=""
        />

        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-[#102D47] font-bold xl:text-[35px] text-2xl">
            Diabetes Awareness Section
          </h1>
          <p className="text-[#547593] text-[14px] lg:text-[17px]">
            Gain essential knowledge through our Diabetes Awareness Section,
            where we highlight the causes, risk factors, and early signs of
            diabetes. This section is designed to educate and inform users on
            how to take proactive steps toward prevention and understand the
            importance of early diagnosis using intelligent technology.
          </p>

          <Button text={"Learn More"} />
        </div>
      </div>

      <Modal activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={data}/>
    </div>
  );
};

export default ServiceDetail;
