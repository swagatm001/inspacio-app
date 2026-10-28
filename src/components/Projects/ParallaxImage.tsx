"use client";

import React from "react";
import { useParallax } from "@/hooks/useParallax";
import { BlurImage } from "../ui/BlurImage";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  speed?: number;
  className?: string;
  blurDataURL?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt = "Parallax image", speed = 0.1, className = "", blurDataURL }) => {
  const imageRef = useParallax<HTMLImageElement>(speed);

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-md bg-brand-wash ${className}`}>
      <BlurImage
        ref={imageRef}
        src={src}
        blurDataURL={blurDataURL}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover w-full h-full"
        style={{ transform: "scale(1.15)" }}
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
