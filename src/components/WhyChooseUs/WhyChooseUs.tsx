import React from "react";
import clsx from "clsx";
import WHY_CHOOSE_US from "@/constants/whyChooseUs";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const icon = (d: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

/** One line icon per reason, keyed by the item id in the constants. */
const ICONS: Record<string, React.ReactNode> = {
  "turnkey-expertise": icon("M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"),
  "timely-delivery": icon("M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"),
  "in-house-excellence": icon("M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"),
  "tailored-design-approach": icon("M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"),
  "transparent-process": icon("M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"),
  "proven-experience": icon("M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"),
  "client-satisfaction": icon("M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"),
};

export const WhyChooseUs: React.FC = () => {
  const [lead, ...rest] = WHY_CHOOSE_US.items;

  return (
    <section aria-labelledby="why-heading" className="py-12 md:py-16">
      <div className="max-w-2xl mb-10">
        <SectionEyebrow number="" label="Why Inspacio" />
        <h2 id="why-heading" className="font-heading text-4xl md:text-6xl font-light text-brand-ink leading-[1.05] mb-4">
          {WHY_CHOOSE_US.heading}
        </h2>
        {WHY_CHOOSE_US.subheading && <p className="font-body text-base md:text-lg text-brand-muted">{WHY_CHOOSE_US.subheading}</p>}
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Lead reason: dark, spans two columns on large screens */}
        <li className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-brand-ink shadow-soft text-white p-7 md:p-9 flex flex-col justify-between min-h-[260px]">
          <span aria-hidden="true" className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-brand-orange">{ICONS[lead.id]}</span>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-white/50">01</span>
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-3">{lead.title}</h3>
            <p className="font-body text-base md:text-lg text-white/75 leading-relaxed max-w-xl">{lead.description}</p>
          </div>
        </li>

        {rest.map((item, i) => (
          <li
            key={item.id}
            className={clsx(
              "group relative rounded-2xl border border-brand-sand bg-white p-6 md:p-7 flex flex-col",
              "transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-tan"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-wash text-brand-brown transition-colors group-hover:bg-brand-orange group-hover:text-white">
                {ICONS[item.id]}
              </span>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-brand-tan">{String(i + 2).padStart(2, "0")}</span>
            </div>
            <h3 className="font-heading text-xl font-medium text-brand-ink mb-2">{item.title}</h3>
            <p className="font-body text-base text-brand-body leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
