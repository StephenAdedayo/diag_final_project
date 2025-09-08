import React, { useContext, useState, useRef } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { Admincontext } from "../context/Admincontext";
import { toast } from "react-toastify";

const AddTips = ({token}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState(false);
  const [specialization, setSpecialization] = useState("");

  const { backendUrlt, backendUrl } = useContext(Admincontext);
  const fileInputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("authorName", authorName);
      formData.append("specialization", specialization);
      authorImage && formData.append("authorImage", authorImage);

      const { data } = await axios.post(backendUrlt + "/api/tips/add", formData, {headers : {token}});
      if (data.success) {
        toast.success(data.message, {toastId : "success"});
      } else {
        toast.error(data.message, {toastId : "error"});
      }
      setTitle("");
      setAuthorName("");
      setContent("");
      setCategory("");
      setSpecialization("");
      setAuthorImage(false);
      fileInputRef.current.value = null;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {toastId : "error"});
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <p className="mb-5 uppercase text-sm text-gray-500 font-medium">
            Upload Image
          </p>

          <div className="">
            <label className="" htmlFor="authorImage">
              <img
                className="w-30"
                src={
                  authorImage ? URL.createObjectURL(authorImage)

                    : assets.upload_area
                }
                alt=""
              />
              <input
                type="file"
                hidden
                id="authorImage"
                ref={fileInputRef}
                onChange={(e) => setAuthorImage(e.target.files[0])}
              />
              <p className="mt-2 text-[12px] text-gray-500 uppercase">
                Author Image
              </p>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-sm uppercase text-gray-500">Tip Title</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title here"
            className="outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full"
          />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-sm uppercase text-gray-500">Tip Content</p>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Enter content here"
            className="outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full"
            rows={5}
            cols={5}
          >
            {" "}
          </textarea>
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-sm uppercase text-gray-500">Author's name</p>
          <input
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            type="text"
            placeholder='Enter author"s name'
            className="outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full"
          />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-sm uppercase text-gray-500">Category</p>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
            className="w-full outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md"
            placeholder="category"
          />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="text-sm uppercase text-gray-500">Specialization</p>
          <input
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            type="text"
            placeholder="Enter summary here"
            className="outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full"
          />
        </div>

        {/* <div className='flex items-center gap-2 mt-10'>
                 <input value={published} onChange={() => setPublished(prev => !prev)} type="checkbox" id='published' className='w-[30px]'/>
               <label htmlFor="published" className='text-sm uppercase text-gray-500'>
                 Published
               </label>
             </div> */}

        <button
          type="submit"
          className="uppercase text-sm bg-gray-500  text-white mt-5 px-6 py-3"
        >
          Add blog
        </button>
      </form>
    </div>
  );
};

export default AddTips;
