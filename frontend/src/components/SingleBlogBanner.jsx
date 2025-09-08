import React, { useContext, useEffect, useState } from "react";
import { diaContext } from "../context/DiaContext";
import { NavLink, useParams } from "react-router-dom";

const SingleBlogBanner = () => {
  const { allBlogs } = useContext(diaContext);
  const { id } = useParams();
  const [oneBlog, setOneBlog] = useState(false);

  const blogData = async () => {
    allBlogs.map((blog) => {
      if (blog._id === id) {
        console.log(blog);
        setOneBlog(blog);
        return null;
      }
    });
  };

  useEffect(() => {
    blogData();
  }, [allBlogs, id]);

  return oneBlog ? (
    <div className="px-5 lg:px-40 bg-[#EFFBFF] min-h-[50vh] flex flex-col md:flex-row md:items-center justify-between gap-10 transition-opacity duration-500 delay-75 ease-in md:py-0 py-10">
      <div className="flex flex-col gap-7">
        <div className="flex gap-5">
          <p className="text-[#102D47] text-[16px]">Trends</p>
          <p className="text-[#102D47] text-[16px]">18 Hours ago</p>
        </div>
        <div>
          <p className="text-[#102D47] lg:text-[48px] text-[30px]">
            {oneBlog.title}
          </p>
        </div>
      </div>

      <div className=" flex gap-2 items-center">
        <div>
          <img className="size-[70px] object-cover rounded-full" src={oneBlog.images[2]} alt="" />
        </div>
        <div>
          <p>{oneBlog.author}</p>
          <p>Author</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SingleBlogBanner;
