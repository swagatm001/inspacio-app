"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/constants/testimonials";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { siteConstants } from "@/constants/site";
import { ExternalIcon } from "../ui/Icons";

const options: EmblaOptionsType = {
  align: "start",
  loop: true,
  breakpoints: { "(max-width: 768px)": { align: "center" } },
};

const TestimonialV2: React.FC = () => {
  const slides = testimonialsData.map((data) => <TestimonialCard key={data.id} testimonial={data} />);

  return (
    <section className="py-10 bg-brown-texture-pattern bg-cover bg-center" aria-labelledby="testimonials-heading">
      <h2
        id="testimonials-heading"
        className={clsx(montserrat.className, "font-medium text-2xl md:text-[40px] text-center text-white")}
      >
        What Our Customers Say
      </h2>
      <p className={clsx(satoshi.className, "text-center text-white/80 text-sm md:text-base mt-3 px-6 max-w-2xl mx-auto")}>
        Reviews shared by our clients on Google. Some date from before our rebrand to Inspacio, when the studio was
        known as Kreative Dezine Studio.
      </p>
      {siteConstants.googleReviewsUrl && (
        <p className="text-center mt-3">
          <a
            href={siteConstants.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(satoshi.className, "inline-flex items-center gap-1.5 text-white font-medium underline-offset-4 hover:underline")}
          >
            Read all reviews on Google
            <ExternalIcon />
          </a>
        </p>
      )}
      <div className="w-full flex justify-end">
        <div className="w-full md:w-[90%]">
          <EmblaCarousel options={options} slides={slides} isDarkBackground={true} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialV2;
