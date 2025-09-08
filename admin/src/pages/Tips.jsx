import React, { useContext, useEffect, useState } from "react";
import { Admincontext } from "../context/Admincontext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Tips = ({token}) => {
  const {backendUrl } = useContext(Admincontext);

   const [allTips, setAllTips] = useState([]);

  const getAllTips = async () => {
    try {
      const { data } = await axios.post(backendUrl + "/api/tips/get", {}, {headers : {token}});

      if (data.success) {
        setAllTips(data.data);
        toast.success(data.message, {toastId : "success"});
      } else {
        toast.error(data.message, {toastId : "error"});
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {toastId : "error"});
    }
  };



  const removeTips = async (id) => {
    try {
      const { data } = await axios.post(backendUrl + "/api/tips/remove", {
        id,
      });
      if (data.success) {
        getAllTips();
        toast.success(data.message, {toastId : "success"});
      } else {
        toast.error(data.message, {toastId : "error"});
      }
    } catch (error) {
      console.log(error.message);
      toast.error(data.message, {toastId : "error"});
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);

  return (
    <div>
      <main className="bg-white rounded-lg p-5 w-full ">
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#2F73F2]">All Tips</p>
          <img className="w-[30px]" src={assets.button2} alt="" />
        </div>

        <div className="overflow-x-scroll hide">
          <table border={1} className="w-full whitespace-nowrap ">
            <thead className="">
              <tr className="text-gray-400">
                <td className="">UserId</td>
                <td>Title</td>
                <td>Author Name</td>
                <td>Author Image</td>
                <td>Specialization</td>
                <td>Category</td>
                <td>Action</td>
              </tr>
            </thead>
            {allTips.map((tips, index) => (
              <tbody>
                <tr className="text-[#102D47] border border-gray-300">
                  <td>{tips._id}</td>
                  {/* <td>{user.firstName + " " + user.lastName}</td> */}
                  <td>{tips.title}</td>
                  <td>{tips.authorName}</td>
                  <td>
                    <img
                      className="size-[40px]"
                      src={tips.authorImage}
                      alt=""
                    />
                  </td>
                  <td>{tips.specialization}</td>
                  <td>{tips.category}</td>
                  <td>
                    {" "}
                    <img
                      onClick={() => removeTips(tips._id)}
                      className="w-[20px]"
                      src="https://cdn-icons-png.freepik.com/256/7695/7695673.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid"
                      alt=""
                    />{" "}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </main>
    </div>
  );
};

export default Tips;
