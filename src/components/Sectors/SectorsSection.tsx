import React from "react";
import Link from "next/link";
import { sectors, sectorOf } from "@/constants/sectors";
import { projectsConstants } from "@/constants/projects";
import { blurFor } from "@/utils/blur";
import { BlurImage } from "../ui/BlurImage";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface SectorsSectionProps {
  number?: string;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ number = "" }) => (
  <section className="mb-28" aria-labelledby="sectors-heading">
    <div className="mb-10">
      <SectionEyebrow number={number} label="Spaces we design" />
      <h2 id="sectors-heading" className="font-heading text-4xl md:text-[52px] leading-[1.05] font-normal text-brand-ink">
        Every kind of space
      </h2>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {sectors.map((sector) => {
        const count = projectsConstants.filter((p) => sectorOf(p) === sector.slug).length;
        const hero = projectsConstants.find((p) => p.slug === sector.heroProject);
        return (
          <li key={sector.slug}>
            <Link
              href={`/spaces/${sector.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-brand-wash transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange"
              aria-label={`${sector.name}: ${sector.tagline}`}
            >
              {hero && (
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <BlurImage src={hero.thumbnail} blurDataURL={blurFor(hero.thumbnail)} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              )}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="font-body text-[11px] uppercase tracking-[0.18em] text-white/70 mb-1">
                  {count} {count === 1 ? "project" : "projects"}
                </p>
                <h3 className="font-heading text-2xl font-normal leading-tight">{sector.name}</h3>
                <p className="font-body text-sm text-white/75 mt-1">{sector.tagline}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default SectorsSection;
