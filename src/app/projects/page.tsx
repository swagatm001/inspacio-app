import { ProjectsHero } from "@/components/Hero";
import { projectConstants } from "@/constants/projects";
import { Portfolio } from "@/components/Portfolio";

const Projects = () => {
  return (
    <div>
      <ProjectsHero html={projectConstants.hero.text} />
      <Portfolio />
    </div>
  );
};

export default Projects;
