"use client";

import React, { useMemo, useState } from "react";
import type { Section } from "@/constants/projects";
import type { ImageDims } from "@/utils/blur";
import { EditorialGallery, GalleryImage } from "./EditorialGallery";
import { ChapterIndex } from "./ChapterIndex";
import { Lightbox, LightboxImage } from "../Lightbox/Lightbox";
import { slugify } from "@/utils/slugify";

interface ProjectChaptersProps {
  projectTitle: string;
  /** e.g. "Jalahalli, Bangalore", used in image alt text. */
  location?: string;
  sections: Section[];
  blurs: Record<string, string>;
  dims: Record<string, ImageDims>;
}

const Highlights: React.FC<{ title: string; points: string[]; finishLine?: string }> = ({ title, points, finishLine }) => (
  <aside className="mt-8 rounded-3xl border border-brand-sand bg-white p-6 md:p-8">
    <h3 className="font-heading text-lg md:text-xl font-medium text-brand-ink mb-5">{title.replace(/:$/, "")}</h3>
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      {points.map((point, i) => (
        <li key={point} className="font-body flex gap-3 text-base text-brand-body leading-snug">
          <span className="font-body text-xs tabular-nums text-brand-orange pt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span>{point}</span>
        </li>
      ))}
    </ol>
    {finishLine && <p className="font-body mt-5 pt-5 border-t border-brand-sand text-base text-brand-muted">{finishLine}</p>}
  </aside>
);

export const ProjectChapters: React.FC<ProjectChaptersProps> = ({ projectTitle, location, sections, blurs, dims }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const chapters = useMemo(
    () =>
      sections.map((section, i) => {
        const id = `chapter-${i + 1}-${slugify(section.title)}`;
        const images: GalleryImage[] = (section.images ?? []).map((src, n) => ({
          src,
          alt: `${projectTitle}${location ? `, ${location}` : ""}: ${section.title.toLowerCase()}, photo ${n + 1}`,
          w: dims[src]?.w ?? 3,
          h: dims[src]?.h ?? 2,
          blur: blurs[src],
        }));
        return { id, number: String(i + 1).padStart(2, "0"), title: section.title, section, images };
      }),
    [sections, blurs, dims]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  );

  const allImages: LightboxImage[] = useMemo(
    () => chapters.flatMap((c) => c.images.map((img, n) => ({ src: img.src, alt: img.alt, caption: `${c.title} · ${n + 1} of ${c.images.length}` }))),
    [chapters]
  );
  const offsets = useMemo(() => {
    let acc = 0;
    return chapters.map((c) => { const o = acc; acc += c.images.length; return o; });
  }, [chapters]);

  return (
    <section className="px-6 md:px-24 py-12 md:py-16" aria-label={`${projectTitle} story`}>
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-2 mb-8 lg:mb-0 lg:self-stretch">
          <ChapterIndex chapters={chapters.map(({ id, number, title }) => ({ id, number, title }))} />
        </div>

        <div className="lg:col-span-10 flex flex-col gap-20 md:gap-28">
          {chapters.map((c, i) => (
            <article key={c.id} id={c.id} className="scroll-mt-28">
              <header className="max-w-3xl">
                <p className="font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-brand-tan mb-3 flex items-center gap-3">
                  <span className="text-brand-orange tabular-nums">{c.number}</span>
                  <span aria-hidden="true" className="inline-block w-6 h-px bg-brand-sand" />
                  Chapter {i + 1}
                  {c.images.length > 0 && <span className="text-brand-faint normal-case tracking-normal">· {c.images.length} photos</span>}
                </p>
                <h2 className="font-heading text-4xl md:text-6xl font-light text-brand-ink leading-[1.05] text-balance mb-6">{c.title}</h2>
                {c.section.intro?.map((text, n) => (
                  <p key={n} className={clsx("font-body text-brand-body leading-relaxed mb-3", n === 0 ? "text-lg md:text-2xl text-brand-ink" : "text-base md:text-lg")}>
                    {text}
                  </p>
                ))}
              </header>

              {c.section.moreText && (
                <Highlights title={c.section.moreText.title} points={c.section.moreText.points} finishLine={c.section.moreText.finishLine} />
              )}

              {c.images.length > 0 && (
                <div className="mt-10">
                  <EditorialGallery images={c.images} onOpen={(n) => setLightboxIndex(offsets[i] + n)} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <Lightbox images={allImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onIndexChange={setLightboxIndex} />
    </section>
  );
};

function clsx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export default ProjectChapters;
