import Link from "next/link";
import React from "react";
import { BlurImage } from "../ui/BlurImage";
import { RecognitionBadge } from "../ui/RecognitionBadge";
import type { ProjectRecognition } from "@/constants/projects";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  year: string | number;
  image: string;
  imageBlur?: string;
  recognition?: ProjectRecognition[];
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, type, location, year, image, imageBlur, recognition }) => (
  <section className="pt-20 bg-brand-cream">
  <div className="relative h-[62vh] min-h-[460px] max-h-[760px] w-full overflow-hidden bg-brand-ink text-white">
    <BlurImage src={image} blurDataURL={imageBlur} alt={title} fill priority sizes="100vw" className="object-cover" />
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

    <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-24 pt-6 pb-8 md:pb-12">
      <nav aria-label="Breadcrumb" className="font-body text-sm text-white/80 max-w-6xl w-full mx-auto">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/projects" className="underline-offset-4 hover:underline">
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="truncate max-w-[60vw]">{title}</li>
        </ol>
      </nav>

      <div className="max-w-6xl w-full mx-auto">
        {recognition && recognition.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4" aria-label="Recognition">
            {recognition.map((item) => (
              <li key={item.title}>
                <RecognitionBadge item={item} light />
              </li>
            ))}
          </ul>
        )}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-balance max-w-4xl drop-shadow-sm">{title}</h1>
        {subtitle && <p className="font-body mt-4 text-base sm:text-xl md:text-2xl text-white/85 max-w-3xl">{subtitle}</p>}
        <dl className="font-body mt-6 flex flex-wrap gap-2 text-sm">
          {[
            ["Type", type],
            ["Location", location],
            ["Year", year],
          ].map(([label, value]) =>
            value ? (
              <div key={label as string} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1">
                <dt className="text-white/60">{label}</dt>
                <dd>{value}</dd>
              </div>
            ) : null
          )}
        </dl>
      </div>
    </div>
  </div>
  </section>
);
