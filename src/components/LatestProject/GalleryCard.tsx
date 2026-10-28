"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { I_Project } from "./Gallery";
import { useParallax } from "@/hooks/useParallax";
import { BlurImage } from "../ui/BlurImage";
import { RecognitionBadge } from "../ui/RecognitionBadge";

interface GalleryCardProps {
  project: I_Project;
  /** Layout classes (column span and height). Defaults to a standard tile. */
  className?: string;
}

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

export const GalleryCard: React.FC<GalleryCardProps> = ({ project, className }) => {
  const imageRef = useParallax<HTMLImageElement>();
  const meta = [project.category?.label, project.address].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View project: ${project.title}`}
      className={clsx(
        "group relative block overflow-hidden rounded-xl bg-brand-wash focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange",
        className ?? "h-80"
      )}
    >
      {/* Image: parallax on the img, gentle zoom on the wrapper */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <BlurImage
          ref={imageRef}
          src={project.thumbnail}
          blurDataURL={project.thumbnailBlur}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ transform: "scale(1.15)" }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
      />

      {project.recognition && project.recognition.length > 0 && (
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 pointer-events-none">
          {project.recognition.map((item) => (
            <RecognitionBadge key={item.title} item={{ ...item, href: undefined }} variant="compact" light />
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {meta && <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/75 mb-1">{meta}</p>}
          <h3 className="font-heading text-xl md:text-2xl font-medium leading-snug text-balance drop-shadow-sm">{project.title}</h3>
        </div>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
          <div className="overflow-hidden">
            {(project.intro || project.description) && (
              <p className="font-body text-sm text-white/80 leading-snug line-clamp-2 mt-2">{project.intro || project.description}</p>
            )}
            <span className="font-body inline-flex items-center gap-2 mt-3 text-sm font-medium">
              View project
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
