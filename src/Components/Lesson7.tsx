import { motion, useCycle } from "framer-motion";
const Lesson7 = () => {
  // useCycle

  const boxAnimations = [
    { x: 0, y: 0 },
    { x: 100, y: 100, opacity: 0.75 },
    { x: -100, y: 100, opacity: 0.5 },
    { x: 100, y: -100, opacity: 0.25 },
    { x: -100, y: 100, opacity: 0 },
  ];
  const [x, cycle] = useCycle(...boxAnimations);

  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="border border-red-500 size-[700px] flex flex-col gap-10 justify-center items-center ">
        <motion.div
          animate={x}
          onTap={() => cycle()}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson7;
