import Link from "next/link";
import React from "react";
import clsx from "clsx";
import type { Project } from "@/constants/projects";

interface ProjectPagerProps {
  previous?: Project;
  next?: Project;
}

const pagerLink =
  "group flex flex-col gap-1 rounded-lg border border-brand-sand bg-white px-5 py-4 transition hover:border-brand-brown hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50";

export const ProjectPager: React.FC<ProjectPagerProps> = ({ previous, next }) => {
  if (!previous && !next) return null;
  return (
    <nav aria-label="Project navigation" className="px-6 md:px-24 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className={pagerLink}>
            <span className="font-body text-sm text-[#696969]">&larr; Previous project</span>
            <span className="font-heading text-lg md:text-xl text-brand-ink group-hover:text-brand-brown">{previous.title}</span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className={clsx(pagerLink, "sm:text-right sm:items-end")}>
            <span className="font-body text-sm text-[#696969]">Next project &rarr;</span>
            <span className="font-heading text-lg md:text-xl text-brand-ink group-hover:text-brand-brown">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ProjectPager;
