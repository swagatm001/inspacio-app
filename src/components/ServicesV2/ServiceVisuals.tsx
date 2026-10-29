import React from "react";
import { BlurImage } from "../ui/BlurImage";
import Link from "next/link";
import clsx from "clsx";
import { projectsConstants } from "@/constants/projects";

const findProject = (slug: string) => projectsConstants.find((p) => p.slug === slug);

const Tile: React.FC<{
  slug: string;
  label?: string;
  className?: string;
  sizes: string;
  blur?: string;
}> = ({ slug, label, className, sizes, blur }) => {
  const project = findProject(slug);
  if (!project) return null;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={clsx(
        "group relative block overflow-hidden rounded-2xl bg-brand-wash transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50",
        className
      )}
      aria-label={`${label ? `${label}: ` : ""}${project.title}`}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <BlurImage src={project.thumbnail} blurDataURL={blur} alt="" fill sizes={sizes} className="object-cover" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pt-10 pb-3">
        {label && (
          <span className="font-body inline-block text-[11px] font-medium tracking-wide uppercase text-white/90 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 mb-1">
            {label}
          </span>
        )}
        <p className="font-body text-sm text-white leading-snug">
          <span className="text-white/70">From </span>
          {project.title}
        </p>
      </div>
    </Link>
  );
};

/** One large and one smaller project photo for a service tab. */
export const ServiceGallery: React.FC<{ slugs: string[]; blurMap?: Record<string, string> }> = ({ slugs, blurMap }) => {
  const [first, second] = slugs;
  if (!first) return null;
  const blurOf = (slug: string) => blurMap?.[findProject(slug)?.thumbnail ?? ""];
  return (
    <div className="flex flex-col gap-4">
      <Tile slug={first} blur={blurOf(first)} className="aspect-[4/3]" sizes="(max-width: 1024px) 100vw, 480px" />
      {second && <Tile slug={second} blur={blurOf(second)} className="aspect-[16/9]" sizes="(max-width: 1024px) 100vw, 480px" />}
    </div>
  );
};

/** 2x2 sector tiles for the overview tab. */
export const SectorTiles: React.FC<{ sectors: string[]; slugs: string[]; blurMap?: Record<string, string> }> = ({ sectors, slugs, blurMap }) => (
  <div className="grid grid-cols-2 gap-4">
    {sectors.map((sector, i) =>
      slugs[i] ? (
        <Tile
          key={sector}
          slug={slugs[i]}
          label={sector}
          blur={blurMap?.[findProject(slugs[i])?.thumbnail ?? ""]}
          className="aspect-[4/3]"
          sizes="(max-width: 1024px) 50vw, 240px"
        />
      ) : null
    )}
  </div>
);
