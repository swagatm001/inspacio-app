import { Banner } from "@/components/Banner";
import { ProjectsHero } from "@/components/Hero";
import { ImageLeftCopyRight } from "@/components/ImageLeftCopyRight";
import { projectConstants } from "@/constants/projects";
import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <div className="mt-20 mb-8">
          <p className={clsx(playfair.className, "text-3xl lg:text-5xl mb-4")}>
            Company Overview
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            KDS Design-Build Services specializes in bringing your dream
            interior decor to life, whether it&apos;s sleek, sophisticated, and
            smart or a contemporary fusion of ethnic styles. Our designs feature
            clean lines, diverse textures, and artwork, seamlessly integrated
            with cutting-edge technology, ensuring that the spaces you inhabit
            are not only aesthetically pleasing but also comfortable and
            sustainable.
          </p>
          <p>
            We take pride in the quality of our designs, their
            cost-effectiveness, and their environmental sensitivity. Achieving
            these goals requires a high level of technical expertise, enabling
            us to meet challenging budget and time constraints and effectively
            address the complexities of integrating new construction with
            existing buildings and conditions.
          </p>
          <p>
            With KDS, clients benefit from a streamlined process where they
            manage just one contract, providing a single point of
            responsibility. Our designers and contractors work as a cohesive
            team, offering unified recommendations. Any changes are handled by
            the design-build entity, minimizing the need for change orders and
            ensuring a smooth project delivery
          </p>
        </div>
        <div>
          <div className="my-16">
            <p
              className={clsx(playfair.className, "text-3xl lg:text-5xl mb-4")}
            >
              Leadership
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start gap-6 mb-16">
          <div className="flex-1 ">
            <div className="w-[354px] h-[484px] lg:h-[720px] lg:w-full xl:h-[720px] xl:w-[592px]">
              <div className="w-full h-full relative">
                <Image src="/kds/main/swati.jpg" fill alt="swati panda" />
              </div>
            </div>
          </div>
          <div className="flex-1 h-full">
            <div className="my-8">
              <p
                className={clsx(
                  playfair.className,
                  "text-3xl lg:text-5xl mb-4"
                )}
              >
                Swati Panda
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <p>
                Ms. Swati Panda is the Principal Architect, Founder & Managing
                Director of Kreative Dezine Studio. Under her guidance, Kreative
                Dezine Studio has become a well known brand among homebuyers. 
                Swati Panda holds a firm conviction that each project ought to
                be crafted as a contextual evolution of spaces, offering fresh
                perceptions. Every design is meticulously attuned to the
                climate, seamlessly weaving in sustainability. This beliefs are
                reflected in every project by Kreative Dezine Studio. From
                planning well to designing interiors that reflect a client’s
                style is Ms. Swati’s expertise.
              </p>
              <p>
                Known for simplicity, yet aesthetically pleasing design
                approach, Architect Swati Panda juxtaposes the orthogonal nature
                of clean lines with a luxurious mix of materials colors and
                texture to create a distinct look for each project. Swati
                believes that no space is too small to be designed, as
                creativity has no size, nor limits. She worked as a Senior
                Architect for 14+ years before launching Kreative Dezine Studio
                in 2020.
              </p>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default About;
