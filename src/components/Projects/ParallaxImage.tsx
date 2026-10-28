"use client";

import React from "react";
import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

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
  className = "",
}) => {
  const imageRef = useParallax<HTMLImageElement>(speed);

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-md ${className}`}>
      <Image
        ref={imageRef}
        src={src}
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
