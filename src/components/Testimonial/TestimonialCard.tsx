"use client";
import React from "react";
import { Testimonial } from "@/constants/testimonials";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { Avatar, Stars } from "./TestimonialBits";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <figure className="relative w-full max-w-4xl min-h-[360px] flex items-center">
      <div className="relative flex items-center gap-x-[80px]">
        <div className="absolute -top-6 md:-top-8 -left-6 md:-left-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[linear-gradient(266.78deg,#FFE339_-22.82%,#FF9470_38.96%)]"></div>
        <div className="absolute -bottom-5 md:-bottom-10 -right-5 md:left-[200px] w-20 h-20 md:w-24 md:h-24 rounded-full bg-[linear-gradient(180deg,#2B32FA_0%,#47E9B6_100%)]"></div>

        {/* Glass card */}
        <div className="relative z-10 w-80 max-w-[250px] min-h-[280px] bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/20 flex-shrink-0">
          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex flex-row gap-3 items-center mb-3">
              <Avatar name={testimonial.name} className="w-16 h-16 text-xl" />
              <figcaption className="flex flex-col justify-center gap-1">
                <span className={clsx(montserrat.className, "text-white text-lg")}>{testimonial.name}</span>
                <Stars rating={testimonial.rating} />
              </figcaption>
            </div>
            <blockquote className="text-neutral-200 text-base leading-relaxed font-normal line-clamp-6">
              {testimonial.content}
            </blockquote>
          </div>

          {/* Desktop layout */}
          <figcaption className="hidden md:flex absolute z-10 bottom-5 w-3/4 flex-col gap-3">
            <span className={clsx(montserrat.className, "text-white text-2xl font-semibold")}>{testimonial.name}</span>
            <Stars rating={testimonial.rating} />
          </figcaption>
          <div className="hidden md:block absolute -right-10 -translate-y-1/2 top-1/2">
            <Avatar name={testimonial.name} className="w-32 h-32 text-4xl" />
          </div>
        </div>

        {/* Quote on the right (desktop) */}
        <blockquote className="hidden md:block text-neutral-200 text-base leading-relaxed font-normal line-clamp-6">
          {testimonial.content}
        </blockquote>
      </div>
    </figure>
  );
};

export default TestimonialCard;
