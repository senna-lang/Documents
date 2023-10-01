import React from "react";
import { createMetaData } from "@/utils/metaData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
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
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1} //一度に表示するスライドの数
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        el :'.mv01 .swiper-pagination',
        clickable: true,
      }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
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
            <Image src={src} layout="responsive" width={640} height={400} alt="test_image" className=""/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default HeroSlider;
