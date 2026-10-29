import { Gallery, I_Project } from "./Gallery";
import { latestProjectConstants } from "@/constants/projects";
import { blurFor } from "@/utils/blur";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { FEATURED_PROJECT_SLUG } from "../FeaturedProject/FeaturedProject";

export const LatestProjects = () => {
  const projects: I_Project[] = latestProjectConstants
    .filter((p) => p.slug !== FEATURED_PROJECT_SLUG)
    .map((p) => ({ ...p, thumbnailBlur: blurFor(p.thumbnail) }));

  return (
    <section className="mb-28" aria-labelledby="latest-works-heading">
      <div className="flex justify-between items-end mb-10">
        <div>
          <SectionEyebrow number="03" label="Selected work" />
          <h2 id="latest-works-heading" className="font-heading text-4xl md:text-[52px] leading-[1.05] font-normal text-brand-ink">
            Our Latest Works
          </h2>
        </div>
        <Button href="/projects" variant="secondary" arrow className="hidden md:inline-flex">
          View All Projects
        </Button>
      </div>
      <Gallery projects={projects} />
      <div className="flex justify-center md:hidden">
        <Button href="/projects" variant="secondary" arrow>
          View All Projects
        </Button>
      </div>
    </section>
  );
};
