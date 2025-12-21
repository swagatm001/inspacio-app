import React from "react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  year: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, type, location, year }) => (
  <section className="px-24 py-16 flex gap-40 items-start">
    <div className="flex-1 flex flex-col gap-8">
      <h1 className="text-6xl font-montserrat font-medium text-[#3d3834]">{title}</h1>
      <p className="text-2xl text-[#3f3f3f]">{subtitle}</p>
    </div>
    <div className="w-64 flex flex-col gap-8 py-8">
      <div>
        <div className="text-[#a6836e] text-lg font-montserrat font-medium">Type</div>
        <div className="text-xl text-[#3d3834]">{type}</div>
      </div>
      <div>
        <div className="text-[#a6836e] text-lg font-montserrat font-medium">Location</div>
        <div className="text-xl text-[#3d3834]">{location}</div>
      </div>
      <div>
        <div className="text-[#a6836e] text-lg font-montserrat font-medium">Year</div>
        <div className="text-xl text-[#3d3834]">{year}</div>
      </div>
    </div>
  </section>
);
