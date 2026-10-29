import React from "react";
import { testimonialsData } from "@/constants/testimonials";
import { Avatar, Stars } from "../Testimonial/TestimonialBits";
import { SectionEyebrow } from "../ui/SectionEyebrow";

/** The client's own words about this project, when a review is linked to it. */
export const ProjectFeedback: React.FC<{ testimonialId?: number }> = ({ testimonialId }) => {
  const review = testimonialsData.find((t) => t.id === testimonialId);
  if (!review) return null;
  return (
    <section className="px-6 md:px-24 py-12 md:py-16" aria-labelledby="feedback-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-3">
          <SectionEyebrow number="" label="Client feedback" />
          <h2 id="feedback-heading" className="font-heading text-3xl md:text-4xl font-normal text-brand-ink leading-tight">
            In the client’s words
          </h2>
        </div>
        <figure className="lg:col-span-9 border-l border-brand-sand pl-6 md:pl-10">
          <blockquote className="font-heading text-2xl md:text-3xl font-light leading-snug text-brand-ink text-balance">
            “{review.content.trim()}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <Avatar name={review.name} className="w-12 h-12 text-base" />
            <div className="flex flex-col gap-1">
              <span className="font-body text-base font-medium text-brand-ink">{review.name}</span>
              <div className="flex items-center gap-2">
                <Stars rating={review.rating} dim="text-brand-sand" />
                <span className="font-body text-xs text-brand-faint">Google review</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ProjectFeedback;
