"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt?: string;
  speed?: number;
  className?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt = "Parallax image",
  speed = 0.1,
  className = ""
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    let latestScroll = 0;
    let currentScroll = 0;
    const smooth = 0.1; // easing

    // Observe visibility of this image
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      {
        threshold: 0,
        rootMargin: "200px", // start animation slightly before entering
      }
    );

    observer.observe(el);

    // Scroll listener (very light)
    const onScroll = () => {
      latestScroll = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Animation loop
    const animate = () => {
      if (isVisibleRef.current) {
        currentScroll += (latestScroll - currentScroll) * smooth;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const viewportCenter = windowHeight / 2;
        const elementCenter = rect.top + rect.height / 2;

        const distance = elementCenter - viewportCenter;
        const y = distance * speed;

        el.style.transform = `translateY(${-y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-md ${className}`}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className="object-cover w-full h-full"
        style={{ transform: `scale(1.15)` }}
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
