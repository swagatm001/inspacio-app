"use client";
import { Gallery } from "./Gallery";
import { latestProjectConstants } from "@/constants/projects";
import { Button } from "../ui/Button";

export const LatestProjects = () => {
  return (
    <section className="mb-28" aria-labelledby="latest-works-heading">
      <div className="flex justify-between items-center mb-10">
        <h2 id="latest-works-heading" className="font-heading text-2xl md:text-[40px] text-brand-ink">
          Our Latest Works
        </h2>
        <Button href="/projects" variant="secondary" arrow className="hidden md:inline-flex">
          View All Projects
        </Button>
      </div>
      <Gallery projects={latestProjectConstants} />
      <div className="flex justify-center md:hidden">
        <Button href="/projects" variant="secondary" arrow>
          View All Projects
        </Button>
      </div>
    </section>
  );
};
