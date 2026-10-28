"use client";
import { Project, projectsConstants } from "@/constants/projects";
import React, { useMemo } from "react";
import { GalleryCard } from "@/components/LatestProject/GalleryCard";
import { I_Project } from "@/components/LatestProject/Gallery";
import { Button } from "../ui/Button";

interface ProjectOtherProjectsProps {
  project: Project;
}

export const ProjectOtherProjects: React.FC<ProjectOtherProjectsProps> = ({ project }) => {
  const others = useMemo(
    () => projectsConstants.filter((p) => p.slug !== project.slug).slice(0, 3) as I_Project[],
    [project.slug]
  );

  return (
    <section className="px-6 md:px-24 py-16" aria-labelledby="other-projects-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="other-projects-heading" className="font-heading text-3xl md:text-4xl font-medium text-brand-ink text-center mb-10">
          More Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((p) => (
            <GalleryCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button href="/projects" variant="secondary" arrow>
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
};
