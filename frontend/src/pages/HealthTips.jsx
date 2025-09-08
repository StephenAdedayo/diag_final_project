import React, { useContext, useEffect, useState } from "react";
import { diaContext } from "../context/DiaContext";
import dot from "../assets/dot (2).png";
import { MdArrowForward } from "react-icons/md";
import TipsBanner from "../components/TipsBanner";
import QuickDiagnosis from "../components/QuickDiagnosis";
import TipsModal from "../components/TipsModal";

const HealthTips = () => {
  const { allTips, setTipsModal, token, getAllTips } = useContext(diaContext);

  const [id, setId] = useState("");

  const isOpen = (id) => {
    setTipsModal(true);
    setId(id);
  };

  useEffect(() => {
    getAllTips();
  }, [token]);

  return (
    <>
      <TipsBanner />

      {token && (
        <div className="px-5 lg:px-40 my-20 m">
          <h1 className="text-[#102D47] lg:text-[35px] mb-10 text-[25px] font-bold">
            Health Tips
          </h1>

          <div className={` grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 0`}>
            {allTips.map((tips, index) => (
              <div
                key={index}
                onClick={() => isOpen(tips._id)}
                className=" h-full   bg-white relative w-full rounded shadow-md"
              >
                <div className="space-y-4 p-10">
                  <p className="border border-[#2F73F2] p-1 rounded w-fit text-[#2F73F2]">
                    Health Tips
                  </p>
                  <p className="font-semibold text-[18px]">{tips.title}</p>
                  <p className="text-gray-500 text-[15px]">
                    {tips.content.slice(0, 200)}.....
                  </p>

                  <div className="flex gap-5 ">
                    <img
                      className="size-[50px] object-cover rounded-full"
                      src={tips.authorImage}
                      alt=""
                    />
                    <div>
                      <p className="text-gray-500 text-[15px]">
                        {tips.authorName}
                      </p>
                      <div className="flex items-center gap-1">
                        <p className="text-gray-500 text-[13px]">
                          {tips.category}
                        </p>{" "}
                        <img className="w-[20px] " src={dot} alt="" />{" "}
                        <p className="text-gray-500 text-[13px]">
                          {tips.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  w-full px-10 items-center justify-between absolute bottom-3">
                  <p className="text-[#2F73F2] text-[14px]">Read More</p>
                  <button>
                    <MdArrowForward className="text-[#2F73F2]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <QuickDiagnosis />

      <TipsModal id={id} />
    </>
  );
};

export default HealthTips;
