import { BlurImage } from "../ui/BlurImage";
import { blurFor } from "@/utils/blur";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import type { Project } from "@/constants/projects";
import { Button } from "../ui/Button";

interface ProjectPagerProps {
  previous?: Project;
  next?: Project;
}

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

const cardBase =
  "group relative block h-48 md:h-60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange";

const factLine = (project: Project) => {
  const find = (re: RegExp) => project.attributes?.find((a) => re.test(a.label))?.value;
  return [find(/area/i), find(/duration|timeline/i)].filter(Boolean).join(" · ");
};

const PagerCard: React.FC<{ project: Project; direction: "previous" | "next" }> = ({ project, direction }) => {
  const isNext = direction === "next";
  const facts = factLine(project);
  return (
    <Link href={`/projects/${project.slug}`} className={cardBase} aria-label={`${isNext ? "Next" : "Previous"} project: ${project.title}`}>
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <BlurImage src={project.thumbnail} blurDataURL={blurFor(project.thumbnail)} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
      </div>
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 transition-opacity duration-300",
          isNext ? "bg-gradient-to-l from-black/80 via-black/45 to-black/15" : "bg-gradient-to-r from-black/80 via-black/45 to-black/15"
        )}
      />
      <div className={clsx("absolute inset-0 flex flex-col justify-between p-5 md:p-7 text-white", isNext && "items-end text-right")}>
        <span className="font-body inline-flex items-center gap-2 text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-white/85">
          {!isNext && <ArrowLeft />}
          {isNext ? "Next project" : "Previous project"}
          {isNext && <ArrowRight />}
        </span>
        <div className="max-w-[90%]">
          <p className="font-heading text-xl md:text-2xl font-medium leading-snug drop-shadow-sm text-balance">{project.title}</p>
          {project.address && <p className="font-body text-sm text-white/80 mt-1">{project.address}</p>}
          {facts && <p className="font-body text-xs uppercase tracking-[0.14em] text-white/60 mt-1.5">{facts}</p>}
        </div>
      </div>
    </Link>
  );
};

const AllProjectsCard: React.FC = () => (
  <Link
    href="/projects"
    className={clsx(cardBase, "flex items-center justify-center bg-white border border-brand-sand hover:border-brand-brown hover:bg-brand-wash transition-colors")}
  >
    <span className="font-body inline-flex items-center gap-2 text-brand-brown font-medium">
      Browse all projects
      <ArrowRight />
    </span>
  </Link>
);

export const ProjectPager: React.FC<ProjectPagerProps> = ({ previous, next }) => {
  if (!previous && !next) return null;
  return (
    <nav aria-label="Project navigation" className="px-6 md:px-24 pt-8 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previous ? <PagerCard project={previous} direction="previous" /> : <AllProjectsCard />}
        {next ? <PagerCard project={next} direction="next" /> : <AllProjectsCard />}
      </div>
      <div className="max-w-6xl mx-auto flex justify-center mt-6">
        <Button href="/projects" variant="link" arrow>
          View all projects
        </Button>
      </div>
    </nav>
  );
};

export default ProjectPager;
