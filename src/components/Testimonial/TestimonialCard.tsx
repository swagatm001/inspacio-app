"use client";
import React from "react";
import { Testimonial } from "@/constants/testimonials";
import Image from "next/image";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
      <div className="relative w-full max-w-4xl min-h-[360px] flex items-center">
        <div className="relative flex items-center gap-x-[80px]">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-white bg-[linear-gradient(266.78deg,#FFE339_-22.82%,#FF9470_38.96%)] -z-1"></div>
            <div className="absolute -bottom-10 left-[150px] w-24 h-24 bg-white rounded-full bg-[linear-gradient(180deg,#2B32FA_0%,#47E9B6_100%)] -z-1"></div>
            
          {/* Glass card */}
          <div className="overflow-visible relative z-10 max-w-[250px] min-h-[280px] relative bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/20 w-80 flex-shrink-0 overflow-hidden">
            {/* Gradient circles behind glass */}
            
            {/* Content */}
            <div className="block md:hidden flex flex-row gap-3 align-center mb-3">
              <img
                    src={testimonial.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover shadow-2xl border-2 border-white/30"
                />
                <div className={clsx(montserrat.className,"flex flex-col justify-center")}>
                  <h2 className="text-white text-lg h-auto">{testimonial.name}</h2>
                  {/* <p className="text-neutral-300 text-base">CEO</p> */}
                </div>
            </div>
            <div className="block md:hidden">
                  <p className="text-neutral-200 text-base leading-relaxed font-normal line-clamp-6">
                    {testimonial.content}
                  </p>
                </div>
            <div className="hidden md:block absolute z-10 bottom-5 w-3/4">
              <h2 className="text-white text-2xl font-semibold mb-2">{testimonial.name}</h2>
              {/* <p className="text-neutral-300 text-base">CEO</p> */}
              
              {/* Logo at bottom */}
              <div className="mt-24 flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                {/* <span className="text-white text-sm font-medium">Logopsum</span> */}
              </div>
            </div>
                {/* Profile image - positioned on the right edge of the box, extending above */}
            <div className="hidden md:block absolute -right-10 -translate-y-1/2 top-1/2">
                <img
                    src={testimonial.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover shadow-2xl border-2 border-white/30"
                />
            </div>
          </div>
          {/* Content text on the right */}
          <div className="hidden md:block">
            <p className="text-neutral-200 text-base leading-relaxed font-normal line-clamp-6">
              {testimonial.content}
            </p>
          </div>
        </div>
      </div>
  );
}

export default TestimonialCard;
