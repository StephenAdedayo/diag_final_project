import React, { useContext } from "react";

import BlogItem from "./BlogItem";
import { diaContext } from "../context/DiaContext";

const AllBlogs = () => {
  const { allBlogs } = useContext(diaContext);

  return (
    <div className="my-20 px-5 lg:px-40 w-full ">
      <h1 className="text-[#102D47] lg:text-[35px] mb-10 text-[25px] font-bold">
           All Blogs
          </h1>
      <BlogItem allBlogs={allBlogs} />
    </div>
  );
};

export default AllBlogs;
