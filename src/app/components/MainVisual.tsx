import React from "react";
import { createMetaData } from "@/utils/metaData";
import AnimationText from "./AnimationText";
import HeroSlider from "./HeroSlider";
import { getAllPosts } from "@/lib/notion";
import { Article } from "@/types";

type SliderData = {
  id: string;
  img: string;
  slug: string;
};

const MainVisual = async () => {
  const posts = await getAllPosts();
  const metaData = createMetaData(posts);
  const thumbs = metaData.map((data: Article) => {
    const thumb = {
      id: data.id,
      img: data.thumb,
      slug: data.slug,
    };
    return thumb;
  });

  const filteredThumbs = thumbs.filter((image: SliderData) => image.img !== null);

  return (
    <div className="flex flex-col items-center 2xl:mx-36 2xl:h-[550px] 2xl:relative ">

      <AnimationText />
      <div className=" 2xl:absolute 2xl:left-0 2xl:top-10 mv01">
        <HeroSlider sliderData={filteredThumbs} />
      </div>
    </div>
  );
};

export default MainVisual;
