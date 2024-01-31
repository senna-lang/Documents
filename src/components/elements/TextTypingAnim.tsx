"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { CursorBlinker } from "./CursorBlinker";

type AnimatedTextProps = {
  text: string;
  delay: number;
};

export const TextTypingAnim = ({ text, delay }: AnimatedTextProps) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  const [animationCompleted, setAnimationCompleted] = useState(false);
  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      delay,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });
    return controls.stop;
  }, []);
  return (
    <div className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker delay={delay} />
    </div>
  );
};