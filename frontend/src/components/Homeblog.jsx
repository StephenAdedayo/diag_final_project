import React, { useContext, useRef, useState } from "react";
// import dia from "../assets/diasec.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Link} from "react-router-dom";
import { diaContext } from "../context/DiaContext";

const Homeblog = () => {
  // const blogs = [
  //   {
  //     author: "Stephen",
  //     time: Date.now(),
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus eveniet repudiandae pariatur error unde corporis dolores mollitia fuga sed reprehenderit odio voluptatibus alias ad adipisci iure optio, laborum nesciunt.",
  //     image: dia,
  //   },
  //   {
  //     author: "Stephen",
  //     time: Date.now(),
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus eveniet repudiandae pariatur error unde corporis dolores mollitia fuga sed reprehenderit odio voluptatibus alias ad adipisci iure optio, laborum nesciunt.",
  //     image: dia,
  //   },
  //   {
  //     author: "Stephen",
  //     time: Date.now(),
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus eveniet repudiandae pariatur error unde corporis dolores mollitia fuga sed reprehenderit odio voluptatibus alias ad adipisci iure optio, laborum nesciunt.",
  //     image: dia,
  //   },
  //   {
  //     author: "Stephen",
  //     time: Date.now(),
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus eveniet repudiandae pariatur error unde corporis dolores mollitia fuga sed reprehenderit odio voluptatibus alias ad adipisci iure optio, laborum nesciunt.",
  //     image: dia,
  //   },
  //   {
  //     author: "Stephen",
  //     time: Date.now(),
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus eveniet repudiandae pariatur error unde corporis dolores mollitia fuga sed reprehenderit odio voluptatibus alias ad adipisci iure optio, laborum nesciunt.",
  //     image: dia,
  //   },
  // ];

  const {allBlogs, navigate} = useContext(diaContext)
  return (
    <div className="w-full px-5 lg:px-40 my-20">
      <div className="flex justify-between items-center mb-10">
        <p className="text-[#102D47] lg:text-[35px] text-[25px]">Latest News</p>
        <button onClick={() => navigate('/blogs')} className="border cursor-pointer px-6 py-3 border-[#2F73F2] text-[#2F73F2]">
          Read More
        </button>
      </div>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {allBlogs.slice().reverse().map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#EFFBFF] p-3 mb-10">
                <div>
                  <div className="overflow-hidden mb-2">
                    <img
                      className="hover:scale-110 w-full transition-all duration-500 delay-75 ease-in-out "
                      src={blog.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[#102D47] text-[14px]">
                      {new Date(blog.date).toDateString()} .
                    </p>
                    <p className="text-[#102D47] text-[14px] font-semibold">{blog.author}</p>
                  </div>
                  <p className="my-5 text-[#102D47] font-normal text-[14px]">{blog.content.slice(0, 200)}....</p>
                </div>
                <Link to={`/singleblog/${blog._id}`} className="text-[#2F73F2] text-[14px]">Read More</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Homeblog;
