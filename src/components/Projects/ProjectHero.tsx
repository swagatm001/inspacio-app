import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import clsx from "clsx";
import React from "react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  year: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, type, location, year }) => (
  <section className="px-6 md:px-24 py-28">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-8">
        <h1 className={clsx(montserrat.className,"text-4xl md:text-6xl font-medium text-[#3d3834] leading-tight")}>{title}</h1>
        {subtitle && <p className={clsx(satoshi.className, "mt-4 text-xl md:text-2xl text-[#3f3f3f]")}>{subtitle}</p>}
      </div>

      <div className="md:col-span-4 flex md:justify-end">
        <div className="flex items-center gap-6">
          <div className="hidden md:block w-1 h-full bg-[#a6836e] rounded" />
          <div className="text-sm md:text-xl text-[#6b6561]">
            <div className="mb-4">
              <div className={clsx(montserrat.className, "font-medium text-[#a6836e]")}>Type</div>
              <div className={clsx(satoshi.className, "text-[#3d3834]")}>{type}</div>
            </div>
            <div className="mb-4">
              <div className={clsx(montserrat.className, "font-medium text-[#a6836e]")}>Location</div>
              <div className={clsx(satoshi.className, "text-[#3d3834]")}>{location}</div>
            </div>
            <div>
              <div className={clsx(montserrat.className, "font-medium text-[#a6836e]")}>Year</div>
              <div className={clsx(satoshi.className, "text-[#3d3834]")}>{year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
