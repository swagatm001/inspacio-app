"use client";

import { useEffect, useRef } from "react";

/**
 * Shifts an element vertically as it scrolls through the viewport.
 *
 * Only runs a frame when the element is on screen and the page has scrolled or
 * resized, and cancels everything on unmount. Respects the user's
 * reduced-motion preference.
 */
export function useParallax<T extends HTMLElement>(speed = 0.1, scale = 1.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      el.style.transform = `scale(${scale})`;
      return;
    }

    let visible = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${-distance * speed}px) scale(${scale})`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed, scale]);

  return ref;
}
