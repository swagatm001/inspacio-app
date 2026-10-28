import React from "react";
import type { ProjectRecognition } from "@/constants/projects";
import { ExternalIcon } from "../ui/Icons";

/** Pull quote from a press feature, shown only when the recognition entry carries a quote. */
export const PressQuote: React.FC<{ items?: ProjectRecognition[] }> = ({ items }) => {
  const feature = items?.find((item) => item.kind === "press" && item.quote);
  if (!feature) return null;

  return (
    <section className="px-6 md:px-24 py-6 md:py-10" aria-label={feature.title}>
      <figure className="max-w-6xl mx-auto rounded-2xl bg-brand-ink text-white px-6 py-10 md:px-16 md:py-14 relative overflow-hidden">
        <svg viewBox="0 0 24 24" fill="currentColor" className="absolute -top-4 -left-2 w-32 h-32 text-white/5" aria-hidden="true">
          <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.25c0-1.6.95-2.5 2.5-2.5V6h-.58Zm9.33 0a5.17 5.17 0 0 0-5.17 5.17V18h6.5v-6.5h-3.25c0-1.6.95-2.5 2.5-2.5V6h-.58Z" />
        </svg>
        <p className="font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/60 mb-5">{feature.title}</p>
        <blockquote className="font-heading text-2xl md:text-4xl font-light leading-snug text-balance max-w-4xl">
          “{feature.quote}”
        </blockquote>
        <figcaption className="font-body mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/70">
          <div>
            {feature.attribution && <p>{feature.attribution}</p>}
            {feature.credits && feature.credits.length > 0 && (
              <p className="mt-1 text-white/50">
                {feature.credits.map((c) => `${c.label}: ${c.name}`).join(" · ")}
              </p>
            )}
          </div>
          {feature.href && (
            <a
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium underline-offset-4 hover:underline shrink-0"
            >
              Read the full feature
              <ExternalIcon />
            </a>
          )}
        </figcaption>
      </figure>
    </section>
  );
};

export default PressQuote;
