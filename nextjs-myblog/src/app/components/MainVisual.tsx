"use client";

import React from "react";
import Image from "next/image";
import AnimationText from "./AnimationText";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const MainVisual = () => {
  // const textRef = useRef<HTMLDivElement | null>(null);
  // useLayoutEffect(() => {
  //   gsap.to(textRef.current, {
  //     opacity: 1,
  //     color: "black",
  //     duration: 2,
  //   });
  // }, []);
  return (
    <div className="h-[600px] relative mx-36">
      <AnimationText />
      <div className=" absolute left-0 top-10">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=23`}
          width={1280}
          height={300}
          alt=""
          priority
          className="w-[800px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default MainVisual;
