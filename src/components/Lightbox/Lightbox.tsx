"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

export interface LightboxImage {
  src: string;
  alt?: string;
  /** Short line shown under the image, e.g. the chapter name. */
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

const iconButton =
  "inline-flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

export const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onIndexChange }) => {
  const open = index !== null && images.length > 0;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (!images.length) return;
      onIndexChange((next + images.length) % images.length);
    },
    [images.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo((index ?? 0) + 1);
      if (event.key === "ArrowLeft") goTo((index ?? 0) - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, index, goTo, onClose]);

  if (!open || index === null) return null;
  const current = images[index];
  const multiple = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[100] bg-black/[0.97] flex items-center justify-center"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;
        goTo(delta < 0 ? index + 1 : index - 1);
      }}
    >
      <div className="absolute top-4 left-4 font-body text-sm text-white/80 select-none" aria-hidden="true">
        {index + 1} / {images.length}
      </div>
      {current.caption && (
        <p className="absolute bottom-4 left-4 right-20 font-body text-sm text-white/75 truncate select-none" aria-hidden="true">
          {current.caption}
        </p>
      )}

      <button
        ref={closeRef}
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className={clsx(iconButton, "absolute top-3 right-3 w-11 h-11")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {multiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); goTo(index - 1); }}
            className={clsx(iconButton, "absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); goTo(index + 1); }}
            className={clsx(iconButton, "absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      <div
        className="relative w-[92vw] h-[78vh] md:w-[86vw] md:h-[82vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt ?? ""}
          fill
          sizes="100vw"
          priority
          className="object-contain select-none"
        />
      </div>
    </div>
  );
};

export default Lightbox;
