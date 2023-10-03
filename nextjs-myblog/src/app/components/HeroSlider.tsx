import React from "react";
import { createMetaData } from "@/utils/metaData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 100 } });
  const posts = await res.json();
  const metaData = createMetaData(posts);
  const imageFilter = metaData.map((data: any) => {
    const image = data.thumb;
    return image;
  });
  const images = imageFilter.filter((image: string | null) => image !== null);
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1} //一度に表示するスライドの数
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
        waitForTransition:false,
      }}
      followFinger={false}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image src={src} width={800} height={400} alt="test_image" className=""/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default HeroSlider;
