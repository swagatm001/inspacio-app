import { ProjectsHero } from "@/components/Hero";
import { ImageLeftCopyRight } from "@/components/ImageLeftCopyRight";
import { projectConstants } from "@/constants/projects";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <ProjectsHero html={projectConstants.hero.text} />
      <div>
        <ImageLeftCopyRight
          wrapperClassName="lg:gap-20"
          leftTemplate={
            <div className="w-full h-[484px] lg:h-screen mb-6 lg:mb-0 lg:py-20">
              <div className="w-full h-full relative">
                <Image src="/kds/main/swati.jpg" fill alt="swati panda" />
              </div>
            </div>
          }
          rightTemplate={
            <div className="w-full h-[484px] lg:h-screen lg:py-20">
              <div className="w-full h-full relative">
                <Image src="/kds/main/sangeeta.jpg" fill alt="swati panda" />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default About;
