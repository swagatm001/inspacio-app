import React from "react";
import clsx from "clsx";
import { testimonialsData, Testimonial } from "@/constants/testimonials";
import { Avatar, Stars, RatingPill, averageRating } from "./TestimonialBits";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const QuoteMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.25c0-1.6.95-2.5 2.5-2.5V6h-.58Zm9.33 0a5.17 5.17 0 0 0-5.17 5.17V18h6.5v-6.5h-3.25c0-1.6.95-2.5 2.5-2.5V6h-.58Z" />
  </svg>
);

/** Reviews about the same kind of project come first; the longest of those becomes the featured quote. */
const pick = (projectType?: string) => {
  const matching = testimonialsData.filter((t) => t.projectType && t.projectType === projectType);
  const others = testimonialsData.filter((t) => !matching.includes(t));
  const ordered = [...matching, ...others];
  const featured = [...(matching.length ? matching : ordered)].sort((a, b) => b.content.length - a.content.length)[0];
  const rest = ordered.filter((t) => t.id !== featured.id).slice(0, 2);
  return { featured, rest };
};

interface TestimonialsProps {
  /** "Residential" or "Commercial" to prioritise matching reviews. */
  projectType?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ projectType }) => {
  const { featured, rest } = pick(projectType);
  const rating = averageRating(testimonialsData);

  return (
    <section className="px-6 md:px-24 py-16" aria-labelledby="client-words-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionEyebrow number="" label="Client voices" />
            <h2 id="client-words-heading" className="font-heading text-3xl md:text-4xl font-medium text-brand-ink">
              Hear from Our Clients
            </h2>
          </div>
          <RatingPill rating={rating} count={testimonialsData.length} className="self-start md:self-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured quote */}
          <figure className="lg:col-span-5 relative flex flex-col justify-between rounded-2xl bg-brand-ink text-white p-7 md:p-9 overflow-hidden">
            <QuoteMark className="absolute -top-3 -right-3 w-32 h-32 text-white/5" />
            <blockquote className="font-heading text-xl md:text-2xl font-light leading-snug text-balance line-clamp-[9]">
              “{featured.content.trim()}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Avatar name={featured.name} className="w-14 h-14 text-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-heading text-base font-medium">{featured.name}</span>
                <Stars rating={featured.rating} />
                {featured.projectType && <span className="font-body text-xs text-white/60">{featured.projectType} project</span>}
              </div>
            </figcaption>
          </figure>

          {/* Two supporting reviews */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {rest.map((t) => (
              <figure
                key={t.id}
                className={clsx(
                  "group relative flex flex-col md:flex-row gap-5 rounded-2xl bg-white border border-brand-sand p-6 md:p-7 shadow-sm",
                  "transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-tan"
                )}
              >
                <QuoteMark className="absolute top-5 right-5 w-9 h-9 text-brand-wash transition-colors group-hover:text-brand-sand" />
                <figcaption className="flex md:flex-col items-center md:items-start gap-3 md:w-36 shrink-0">
                  <Avatar name={t.name} className="w-12 h-12 text-base" />
                  <div className="flex flex-col gap-1">
                    <span className="font-heading text-base font-medium text-brand-ink leading-tight">{t.name}</span>
                    <Stars rating={t.rating} dim="text-brand-sand" />
                    {t.projectType && <span className="font-body text-xs text-brand-faint">{t.projectType} project</span>}
                  </div>
                </figcaption>
                <blockquote className="font-body text-brand-body text-base leading-relaxed line-clamp-5 md:pr-8">{t.content.trim()}</blockquote>
              </figure>
            ))}
          </div>
        </div>

        <p className="font-body text-xs text-brand-faint mt-5">
          Reviews are reproduced as written on Google. Some predate our rebrand to Inspacio, when the studio was known as Kreative Dezine Studio.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
