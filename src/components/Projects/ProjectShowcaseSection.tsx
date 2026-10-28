"use client";

import React, { useMemo, useState } from "react";
import clsx from "clsx";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import ParallaxImage from "./ParallaxImage";
import { ScrollFadeIn } from "../ScrollFadeIn";
import { Lightbox } from "../Lightbox/Lightbox";

interface Props {
  title?: string;
  intro?: string[];
  moreText?: {
    title: string;
    points: string[];
    finishLine?: string;
  };
  images?: string[];
}

const ZoomHint = () => (
  <span
    aria-hidden="true"
    className="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
    </svg>
  </span>
);

/**
 * Column span for each tile in a 6-column grid so every row fills the width:
 * 1 image -> full width, 2 or 4 -> halves, otherwise thirds with the final
 * short row stretched to halves (or full width for a single leftover).
 */
const spanFor = (index: number, count: number) => {
  if (count === 1) return "md:col-span-6";
  if (count === 2 || count === 4) return "md:col-span-3";
  const remainder = count % 3;
  const lastRowStart = count - remainder;
  if (remainder === 1 && index === count - 1) return "md:col-span-6";
  if (remainder === 2 && index >= lastRowStart) return "md:col-span-3";
  return "md:col-span-2";
};

const ProjectShowcaseSection: React.FC<Props> = ({ title = "Layouts", intro = [""], moreText, images = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const split = Math.floor(images.length / 2);
  const carouselImages = useMemo(() => images.slice(0, split), [images, split]);
  const gridImages = useMemo(() => images.slice(split), [images, split]);
  const lightboxImages = useMemo(() => images.map((src, i) => ({ src, alt: `${title} photo ${i + 1}` })), [images, title]);

  const openAt = (index: number) => setLightboxIndex(index);

  const imageButton = (src: string, index: number, alt: string) => (
    <button
      type="button"
      onClick={() => openAt(index)}
      aria-label={`Open ${alt} in full screen`}
      className="group relative block w-full h-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange rounded-md"
    >
      <ParallaxImage src={src} alt={alt} />
      <ZoomHint />
    </button>
  );

  const carouselSlides = carouselImages.map((src, i) => (
    <div key={src} className="w-full h-56 md:h-72 lg:h-80 relative rounded-md overflow-hidden">
      {imageButton(src, i, `${title} photo ${i + 1}`)}
    </div>
  ));

  const singleGridImage = gridImages.length === 1;

  return (
    <section className="px-6 md:px-24 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6">
          <h3 className="font-heading text-4xl font-medium text-brand-ink">{title}</h3>
          <ScrollFadeIn threshold={0.3}>
            {intro && intro.map((text, index) => (
              <p key={index} className="font-body mt-4 text-lg md:text-xl text-[#3f3f3f]">{text}</p>
            ))}
          </ScrollFadeIn>
        </div>

        <div className="lg:col-span-6">
          {carouselSlides.length > 0 && <EmblaCarousel slides={carouselSlides} options={{ loop: true }} fullWidth={true} />}
        </div>

        <div className="lg:col-span-12 mt-10">
          {moreText && (
            <div className="font-body text-2xl text-[#3f3f3f]">
              {moreText.title && <h4 className="font-heading text-2xl font-medium text-brand-ink">{moreText.title}</h4>}
              {moreText.points && moreText.points.length > 0 && (
                <ul className="text-lg mt-6 md:text-xl list-disc list-inside">
                  {moreText.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
              {moreText.finishLine && <p className="mt-4 text-lg md:text-xl">{moreText.finishLine}</p>}
            </div>
          )}

          {gridImages.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4">
              {gridImages.map((src, i) => (
                <div
                  key={src}
                  className={clsx(
                    "relative w-full rounded-md overflow-hidden",
                    spanFor(i, gridImages.length),
                    singleGridImage ? "h-72 md:h-[420px] lg:h-[520px]" : "h-56 md:h-72 lg:h-80"
                  )}
                >
                  {imageButton(src, split + i, `${title} photo ${split + i + 1}`)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Lightbox images={lightboxImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onIndexChange={setLightboxIndex} />
    </section>
  );
};

export default ProjectShowcaseSection;
