"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageComparatorProps {
  before: string;
  after: string;
  caption?: string;
  altBefore?: string;
  altAfter?: string;
}

/** Drag the handle (or use arrow keys) to compare the space before and after the project. */
export const ImageComparator: React.FC<ImageComparatorProps> = ({ before, after, caption, altBefore = "Before", altAfter = "After" }) => {
  const [position, setPosition] = useState(50);

  return (
    <figure className="max-w-6xl mx-auto px-6 md:px-24 py-8">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md select-none bg-brand-wash">
        <Image src={after} alt={altAfter} fill sizes="(max-width: 1024px) 100vw, 1100px" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={before} alt={altBefore} fill sizes="(max-width: 1024px) 100vw, 1100px" className="object-cover" />
        </div>

        <span className="font-body absolute top-3 left-3 rounded-full bg-black/60 text-white text-xs px-2.5 py-1 pointer-events-none">Before</span>
        <span className="font-body absolute top-3 right-3 rounded-full bg-black/60 text-white text-xs px-2.5 py-1 pointer-events-none">After</span>

        {/* Divider and handle */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow pointer-events-none" style={{ left: `${position}%` }} />
        <div
          className="absolute top-1/2 w-11 h-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-ink pointer-events-none"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5-4.5 7.5 4.5 7.5m7.5-15 4.5 7.5-4.5 7.5" />
          </svg>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Compare before and after"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      {caption && <figcaption className="font-body mt-3 text-sm text-[#696969] text-center">{caption}</figcaption>}
    </figure>
  );
};

export default ImageComparator;
