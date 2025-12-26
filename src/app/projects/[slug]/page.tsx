"use client";

import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectMainImage } from "@/components/Projects/ProjectMainImage";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import { ProjectSection } from "@/components/Projects/ProjectSection";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import ProjectShowcaseSection from "@/components/Projects/ProjectShowcaseSection";
import { ProjectOtherProjects } from "@/components/Projects/ProjectOtherProjects";
import Testimonials from '@/components/Testimonial/Testimonials'
import { projectsConstants } from "@/constants/projects";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projectsConstants.find((p) => p.slug === params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }


  // Map available data from the project object
  const title = project.title || "";
  // No subtitle or year in data, so pass empty string
  const subtitle = project.subtitle || "";
  const type = project.category?.label || "";
  const location = project.address || "";
  const year = "";
  const mainImage = Array.isArray(project.image) && project.image.length > 0 ? project.image[0] : "";
  const description = project.description || "";
  const gallery = Array.isArray(project.image) ? project.image.slice(1) : [];

  // Filter other projects (exclude current)
  const otherProjects = projectsConstants
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3) // Show up to 3 other projects
    .map((p) => ({
      title: p.title || "",
      location: p.address || "",
      description: p.description ? p.description.slice(0, 100) + (p.description.length > 100 ? "..." : "") : "",
      image: Array.isArray(p.image) && p.image.length > 0 ? p.image[0] : p.thumbnail || "",
      onClick: () => window.location.href = `/projects/${p.slug}`
    }));

  return (
    <div className="bg-[#f8f7f3]">
      <ProjectHero
        title={title}
        subtitle={subtitle}
        type={type}
        location={location}
        year={year}
      />
      {mainImage && <ProjectMainImage src={mainImage} alt={title} />}
      {description && (
        <ProjectDescription>{description}</ProjectDescription>
      )}
      {/* No sections in data, so skip ProjectSection */}
      {gallery && gallery.length > 0 && (
        <ProjectShowcaseSection
          title="Layouts"
          intro={description ? description.slice(0, 180) : ''}
          moreText={description}
          images={[mainImage, ...gallery]}
          projectTitle={title}
        />
      )}
      {/* Testimonials section placed under the showcase */}
      <Testimonials />
      {otherProjects && otherProjects.length > 0 && (
        <ProjectOtherProjects projects={otherProjects} />
      )}
    </div>
  );
};

export default ProjectPage;
