import { ourStory } from "@/constants/ourStory";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import clsx from "clsx";
import Image from "next/image";

const paragraphClass = "text-lg text-brand-body mb-4";

const About = () => {
  return (
    <div className="pb-10">
      <h1 className={clsx(montserrat.className, "text-3xl md:text-5xl font-medium text-brand-ink mb-10")}>
        {ourStory.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative w-full aspect-[4/5] max-h-[640px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ourStory.author.photo}
              alt={`${ourStory.author.name}, ${ourStory.author.role} of Inspacio Design`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className={clsx(satoshi.className, "mt-3 text-sm text-brand-muted")}>
            {ourStory.author.name}, {ourStory.author.role}
          </p>
        </div>

        <div className={clsx(satoshi.className, "lg:col-span-7")}>
          <h2 className={clsx(montserrat.className, "text-2xl font-medium text-brand-ink mb-6")}>
            {ourStory.headline}
          </h2>
          {ourStory.paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className={paragraphClass}>
              {text}
            </p>
          ))}
          {ourStory.closing.map((text) => (
            <p key={text} className={clsx(paragraphClass, "mb-1 font-medium text-brand-ink")}>
              {text}
            </p>
          ))}

          <h2 className={clsx(montserrat.className, "text-2xl font-medium text-brand-ink mt-12 mb-6")}>
            Leadership
          </h2>
          <p className={paragraphClass}>
            Swati Panda is the Principal Architect, Founder and Managing Director of Inspacio Design. Under her
            guidance, Inspacio has become a well-known name among homebuyers and businesses in Bangalore. She holds a
            firm conviction that each project ought to be crafted as a contextual evolution of spaces, offering fresh
            perceptions, with every design attuned to its climate and weaving in sustainability.
          </p>
          <p className={paragraphClass}>
            Known for a simple yet aesthetically rich approach, she juxtaposes the orthogonal nature of clean lines with
            a luxurious mix of materials, colours and textures to create a distinct look for each project. She believes
            no space is too small to be designed, because creativity has no size and no limits. A senior architect with
            more than 13 years of experience, she has delivered residential and commercial projects across sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
