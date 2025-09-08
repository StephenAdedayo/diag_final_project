import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { diaContext } from "../context/DiaContext";

const TipsModal = ({ id }) => {
  const { tipsModal, setTipsModal, allTips } = useContext(diaContext);

  const [tipsData, setTipsData] = useState("");

  const fetchTipsData = () => {
    if (allTips.length > 0) {
      const filter = allTips.find((tips) => tips._id === id);
      setTipsData(filter);
    }
  };

  useEffect(() => {
    fetchTipsData();
  }, [id]);

  const variant = {
    hidden: {
      opacity: 0,
    },

    presence: {
      opacity: 1,
      transition: {
        duration: 500,
        type: "spring",
        stiffness: 100,
        ease: "easeIn",
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {tipsModal && (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="presence"
            onClick={() => setTipsModal(false)}
            className='"w-full px-5 lg:px-40 grid place-items-center h-full z-20 fixed  backdrop-blur-2xl  bg-transparent  top-0 right-0 left-0 bottom-0"
'
          >
            <motion.div
              variants={variant}
              initial="hidden"
              animate="presence"
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2F73F2]  text-white rounded-lg max-w-[500px] w-full p-5"
            >
              <p className="lg:text-[25px] text-base">{tipsData?.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TipsModal;
