import React from "react";
import Link from "next/link";
import { projectsConstants } from "@/constants/projects";
import { blurFor } from "@/utils/blur";
import { BlurImage } from "../ui/BlurImage";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { RecognitionBadge } from "../ui/RecognitionBadge";

export const FEATURED_PROJECT_SLUG = "brita";

const FeaturedProject: React.FC = () => {
  const project = projectsConstants.find((p) => p.slug === FEATURED_PROJECT_SLUG);
  if (!project) return null;

  return (
    <section className="bg-brand-ink text-white" aria-labelledby="featured-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`Open the ${project.title} project`}
          className="group relative block lg:col-span-7 h-[320px] sm:h-[440px] lg:h-[680px] overflow-hidden bg-brand-wash/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-orange"
        >
          <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-105">
            <BlurImage
              src={project.thumbnail}
              blurDataURL={blurFor(project.thumbnail)}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </Link>

        <div className="lg:col-span-5 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20">
          <SectionEyebrow number="02" label="Featured project" light />
          {project.recognition && project.recognition.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-4" aria-label="Recognition">
              {project.recognition.map((item) => (
                <li key={item.title}>
                  <RecognitionBadge item={item} light />
                </li>
              ))}
            </ul>
          )}
          <h2 id="featured-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance mb-6">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="font-heading text-xl md:text-2xl font-light text-white/85 leading-snug mb-6">{project.subtitle}</p>
          )}
          {project.intro && <p className="font-body text-base md:text-lg text-white/70 leading-relaxed mb-8">{project.intro}</p>}
          <dl className="font-body flex flex-wrap gap-x-10 gap-y-4 text-sm mb-10">
            {[
              ["Type", project.category?.label],
              ["Location", project.address],
              ["Year", project.year],
            ].map(([label, value]) =>
              value ? (
                <div key={label as string}>
                  <dt className="text-white/50 uppercase tracking-[0.18em] text-[11px] mb-1">{label}</dt>
                  <dd className="text-white">{value}</dd>
                </div>
              ) : null
            )}
          </dl>
          <Button href={`/projects/${project.slug}`} variant="inverse" arrow className="self-start">
            Read the story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
