import { animate, AnimatePresence, easeIn, motion, spring } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { diaContext } from "../context/DiaContext";

const Modal = ({ activeIndex, setActiveIndex, data }) => {
  const { isModalOpen, setIsModalOpen } = useContext(diaContext);

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const found = data.find((dat) => dat.id === activeIndex);
    setModalData(found);
  }, [data, activeIndex]);

  const variant = {
    hidden : {
      opacity: 0
    },

    presence : {
      opacity: 1,
      transition : {
         duration : 500,
         type : "spring",
         stiffness : 100,
         ease : "easeIn"
      }
    }
  }

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
          variants={variant}
          initial= 'hidden'
          animate= 'presence'
            onClick={() => setIsModalOpen(false)}
            className="w-full px-5 lg:px-40 grid place-items-center h-full z-20 fixed  backdrop-blur-2xl  bg-transparent  top-0 right-0 left-0 bottom-0"
          >
            <motion.div
            variants={variant}
            initial= "hidden"
            animate = 'presence'
            exit={{opacity:0}}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2F73F2]  text-white rounded-lg max-w-[500px] w-full p-5"
            >
              <p className="lg:text-[25px] text-base">
                {modalData?.detail || "loading...."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
