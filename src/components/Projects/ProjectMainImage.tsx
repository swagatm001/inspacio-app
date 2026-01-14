import React from "react";
import ParallaxImage from "./ParallaxImage";

interface ProjectMainImageProps {
  src: string;
  alt?: string;
}

export const ProjectMainImage: React.FC<ProjectMainImageProps> = ({ src, alt }) => (
  <div className="w-full">
    <div className="mx-auto">
      <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden rounded-md">
        <ParallaxImage src={src} alt={alt || "Project main image"} />
      </div>
    </div>
  </div>
);
