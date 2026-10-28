import { awards } from "@/constants/awards";
import React from "react";
import AwardCard from "./AwardCard";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const options: EmblaOptionsType = {
  align: "center",
  loop: true,
  breakpoints: { "(max-width: 768px)": { align: "center" } },
};

const Awards: React.FC = () => {
  // Duplicate the short list so the looping carousel always has enough slides to scroll.
  const slides = [...awards, ...awards].map((award, index) => (
    <AwardCard key={`${award.title}-${index}`} title={award.title} description={award.description} />
  ));

  return (
    <section className="py-8" aria-labelledby="awards-heading">
      <h2
        id="awards-heading"
        className={clsx(montserrat.className, "mb-8 text-center text-2xl md:text-[40px] font-medium text-[#3D3834]")}
      >
        Awards
      </h2>
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
    </section>
  );
};

export default Awards;
