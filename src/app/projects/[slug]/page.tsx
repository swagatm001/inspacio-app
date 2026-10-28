import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectOverview } from "@/components/Projects/ProjectOverview";
import ProjectShowcaseSection from "@/components/Projects/ProjectShowcaseSection";
import { ProjectPager } from "@/components/Projects/ProjectPager";
import { ImageComparator } from "@/components/Projects/ImageComparator";
import { PressQuote } from "@/components/Projects/PressQuote";
import Testimonials from "@/components/Testimonial/Testimonials";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { projectsConstants } from "@/constants/projects";
import { blurFor, blurMapFor } from "@/utils/blur";

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
  const type = project.category?.label || "";
  const location = project.address || "";
  const year = project.year || "";
  const imageCount = project.sections?.reduce((n, s) => n + (s.images?.length ?? 0), 0) ?? 0;

  return (
    <div className="bg-brand-cream">
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle || ""}
        type={type}
        location={location}
        year={year}
        image={project.thumbnail}
        imageBlur={blurFor(project.thumbnail)}
        recognition={project.recognition}
      />
      {project.description && (
        <ScrollFadeIn>
          <ProjectOverview description={project.description} type={type} location={location} year={year} imageCount={imageCount} recognition={project.recognition} />
        </ScrollFadeIn>
      )}
      <ScrollFadeIn>
        <PressQuote items={project.recognition} />
      </ScrollFadeIn>
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
          <ProjectShowcaseSection
            title={section.title}
            intro={section.intro}
            moreText={section.moreText}
            images={section.images}
            blurs={blurMapFor(section.images ?? [])}
          />
        </ScrollFadeIn>
      ))}
      <ScrollFadeIn>
        <Testimonials projectType={project.type} />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ProjectPager previous={previous} next={next} />
      </ScrollFadeIn>
    </div>
  );
};

export default ProjectPage;
