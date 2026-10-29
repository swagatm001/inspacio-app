"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/constants/testimonials";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { siteConstants } from "@/constants/site";
import { ExternalIcon } from "../ui/Icons";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { RatingPill, averageRating } from "./TestimonialBits";

const options: EmblaOptionsType = { align: "start", loop: true, skipSnaps: false };

const TestimonialV2: React.FC = () => {
  const slides = testimonialsData.map((data) => <TestimonialCard key={data.id} testimonial={data} />);
  const rating = averageRating(testimonialsData);

  return (
    <section className="px-3 md:px-5" aria-labelledby="testimonials-heading">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-4xl bg-brand-ink text-white py-16 md:py-24 shadow-soft">
      <span aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-brand-orange/15 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-brand-brown/30 blur-3xl" />

      <div className="relative max-w-[1253px] mx-auto px-4 md:px-7">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <SectionEyebrow number="" label="Client voices" light />
            <h2 id="testimonials-heading" className="font-heading text-4xl md:text-[52px] leading-[1.05] font-normal">
              What Our Customers Say
            </h2>
            <p className="font-body text-sm md:text-base text-white/60 mt-3">
              Reviews from our Google profile. Some were written before our rebrand to Inspacio, when the studio was known as Kreative Dezine Studio.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <RatingPill rating={rating} count={testimonialsData.length} light />
            {siteConstants.googleReviewsUrl && (
              <a
                href={siteConstants.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-1.5 text-sm text-white/80 underline-offset-4 hover:underline hover:text-white"
              >
                Read all reviews on Google
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <EmblaCarousel options={options} slides={slides} isDarkBackground autoplay autoplayDelay={6000} slideSize="33.333%" slideSizeSm="88%" tween={false} />
      </div>
      </div>
    </section>
  );
};

export default TestimonialV2;
