import React from "react";
import { createMetaData } from "@/utils/metaData";
import AnimationText from "./AnimationText";
import HeroSlider from "./HeroSlider";
import { getAllPosts } from "@/lib/notion";


const MainVisual = async() => {
  const posts = await getAllPosts();
  const metaData = createMetaData(posts);
  const thumbs = metaData.map((data: any) => {
    const thumb = {
      id: data.id,
      img: data.thumb,
      slug: data.slug,
    };
    return thumb;
  });

  const filteredThumbs = thumbs.filter((image: any) => image.img !== null);

  return (
    <div className="h-[550px] relative mx-36">
      <AnimationText />
      
      <div className=" absolute left-0 top-10 mv01">
      <HeroSlider sliderData = {filteredThumbs}/>
      </div>
    </div>
  );
};

export default MainVisual;
