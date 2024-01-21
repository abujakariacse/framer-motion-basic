import { motion } from "framer-motion";
const Lesson3 = () => {
  // Gesture
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
    hover: { scale: 1.4, transition: { duration: 1 } },
    tap: { scale: 1, rotate: 45, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex justify-center items-center min-w-full border h-lvh border-red-500 ">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hovered")}
        onHoverEnd={() => console.log("Left")}
        className="size-52 bg-indigo-500 rounded flex justify-center items-center flex-wrap gap-3 p-2"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
