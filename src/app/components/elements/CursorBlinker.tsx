"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export const CursorBlinker = ({ delay }: { delay: number }) => {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1, 0],
      transition: {
        duration: 1,
        delay,
        repeat: 1.5,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  return (
    <AnimatePresence initial={false}>
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className="inline-block h-[2.5rem] w-[1.5px] translate-y-1 bg-black lg:h-[4.5rem]"
      />
    </AnimatePresence>
  );
};
