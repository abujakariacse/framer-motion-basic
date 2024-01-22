import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  // Use Animation Controll
  const controlls = useAnimationControls();
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controlls.start((i) => ({
      x: 245,
      transition: { delay: i * 1, duration: 1 },
    }));
  }, []);

  /*  const handleForward = () => {
    controlls.start({ x: 300 });
  };

  const handleBackWord = () => {
    controlls.start({ x: 0 });
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      controlls.start({
        y: -300,
      });
    } else {
      controlls.start({ y: 0 });
    }
  }; */
  return (
    <div className="flex justify-center items-center h-lvh">
      {/* <div className="border border-red-500 size-[700px] flex flex-col gap-10 justify-center items-center flex-wrap">
        <motion.div
          animate={controlls}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
        <button
          className="px-3 py-1.5 bg-violet-500 rounded text-white"
          onClick={handleBackWord}
        >
          Backward
        </button>
        <button
          className="px-3 py-1.5 bg-violet-500 rounded text-white"
          onClick={handleForward}
        >
          Forward
        </button>
        <button
          className="px-3 py-1.5 bg-violet-500 rounded text-white"
          onClick={handleToggle}
        >
          Toggle
        </button>
      </div> */}
      <div
        className="border border-red-500 size-[700px] flex flex-col gap-10 justify-center items-center "
        onMouseEnter={() => controlls.stop()}
        onMouseLeave={() =>
          controlls.start({
            x: 0,
            transition: { delay: 1, duration: 1 },
          })
        }
      >
        <motion.div
          animate={controlls}
          custom={1}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
        <motion.div
          animate={controlls}
          custom={2}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
        <motion.div
          animate={controlls}
          custom={3}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson6;
