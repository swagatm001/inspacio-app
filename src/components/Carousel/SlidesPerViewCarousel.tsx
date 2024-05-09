"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import React from "react";
import { uuidv4 } from "@/utils/uuid4";

interface I_SlidesPerViewCarousel {
  slides: React.ReactNode[];
}

export const SlidesPerViewCarousel: React.FC<I_SlidesPerViewCarousel> = ({
  slides,
}) => {
  const _slides = slides.map((slide) => (
    <SwiperSlide
      key={uuidv4()}
    >
      {slide}
    </SwiperSlide>
  ));
  return (
    <div className="SlidesPerViewCarousel w-full h-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          300: {
            slidesPerView: 2.25,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="rounded-lg w-full h-full"
      >
        {_slides}
      </Swiper>
    </div>
  );
};
