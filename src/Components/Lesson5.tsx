import { motion } from "framer-motion";
import { useRef } from "react";
const Lesson5 = () => {
  const parentRef = useRef(null);
  // drag
  const parent = {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: {
      x: [0, 300, -300, 0, 300],
      y: [0, 300, -300, 0, 300],
      opacity: 1,
      rotate: [0, 300, -300, 0],
      transition: {
        ease: "linear",
        duration: 5,
        repeat: Infinity,
        rotate: {
          delay: 1,
          repeat: Infinity,
        },
        opacity: {
          duration: 0.5,
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-lvh">
      <div
        className="border border-red-500 size-[700px] flex justify-center items-center"
        ref={parentRef}
      >
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson5;
