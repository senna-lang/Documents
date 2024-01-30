"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

type SliderData = {
  id: string;
  img: string;
  slug: string;
};

type SliderDataProps = {
  sliderData: SliderData[];
};

const HeroSlider = (sliderData: SliderDataProps) => {
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
      {thumb.map((data: SliderData) => {
        return (
          <SwiperSlide key={`${data.id}`}>
            <Link href={`/articles/${data.slug}`}>
              <div className="slide-media">
                <Image src={data.img} width={1280} height={720} alt="sliderImage" priority />
              </div>
              <h2 className="slide-title absolute bottom-[10px] right-[30px] text-[1rem] font-semibold leading-[1.6] text-white opacity-0 lg:text-[2rem]">
                {data.id}
              </h2>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
