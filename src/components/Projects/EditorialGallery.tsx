"use client";

import React from "react";
import clsx from "clsx";
import { BlurImage } from "../ui/BlurImage";
import { useParallax } from "@/hooks/useParallax";

export interface GalleryImage {
  src: string;
  alt: string;
  w: number;
  h: number;
  blur?: string;
}

interface EditorialGalleryProps {
  images: GalleryImage[];
  /** Called with the index within `images` when a tile is clicked. */
  onOpen: (index: number) => void;
}

interface Row {
  images: GalleryImage[];
  /** Sum of the aspect ratios in the row. */
  sum: number;
  /** A final row too sparse to stretch; it keeps the usual row height instead. */
  short: boolean;
}

const aspect = (img: GalleryImage) => (img.h > 0 ? img.w / img.h : 1.5);

/**
 * Packs photos into rows whose widths add up to the container, so nothing is
 * cropped and every row has one consistent height. `target` is the sum of
 * aspect ratios a row aims for (container width / row height); `max` caps it.
 */
export const buildJustifiedRows = (images: GalleryImage[], target: number, max: number): Row[] => {
  const rows: Row[] = [];
  let current: GalleryImage[] = [];
  let sum = 0;
  for (const img of images) {
    const a = aspect(img);
    if (current.length && sum + a > max) {
      rows.push({ images: current, sum, short: false });
      current = [];
      sum = 0;
    }
    current.push(img);
    sum += a;
    if (sum >= target) {
      rows.push({ images: current, sum, short: false });
      current = [];
      sum = 0;
    }
  }
  if (current.length) rows.push({ images: current, sum, short: sum < target * 0.8 });
  return rows;
};

const LAYOUTS = {
  desktop: { target: 2.6, max: 3.4 },
  mobile: { target: 1.0, max: 1.7 },
};

const ZoomHint = () => (
  <span
    aria-hidden="true"
    className="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
    </svg>
  </span>
);

/** A photo that fills its row alone drifts slightly as it passes through the viewport. */
const DriftingImage: React.FC<{ img: GalleryImage; sizes: string }> = ({ img, sizes }) => {
  const ref = useParallax<HTMLImageElement>(0.04, 1.12);
  return <BlurImage ref={ref} src={img.src} blurDataURL={img.blur} alt={img.alt} fill sizes={sizes} className="object-cover" style={{ transform: "scale(1.12)" }} />;
};

const Tile: React.FC<{
  img: GalleryImage;
  index: number;
  row: Row;
  layout: keyof typeof LAYOUTS;
  onOpen: (index: number) => void;
}> = ({ img, index, row, layout, onOpen }) => {
  const a = aspect(img);
  const share = a / (row.short ? LAYOUTS[layout].target : row.sum);
  const sizes = layout === "mobile" ? `${Math.round(share * 100)}vw` : `(max-width: 1024px) ${Math.round(share * 100)}vw, ${Math.round(share * 960)}px`;
  const alone = row.images.length === 1 && !row.short;
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Open ${img.alt} in full screen`}
      style={{ aspectRatio: `${img.w} / ${img.h}`, flex: row.short ? `0 0 calc(${(share * 100).toFixed(3)}% - 10px)` : `${a} 1 0%` }}
      className="group relative block min-w-0 overflow-hidden rounded-sm bg-brand-wash cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        {alone ? <DriftingImage img={img} sizes={sizes} /> : <BlurImage src={img.src} blurDataURL={img.blur} alt={img.alt} fill sizes={sizes} className="object-cover" />}
      </div>
      <ZoomHint />
    </button>
  );
};

const Rows: React.FC<{ images: GalleryImage[]; layout: keyof typeof LAYOUTS; className: string; onOpen: (i: number) => void }> = ({ images, layout, className, onOpen }) => {
  const rows = buildJustifiedRows(images, LAYOUTS[layout].target, LAYOUTS[layout].max);
  let cursor = 0;
  return (
    <div className={clsx("flex-col gap-3 md:gap-4", className)}>
      {rows.map((row, r) => {
        const start = cursor;
        cursor += row.images.length;
        return (
          <div key={r} className="flex gap-3 md:gap-4">
            {row.images.map((img, c) => (
              <Tile key={img.src} img={img} index={start + c} row={row} layout={layout} onOpen={onOpen} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

/** Rows are packed differently for phones and larger screens; only one set is shown at a time. */
export const EditorialGallery: React.FC<EditorialGalleryProps> = ({ images, onOpen }) => (
  <>
    <Rows images={images} layout="desktop" className="hidden md:flex" onOpen={onOpen} />
    <Rows images={images} layout="mobile" className="flex md:hidden" onOpen={onOpen} />
  </>
);

export default EditorialGallery;
