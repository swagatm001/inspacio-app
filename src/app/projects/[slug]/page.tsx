import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectMainImage } from "@/components/Projects/ProjectMainImage";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import { ProjectSection } from "@/components/Projects/ProjectSection";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import ProjectShowcaseSection from "@/components/Projects/ProjectShowcaseSection";
import { ProjectOtherProjects } from "@/components/Projects/ProjectOtherProjects";
import Testimonials from '@/components/Testimonial/Testimonials'
import { projectsConstants } from "@/constants/projects";
import { Project } from "@/constants/projects";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const project: Project | undefined = projectsConstants.find((p) => p.slug === params.slug);
  if(project) {
    return {
      title: project.title || "Project Details",
      description: project.subtitle || "Detailed view of the project",
    }
  } else {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project: Project | undefined = projectsConstants.find((p) => p.slug === params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }


  // Map available data from the project object
  const title = project.title || "";
  // No subtitle or year in data, so pass empty string
  const subtitle = project.subtitle || "";
  const type = project.category?.label || "";
  const location = project.address || "";
  const year = project.year || "";
  const description = project.description || "";

  return (
    <div className="bg-[#f8f7f3]">
      <ProjectHero
        title={title}
        subtitle={subtitle}
        type={type}
        location={location}
        year={year}
      />
      <ProjectMainImage src={project.thumbnail} alt={title} />
      {description && (
        <ProjectDescription>{description}</ProjectDescription>
      )}
      {/* Render project sections (each uses ProjectShowcaseSection). If none provided, show testimonials and other projects. */}
      {project.sections && project.sections.length > 0 ? (
        project.sections.map((sec, idx) => (
          <ProjectShowcaseSection
            key={idx}
            title={sec.title}
            intro={sec.intro}
            moreText={sec.moreText}
            images={sec.images}
          />
        ))
      ) : null}
      {/* Testimonials section placed under the showcase */}
      <Testimonials />
      <ProjectOtherProjects project={project} />
    </div>
  );
};

export default ProjectPage;
