import { TextTypingAnim } from "@/components/elements/TextTypingAnim";
import React from "react";

const AnimationText = () => {
  return (
    <div className="mb-12 w-[320px] p-2 sm:w-[640px] lg:w-[800px] 2xl:absolute 2xl:left-[900px] 2xl:mx-0 2xl:w-auto">
      <span className=" whitespace-nowrap text-[2.5rem] lg:text-[4.5rem]">
        <TextTypingAnim text="Hello" delay={0} />
      </span>
      <span className=" whitespace-nowrap text-[2.5rem] lg:text-[4.5rem]">
        <TextTypingAnim text="Welcome to" delay={2} />
      </span>
      <span className="whitespace-nowrap text-[2.5rem] lg:text-[4.5rem]">
        <TextTypingAnim text="SENNA BLOG." delay={4} />
      </span>
    </div>
  );
};

export default AnimationText;
