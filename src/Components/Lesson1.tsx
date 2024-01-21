import { motion } from "framer-motion";
const Lesson1 = () => {
  return (
    <div className="flex justify-center items-center min-w-full border h-lvh border-red-500">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 2 }}
        className="size-40 bg-indigo-500 rounded"
      ></motion.div>
    </div>
  );
};

export default Lesson1;
