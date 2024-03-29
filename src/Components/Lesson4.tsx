import { motion } from "framer-motion";
import { useRef } from "react";
const Lesson4 = () => {
  const parentRef = useRef(null);
  // drag
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hover: { scale: 1, transition: { duration: 1 } },
    tap: { boxShadow: "0px 10px 10px #000" },
  };

  return (
    <div className="flex justify-center items-center h-lvh">
      <div
        className="border border-red-500 size-[500px] flex justify-center items-center"
        ref={parentRef}
      >
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
          dragElastic={0.5}
          dragSnapToOrigin
          dragConstraints={parentRef}
          whileTap="tap"
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson4;
