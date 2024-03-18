"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export const SlidesPerViewCarousel = () => {
  return (
    <div className="SlidesPerViewCarousel w-full h-full">
      <Swiper
      slidesPerView={2.4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="rounded-lg w-full h-full"
      >
        <SwiperSlide className="bg-white rounded-lg h-80 border">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg h-80 border">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg h-80 border">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg h-80 border">Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};
