import React, { useContext } from "react";
import next from "../assets/next.png";
import { Link } from "react-router-dom";
import { diaContext } from "../context/DiaContext";

const LatestBlog = () => {
  const { allBlogs } = useContext(diaContext);

  return (
    <div className="w-full my-20 bg-[#EFFBFF] px-5 lg:px-40 py-20">
      <div className="flex justify-between  items-center mb-10">
        <p className="text-[#102D47] lg:text-[40px] text-[25px] font-bold">
          Latest blog & news
        </p>
        <Link to={"/blogs"} className="flex  gap-3 items-center">
          <p className="text-[#102D47] text-[17px] hidden sm:block font-medium">View More</p>
          <img src={next} alt="" />
        </Link>
      </div>

      <div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {[...allBlogs].reverse().slice(0, 3).map((blog, index) => (
            <Link key={index} to={`/singleblog/${blog._id}`}>
              <div className="space-y-5 w-full">
                <div className="overflow-hidden">
                  <img
                    className="w-full hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
                    src={blog.images[0]}
                    alt=""
                  />
                </div>

                <p className="text-[#102D47] lg:text-[22px] text-[16px] font-medium">
                  {blog.title}
                </p>
                <p className="text-[#ACBCCA] text-[13px]">{`${new Date(
                  blog.date
                ).toDateString()}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
