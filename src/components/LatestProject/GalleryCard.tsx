"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { I_Project } from "./Gallery";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { useParallax } from "@/hooks/useParallax";

interface GalleryCardProps {
  project: I_Project;
  colSpan?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ project, colSpan = "col-span-1" }) => {
  const imageRef = useParallax<HTMLImageElement>();

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View project: ${project.title}`}
      className={clsx(
        montserrat.className,
        colSpan,
        "relative block group rounded-lg overflow-hidden h-80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F36730]"
      )}
    >
      <Image
        ref={imageRef}
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        style={{ transform: "scale(1.15)" }}
      />

      {/* Gradient shadow at the bottom of the image */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(45, 34, 28, 0) 30%, rgba(45, 34, 28, 0.7) 79%)" }}
      />

      {/* Title and address, hidden while the details panel is shown */}
      <div className="absolute bottom-4 left-0 w-full z-20 px-2 md:px-6 py-2 text-center text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
        <p className="font-medium text-2xl drop-shadow mb-2">{project.title}</p>
        <span className="text-sm text-gray-200 border rounded-full px-3 py-0.5 backdrop-blur-lg backdrop-saturate-200">
          {project.address}
        </span>
      </div>

      {/* Details panel, revealed on hover or keyboard focus */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-4 bg-black/75 text-white opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100">
        <div className="w-full text-center">
          <p className="font-medium text-2xl mb-2">{project.title}</p>
          <span className="text-sm text-gray-200 border rounded-full px-3 py-0.5">{project.address}</span>
          <p className={clsx(satoshi.className, "font-normal w-[80%] text-lg mt-2 mb-4 mx-auto line-clamp-3")}>
            {project.intro || project.description}
          </p>
          <span className="font-body inline-flex items-center h-10 px-5 rounded-full bg-white text-brand-ink font-medium">View project</span>
        </div>
      </div>
    </Link>
  );
};
