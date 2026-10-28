import React from "react";
import { testimonialsData } from "@/constants/testimonials";
import { Avatar, Stars } from "./TestimonialBits";

const QuoteMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="absolute top-5 right-5 w-10 h-10 text-brand-wash" aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.25c0-1.6.95-2.5 2.5-2.5V6h-.58Zm9.33 0a5.17 5.17 0 0 0-5.17 5.17V18h6.5v-6.5h-3.25c0-1.6.95-2.5 2.5-2.5V6h-.58Z" />
  </svg>
);

const Testimonials = () => {
  const featured = testimonialsData.slice(0, 3);
  return (
    <section className="px-6 md:px-24 py-12" aria-labelledby="client-words-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="client-words-heading" className="font-heading text-3xl md:text-4xl font-medium text-brand-ink text-center mb-3">
          Hear from Our Clients
        </h2>
        <p className="font-body text-center text-[#696969] text-sm md:text-base max-w-2xl mx-auto mb-10">
          Reviews shared on Google. Some date from before our rebrand to Inspacio, when the studio was known as Kreative Dezine Studio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <figure
              key={t.id}
              className="relative flex flex-col bg-white rounded-2xl border border-brand-sand p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-tan"
            >
              <QuoteMark />
              <figcaption className="flex items-center gap-3 mb-4">
                <Avatar name={t.name} className="w-12 h-12 text-base" />
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-base font-medium text-brand-ink">{t.name}</span>
                  <Stars rating={t.rating} dim="text-brand-sand" />
                </div>
              </figcaption>
              <blockquote className="font-body text-[#3f3f3f] text-base leading-relaxed line-clamp-6">{t.content}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
