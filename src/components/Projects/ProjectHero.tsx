import Link from "next/link";
import React from "react";
import { BlurImage } from "../ui/BlurImage";
import { RecognitionBadge } from "../ui/RecognitionBadge";
import type { ProjectRecognition } from "@/constants/projects";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageBlur?: string;
  recognition?: ProjectRecognition[];
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, image, imageBlur, recognition }) => (
  <section className="pt-20 bg-brand-cream">
  <div className="relative h-[62vh] min-h-[460px] max-h-[760px] w-full overflow-hidden bg-brand-ink text-white">
    <div className="absolute inset-0 animate-kenburns">
      <BlurImage src={image} blurDataURL={imageBlur} alt={title} fill priority sizes="100vw" className="object-cover" />
    </div>
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
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light leading-[1.02] text-balance max-w-4xl drop-shadow-sm">{title}</h1>
        {subtitle && <p className="font-body mt-4 text-base sm:text-xl md:text-2xl text-white/85 max-w-3xl">{subtitle}</p>}
      </div>
    </div>

    <div aria-hidden="true" className="absolute bottom-8 right-6 md:right-24 hidden md:flex flex-col items-center gap-2 text-white/70">
      <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      <span className="scroll-cue block w-px h-10 bg-white/70" />
    </div>
  </div>
  </section>
);
