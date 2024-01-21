import { motion } from "framer-motion";
const Lesson2 = () => {
  // variants

  const parent = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const child = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex justify-center items-center min-w-full border h-lvh border-red-500 ">
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="size-52 bg-indigo-500 rounded flex justify-center items-center flex-wrap gap-3 p-2"
      >
        <motion.div
          className="size-20 bg-orange-500 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-orange-500 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-orange-500 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-orange-500 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
