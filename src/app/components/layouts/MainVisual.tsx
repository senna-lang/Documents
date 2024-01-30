import React from "react";
import * as blog from "@/app/features/blog/components/index";
import { createMetaData } from "@/app/utils/metaData";
import { getAllPosts } from "@/app/lib/notion";
import { Article } from "@/app/types/types";

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
    <div className="flex flex-col items-center 2xl:relative 2xl:mx-36 2xl:h-[550px] ">
      <blog.AnimationText />
      <div className=" mv01 2xl:absolute 2xl:left-0 2xl:top-10">
        <blog.HeroSlider sliderData={filteredThumbs} />
      </div>
    </div>
  );
};

export default MainVisual;
