import React from "react";

interface ProjectMainImageProps {
  src: string;
  alt?: string;
}

export const ProjectMainImage: React.FC<ProjectMainImageProps> = ({ src, alt }) => (
  <div className="w-full aspect-[1440/810] relative">
    <img src={src} alt={alt || "Project main image"} className="object-cover w-full h-full rounded-xl" />
  </div>
);
