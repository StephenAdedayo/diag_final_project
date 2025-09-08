import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/loading.png";
import { toast } from "react-toastify";


const BlogItem = ({ allBlogs }) => {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    if(allBlogs.length > 0){
      const allBlog = allBlogs.filter(blog => blog.published)
       setBlogData(allBlog)
       toast.success("All blogs fetched", {toastId : "blogs"})
    }
  }, [allBlogs])

  if(blogData.length === 0){
    return (
          <div className="fixed top-0 left-0 w-full h-full z-50 grid place-items-center bg-[#EFFBFF]/70 backdrop-blur-md">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logo} // make sure to replace with your actual image path
                alt="Loading..."
                className="w-20 h-20 animate-spin"
              />
            </div>
          </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      
      {blogData.map((blog, index) => (
        <Link key={index} to={`/singleblog/${blog._id}`}>
          <div className="space-y-5 w-full">
            <div className="overflow-hidden w-full">
              <img
                className="w-full flex-1 hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
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
  );
};

export default BlogItem;
