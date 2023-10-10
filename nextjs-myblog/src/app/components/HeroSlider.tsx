"use client";
import React from "react";
import { createMetaData } from "@/utils/metaData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const HeroSlider = (sliderData: any) => {
  const thumb = sliderData.sliderData;

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
      {thumb.map((data: any) => {
        return (
          <SwiperSlide key={`${data.id}`}>
            <Link href={`/articles/${data.slug}`}>
              <div className="slide-media">
                <Image src={data.img} width={800} height={400} alt="test_image" />
              </div>
              <h2 className="slide-title text-white">{data.id}</h2>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
