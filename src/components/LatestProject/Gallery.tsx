import { T_Options } from "@/interfaces/Types";
import type { ProjectRecognition } from "@/constants/projects";
import React from "react";
import clsx from "clsx";
import { GalleryCard } from "./GalleryCard";

export interface I_Project {
  title: string;
  thumbnail: string;
  /** Blur preview for the thumbnail, attached on the server. */
  thumbnailBlur?: string;
  category: T_Options;
  slug: string;
  address: string;
  description?: string;
  image?: string[];
  intro?: string;
  type?: string;
  year?: number;
  recognition?: ProjectRecognition[];
}

interface I_Gallery {
  projects: Array<I_Project>;
}

/**
 * Editorial layout on a 12-column grid: three projects become one tall tile with
 * two stacked beside it; other counts alternate wide and narrow tiles.
 */
const layoutFor = (count: number, index: number) => {
  if (count === 3) {
    return index === 0 ? "lg:col-span-7 lg:row-span-2 h-72 sm:h-96 lg:h-[640px]" : "lg:col-span-5 h-72 lg:h-[308px]";
  }
  const wide = index % 4 === 0 || index % 4 === 3;
  return clsx(wide ? "lg:col-span-7" : "lg:col-span-5", "h-72 sm:h-80 lg:h-[380px]");
};

export const Gallery: React.FC<I_Gallery> = ({ projects }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
    {projects.map((project, index) => (
      <GalleryCard key={project.slug} project={project} className={layoutFor(projects.length, index)} />
    ))}
  </div>
);
