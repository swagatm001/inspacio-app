import React from "react";

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => (
  <div className="flex flex-wrap gap-4 px-24 py-16">
    {images.map((src, i) => (
      <img key={i} src={src} alt={`Gallery image ${i+1}`} className="rounded-2xl w-[320px] h-[427px] object-cover" />
    ))}
  </div>
);
