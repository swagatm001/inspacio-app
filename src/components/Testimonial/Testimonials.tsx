import React from "react";
import { testimonialsData } from "@/constants/testimonials";
import { Avatar, Stars } from "./TestimonialBits";

const Testimonials = () => {
  const featured = testimonialsData.slice(0, 3);
  return (
    <section className="px-6 md:px-24 py-12" aria-labelledby="client-words-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="client-words-heading" className="font-heading text-3xl md:text-4xl font-medium text-brand-ink text-center mb-10">
          Hear from Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <figure key={t.id} className="flex flex-col bg-white rounded-2xl border border-brand-sand p-6 shadow-sm">
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
