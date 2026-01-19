import React from "react";
import ProjectsCatalog from "@/components/Projects/ProjectsCatalog";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Interior Design Projects in Bangalore | Inspacio Portfolio",
    description: "Explore Inspacio’s interior design projects in Bangalore, featuring residential, commercial, architecture and turnkey project execution. View our portfolio.",
  };
}

export default function ProjectsPage() {

  return (
    <div>
      <ProjectsCatalog />
    </div>
  );
};