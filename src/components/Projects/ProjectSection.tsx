import React from "react";

interface ProjectSectionProps {
  title: string;
  text: string;
  imageSrc?: string;
  imageRight?: boolean;
  gallery?: string[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ title, text, imageSrc, imageRight, gallery }) => (
  <section className="flex gap-16 items-center px-24 py-16">
    {!imageRight && imageSrc && (
      <img src={imageSrc} alt={title} className="rounded-2xl w-[688px] h-[388px] object-cover" />
    )}
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-4xl font-montserrat font-medium text-[#3d3834]">{title}</h2>
      <div className="text-lg text-[#3f3f3f]">{text}</div>
    </div>
    {imageRight && imageSrc && (
      <img src={imageSrc} alt={title} className="rounded-2xl w-[688px] h-[388px] object-cover" />
    )}
    {gallery && gallery.length > 0 && (
      <div className="flex gap-4">
        {gallery.map((src, i) => (
          <img key={i} src={src} alt={title + ' ' + (i+1)} className="rounded-2xl w-[320px] h-[427px] object-cover" />
        ))}
      </div>
    )}
  </section>
);
