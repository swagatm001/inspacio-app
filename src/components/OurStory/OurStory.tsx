import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { ourStory } from "@/constants/ourStory";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "../ui/Button";
import React from "react";

const paragraphClass = "text-lg text-[#3f3f3f] mb-4";

const OurStory: React.FC = () => {
  const excerpt = ourStory.homeExcerpt.map((i) => ourStory.paragraphs[i]);

  return (
    <section className="mb-28" aria-labelledby="our-story-heading">
      <h2
        id="our-story-heading"
        className={clsx(montserrat.className, "text-center text-2xl md:text-[40px] font-medium mb-10 text-[#3D3834]")}
      >
        {ourStory.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] max-h-[560px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ourStory.author.photo}
              alt={`${ourStory.author.name}, ${ourStory.author.role} of Inspacio Design`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className={clsx(satoshi.className, "mt-3 text-sm text-[#696969]")}>
            {ourStory.author.name}, {ourStory.author.role}
          </p>
        </div>

        <div className={clsx(satoshi.className, "lg:col-span-7")}>
          <h3 className={clsx(montserrat.className, "text-2xl font-medium text-[#3D3834] mb-6")}>
            {ourStory.headline}
          </h3>
          {excerpt.map((text) => (
            <p key={text.slice(0, 32)} className={paragraphClass}>
              {text}
            </p>
          ))}
          <p className={clsx(paragraphClass, "font-medium text-[#3D3834]")}>
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
