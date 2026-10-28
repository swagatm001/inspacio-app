import React from "react";
import ProjectsCatalog from "@/components/Projects/ProjectsCatalog";
import type { Metadata } from "next";
import { projectsConstants } from "@/constants/projects";
import { blurFor } from "@/utils/blur";
import type { I_Project } from "@/components/LatestProject/Gallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Interior Design Projects in Bangalore | Inspacio Portfolio",
    description: "Explore Inspacio’s interior design projects in Bangalore, featuring residential, commercial, architecture and turnkey project execution. View our portfolio.",
    alternates: { canonical: "/projects" },
  };
}

export default function ProjectsPage() {
  const projects = projectsConstants.map((p) => ({ ...p, thumbnailBlur: blurFor(p.thumbnail) })) as I_Project[];
  return (
    <div>
      <ProjectsCatalog projects={projects} />
    </div>
  );
}
