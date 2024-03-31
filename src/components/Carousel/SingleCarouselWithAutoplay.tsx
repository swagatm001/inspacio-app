"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "./Swiper.css";
import { Autoplay, EffectFade } from "swiper/modules";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface I_SingleCarouselWithAutoplay {
  slides: React.ReactNode[];
}

export const SingleCarouselWithAutoplay: React.FC<
  I_SingleCarouselWithAutoplay
> = ({ slides = [] }) => {
  const $slides = slides.map((slide) => ({ slide, id: uuidv4() })) || [];

  return (
    <div className="carousel w-full h-full">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        className="h-full"
      >
        {$slides.map(({ slide, id }) => (
          <SwiperSlide
            key={id}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
