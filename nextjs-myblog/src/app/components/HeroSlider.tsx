import React from "react";
import { createMetaData } from "@/utils/metaData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 100 } });
  const posts = await res.json();
  const metaData = createMetaData(posts);
  const imageFilter = metaData.map((data: any) => {
    const image = {
      id:data.id,
      img:data.thumb
    }
    return image;
  });


  const images = imageFilter.filter((image:any) => image.img !== null);

  // console.log(images);
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      followFinger={false}
    >
      {images.map((data:any) => {
        return (
          <SwiperSlide key={`${data.id}`}>
            <div className="slide-media">
              <Image src={data.img} width={800} height={400} alt="test_image"/>
            </div>
            <h2 className="slide-title text-white">{data.id}</h2>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ); 
};

export default HeroSlider;
