import { ElementOrSelector, inView, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Lesson8 = () => {
  const reference = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(reference);

  /*  
  //Inview
   useEffect(() => {
    inView(reference.current as ElementOrSelector, (info) => {
      console.log("Inview", info);
    });
  }, []); 
  */
  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="border border-red-500 size-[700px] flex flex-col gap-10 justify-center items-center ">
        <motion.div
          animate={
            isInView
              ? { x: 0, transition: { duration: 0.5, delay: 0.5 } }
              : { x: -500 }
          }
          ref={reference}
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson8;
