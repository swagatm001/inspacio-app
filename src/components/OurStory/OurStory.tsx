import { montserrat } from "@/fonts/display";
import { satoshi } from "@/fonts/satoshi";
import { ourStory } from "@/constants/ourStory";
import clsx from "clsx";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { BlurImage } from "../ui/BlurImage";
import { blurFor } from "@/utils/blur";
import React from "react";

const paragraphClass = "text-lg text-brand-body mb-4";

const OurStory: React.FC = () => {
  const excerpt = ourStory.homeExcerpt.map((i) => ourStory.paragraphs[i]);

  return (
    <section className="mb-28" aria-labelledby="our-story-heading">
      <div className="flex flex-col items-center mb-10">
        <SectionEyebrow number="04" label="Our story" className="justify-center" />
        <h2 id="our-story-heading" className={clsx(montserrat.className, "text-center text-4xl md:text-[52px] leading-[1.05] font-normal text-brand-ink")}>
          {ourStory.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] max-h-[560px] rounded-sm overflow-hidden">
            <BlurImage
              src={ourStory.author.photo}
              blurDataURL={blurFor(ourStory.author.photo)}
              alt={`${ourStory.author.name}, ${ourStory.author.role} of Inspacio Design`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className={clsx(satoshi.className, "mt-3 text-sm text-brand-muted")}>
            {ourStory.author.name}, {ourStory.author.role}
          </p>
        </div>

        <div className={clsx(satoshi.className, "lg:col-span-7")}>
          <h3 className={clsx(montserrat.className, "text-2xl font-medium text-brand-ink mb-6")}>
            {ourStory.headline}
          </h3>
          {excerpt.map((text) => (
            <p key={text.slice(0, 32)} className={paragraphClass}>
              {text}
            </p>
          ))}
          <p className={clsx(paragraphClass, "font-medium text-brand-ink")}>
            {ourStory.closing[0]} {ourStory.closing[1]}
          </p>
          <Button href={ourStory.redirectUrl} variant="secondary" arrow className="mt-2">
            {ourStory.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
