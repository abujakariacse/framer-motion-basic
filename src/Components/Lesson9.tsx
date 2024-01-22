import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Lesson9 = () => {
  //   useAnimate to manually handle animation
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { rotate: 1 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: 0 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { rotate: 0 }],
    ]);
  }, []);

  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="border border-red-500 size-[700px] flex flex-col gap-10 justify-center items-center ">
        {/* here we don't have to write motion.div */}
        <div
          className="size-52 bg-indigo-500 rounded flex justify-center flex-wrap gap-3 p-5 "
          ref={scope}
        ></div>
      </div>
    </div>
  );
};

export default Lesson9;
