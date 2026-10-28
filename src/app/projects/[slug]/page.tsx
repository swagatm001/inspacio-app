import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectMainImage } from "@/components/Projects/ProjectMainImage";
import { ProjectDescription } from "@/components/Projects/ProjectDescription";
import ProjectShowcaseSection from "@/components/Projects/ProjectShowcaseSection";
import { ProjectPager } from "@/components/Projects/ProjectPager";
import { ImageComparator } from "@/components/Projects/ImageComparator";
import Testimonials from "@/components/Testimonial/Testimonials";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { projectsConstants } from "@/constants/projects";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectsConstants.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsConstants.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found | Inspacio" };
  }
  const title = `${project.title} | Inspacio Projects`;
  const description = project.intro || project.subtitle || project.description;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description, images: [{ url: project.thumbnail }] },
  };
}

const ProjectPage = ({ params }: Props) => {
  const index = projectsConstants.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projectsConstants[index];
  const previous = projectsConstants[index - 1];
  const next = projectsConstants[index + 1];

  return (
    <div className="bg-brand-cream">
      <ScrollFadeIn>
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle || ""}
          type={project.category?.label || ""}
          location={project.address || ""}
          year={project.year || ""}
        />
      </ScrollFadeIn>
      <ScrollFadeIn delay={200}>
        <ProjectMainImage src={project.thumbnail} alt={project.title} />
      </ScrollFadeIn>
      {project.description && (
        <ScrollFadeIn>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ScrollFadeIn>
      )}
      {project.beforeAfter && (
        <ScrollFadeIn>
          <ImageComparator
            before={project.beforeAfter.before}
            after={project.beforeAfter.after}
            caption={project.beforeAfter.caption}
            altBefore={`${project.title} before`}
            altAfter={`${project.title} after`}
          />
        </ScrollFadeIn>
      )}
      {project.sections?.map((section, i) => (
        <ScrollFadeIn key={`${section.title}-${i}`}>
          <ProjectShowcaseSection title={section.title} intro={section.intro} moreText={section.moreText} images={section.images} />
        </ScrollFadeIn>
      ))}
      <ScrollFadeIn>
        <Testimonials />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ProjectPager previous={previous} next={next} />
      </ScrollFadeIn>
    </div>
  );
};

export default ProjectPage;
