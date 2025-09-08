import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/css';
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";

const History = () => {
  const slides = [
    {
      title: " The Prevalence of Diabetes",
      text: "Diabetes affects over 400 million people globally, with numbers rising each year. Many individuals remain undiagnosed until severe complications occur, making it a critical public health issue.",
      image: slide1,
    },
    {
      title: " Challenges with Traditional Diagnosis",
      text: "Conventional methods rely on lab tests and visible symptoms, which often delay diagnosis. These methods lack early detection capabilities, especially in low-resource or high-risk settings.",
      image: slide2,
    },
    {
      title: "The Evolution of Technology in Healthcare",
      text: "Advancements in AI and machine learning have transformed healthcare by enabling faster, smarter, and more accurate diagnosis — improving patient outcomes through predictive analytics.",
      image: slide1,
    },
    {
      title: "How Our Project Contributes",
      text: "This project applies computational intelligence to predict diabetes risk early using user-provided data. It bridges the gap between awareness and action, offering proactive healthcare support.",
      image: slide2,
    },
  ];

  return (
    <div className="w-full px-5 lg:px-40 my-20 py-20 bg-[#EFFBFF] flex xl:flex-row flex-col gap-20 xl:items-center overflow-hidden">
      <div className="space-y-5 sm:w-[400px] w-full shrink-0">
        <p className="text-[#102D47] w-full xl:text-[40px] text-[35px] font-bold">
          Intelligent Health Evolution
        </p>
        <p className="text-[#547593] w-full lg:text-[18px] text-[15px]">
          Over time, healthcare has advanced from reactive treatments to
          proactive prevention. This project represents a new step in that
          journey — using computational intelligence to predict diabetes risk
          early, empower users with insight, and promote smarter, preventive
          health decisions.
        </p>
      </div>

      <div className=" gap-10 w-full">
        <Swiper
          // slidesPerView={2}
          // spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            850 : {
                slidesPerView: 2,
              spaceBetween: 10,
            },
            1200:{
               slidesPerView: 3,
              spaceBetween: 10,
            },
            1504: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="bg-transparent w-full mb-10 rounded-md ">
                <div className="bg-white xl:p-10 p-5 space-y-5">
                  <p className="text-[#2F73F2] lg:text-[17px] text-[15px]">
                    {slide.title}
                  </p>
                  <p className="text-[#547593] lg:text-[16px] text-[15px]">
                    {slide.text}
                  </p>
                </div>
                <img className="w-full object-cover" src={slide.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default History;
