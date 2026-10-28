"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
  /** Reveal duration in milliseconds. */
  duration?: number;
  /** Fraction of the element that must be visible before it reveals (0 to 1). */
  threshold?: number;
  className?: string;
}

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(24px)",
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
