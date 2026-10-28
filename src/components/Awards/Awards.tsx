import { awards, press } from "@/constants/awards";
import Link from "next/link";
import { ExternalIcon } from "../ui/Icons";
import React from "react";
import AwardCard from "./AwardCard";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const options: EmblaOptionsType = {
  align: "center",
  loop: true,
  breakpoints: { "(max-width: 768px)": { align: "center" } },
};

const Awards: React.FC = () => {
  // Duplicate the short list so the looping carousel always has enough slides to scroll.
  const slides = [...awards, ...awards].map((award, index) => (
    <AwardCard key={`${award.title}-${index}`} {...award} />
  ));

  return (
    <section className="py-8" aria-labelledby="awards-heading">
      <div className="flex flex-col items-center mb-8">
        <SectionEyebrow number="06" label="Recognition" className="justify-center" />
        <h2 id="awards-heading" className={clsx(montserrat.className, "text-center text-2xl md:text-[40px] font-medium text-[#3D3834]")}>
          Awards
        </h2>
      </div>
      <div className={clsx(satoshi.className, "flex flex-col md:flex-row items-center w-full gap-8")}>
        <div className="basis-1/3 flex-shrink-0">
          <h3 className="mb-4 text-2xl font-bold text-[#3D3834]">Celebrating Design Excellence</h3>
          <p className="text-lg text-gray-700">
            Honoured for creativity, craftsmanship, and meaningful design, each recognition strengthens our pursuit of
            timeless, human-centric spaces.
          </p>
        </div>
        <div className="basis-2/3 min-w-0 w-full">
          <EmblaCarousel slides={slides} options={options} />
        </div>
      </div>

      {press.length > 0 && (
        <div className="mt-10 pt-8 border-t border-brand-sand flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <p className="font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-brand-tan shrink-0">Featured in</p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {press.map((item) => (
              <li key={item.href} className="flex items-center gap-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading inline-flex items-center gap-2 text-2xl md:text-3xl font-medium text-brand-ink underline-offset-8 hover:underline"
                  aria-label={`${item.outlet}: ${item.title} (opens in a new tab)`}
                >
                  {item.outlet}
                  <ExternalIcon className="w-4 h-4 text-brand-tan" />
                </a>
                {item.projectSlug && (
                  <Link href={`/projects/${item.projectSlug}`} className="font-body text-sm text-[#696969] underline-offset-4 hover:underline hover:text-brand-brown">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Awards;
