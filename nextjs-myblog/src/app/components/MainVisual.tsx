// "use client";

import React from "react";
import { createMetaData } from "@/utils/metaData";
import AnimationText from "./AnimationText";
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import { CardsCarousel } from "./CardsCarousel";

const MainVisual = async() => {
  return (
    <div className="h-[550px] relative mx-36">
      <AnimationText />
      <div className=" absolute left-0 top-10 mv01">
      <HeroSlider/>
        {/* <CardsCarousel/> */}
      </div>
    </div>
  );
};

export default MainVisual;
