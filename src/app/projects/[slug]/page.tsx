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
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

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
      <ScrollFadeIn>
        <ProjectHero
        title={title}
        subtitle={subtitle}
        type={type}
        location={location}
        year={year}
      />
      </ScrollFadeIn>
      <ScrollFadeIn delay={300}><ProjectMainImage src={project.thumbnail} alt={title} /></ScrollFadeIn>
      {description && (
        <ScrollFadeIn><ProjectDescription>{description}</ProjectDescription></ScrollFadeIn>
      )}
      {/* Render project sections (each uses ProjectShowcaseSection). If none provided, show testimonials and other projects. */}
      {project.sections && project.sections.length > 0 ? (
        project.sections.map((sec, idx) => (
          <ScrollFadeIn key={idx}>
            <ProjectShowcaseSection
            key={idx}
            title={sec.title}
            intro={sec.intro}
            moreText={undefined}
            images={sec.images}
          />
          </ScrollFadeIn>
        ))
      ) : null}
      {/* Testimonials section placed under the showcase */}
      <ScrollFadeIn><Testimonials /></ScrollFadeIn>
      <ScrollFadeIn><ProjectOtherProjects project={project} /></ScrollFadeIn>
    </div>
  );
};

export default ProjectPage;
