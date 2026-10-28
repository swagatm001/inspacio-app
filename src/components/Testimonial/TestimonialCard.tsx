"use client";
import React from "react";
import { Testimonial } from "@/constants/testimonials";
import { Avatar, Stars } from "./TestimonialBits";

const QuoteMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="absolute top-5 right-5 w-9 h-9 text-white/10 transition-colors group-hover:text-brand-orange/40" aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.25c0-1.6.95-2.5 2.5-2.5V6h-.58Zm9.33 0a5.17 5.17 0 0 0-5.17 5.17V18h6.5v-6.5h-3.25c0-1.6.95-2.5 2.5-2.5V6h-.58Z" />
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <figure className="group relative h-full flex flex-col rounded-2xl bg-white/[0.06] border border-white/10 p-6 md:p-7 text-white transition duration-300 hover:bg-white/[0.1] hover:border-white/20">
    <QuoteMark />
    <blockquote className="font-body text-base md:text-[17px] leading-relaxed text-white/85 line-clamp-6 pr-8 flex-1">
      {testimonial.content.trim()}
    </blockquote>
    <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
      <Avatar name={testimonial.name} className="w-11 h-11 text-sm" />
      <div className="flex flex-col gap-1 min-w-0">
        <span className="font-heading text-base font-medium truncate">{testimonial.name}</span>
        <div className="flex items-center gap-2">
          <Stars rating={testimonial.rating} />
          {testimonial.projectType && <span className="font-body text-xs text-white/55">{testimonial.projectType}</span>}
        </div>
      </div>
    </figcaption>
  </figure>
);

export default TestimonialCard;
