import Image from "next/image";
import React from "react";

interface ProjectMainImageProps {
  src: string;
  alt?: string;
}

export const ProjectMainImage: React.FC<ProjectMainImageProps> = ({ src, alt }) => (
  <div className="w-full">
    <div className="mx-auto">
      <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden rounded-md">
        <Image src={src} alt={alt || "Project main image"} className="object-cover" fill />
      </div>
    </div>
  </div>
);
