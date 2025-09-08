import React, { useContext, useEffect, useState } from "react";
import { diaContext } from "../context/DiaContext";
import { Link, useParams } from "react-router-dom";
import tick from "../assets/tick.png";
import twitter from "../assets/twitter2.png";
import linkedin from "../assets/linkedin3.png";
import facebook from "../assets/facebook1.png";

const BlogDetails = () => {
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

  return (
    <div className="px-5 lg:px-40 w-full my-20">
      <img className="w-full   object-fit mb-20" src={oneBlog?.images?.[0]} alt="" />

      <div className="flex md:flex-row flex-col lg:gap-20 gap-10">
        <div className="space-y-10">
          <p className="text-[#102D47] lg:text-[40px] text-[25px] font-bold">
            Main Heading & Points
          </p>

          <p className="text-[#547593] lg:text-[18px] text-[15px]">
           {oneBlog.content}
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <img src={tick} alt="" />
              <p className="text-[#547593] lg:text-[18px] text-[15px]">
                Vivamus eu lacus scelerisque, placerat commodo lectus.
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <img src={tick} alt="" />
              <p className="text-[#547593] lg:text-[18px] text-[15px]">
                Vivamus eu lacus scelerisque, placerat commodo lectus.
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <img src={tick} alt="" />
              <p className="text-[#547593] lg:text-[18px] text-[15px]">
                Vivamus eu lacus scelerisque, placerat commodo lectus.
              </p>
            </div>
          </div>

          <div>
            <img className="w-full" src={oneBlog?.images?.[1]} alt="" />
          </div>

          <div>
            <p className="text-[#547593] lg:text-[18px] text-[15px]">
              Unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the
            </p>
          </div>

          <div className="border-l-2 border-l-[#2F73F2] px-5">
            <p className="text-[#102D47] md:text-[27px] text-[17px]">
              Our team blends machine learning and web development to create
              smart healthcare tools — like our early diabetes prediction system
              — designed to make preventive care easier and more accessible.
            </p>
          </div>

          <div>
            <p className="text-[#547593] text-[18px]">
              {oneBlog.summary}
            </p>
          </div>

          <div className="flex gap-3 items-center border-t border-b py-5 border-t-[#E1F1F6] border-b-[#E1F1F6]">
            <p className="text-[23px] text-[#102D47]">Tags</p>

            <div className="flex gap-2 items-center">
              <p className="px-2 py-1 rounded-md text-[#2F73F2] bg-[#D6E4FF]">
                Trends
              </p>
              <p className="px-2 py-1 rounded-md text-[#2F73F2] bg-[#D6E4FF]">
                Design
              </p>
              <p className="px-2 py-1 rounded-md text-[#2F73F2] bg-[#D6E4FF]">
                Research
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md sticky top-2 p-8 shadow w-[70%] h-1/2">
          <p className="mb-5 text-[#102D47] text-[25px]">Share</p>

          <div className="flex flex-col  gap-3">
            <Link className="bg-[#526FA3] text-white flex gap-2 pl-2 pr-20 py-3 rounded-md">
              <img src={facebook} alt="" />
              <p>Facebook</p>
            </Link>

            <Link className="bg-[#4EB8EC] text-white flex gap-2 pl-2 pr-20 py-3 rounded-md">
              <img src={twitter} alt="" />
              <p>Twitter</p>
            </Link>

            <Link className="bg-[#3C86AD] text-white flex gap-2 pl-2 pr-20 py-3 rounded-md">
              <img src={linkedin} alt="" />
              <p>LinkedIn</p>
            </Link>
          </div>

          <div className="mt-20">
            <p className="mb-3 text-[#102D47] text-[25px]">
              Join Our Newsletters
            </p>
            <form action="" className="space-y-2">
              <input
                type="email"
                name=""
                id=""
                className="outline-0 w-full border px-2 border-[#C0D5FB] py-3 rounded-md placeholder:text-[#C0D5FB]"
                placeholder="email address"
                required
              />
              <button
                className="rounded-md w-full h-full text-white px-6 py-3 bg-[#3187F4]"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
