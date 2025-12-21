import React from "react";

interface ProjectOtherProjectsCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export const ProjectOtherProjectsCard: React.FC<ProjectOtherProjectsCardProps> = ({ title, location, description, image, onClick }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg w-[394px] h-[450px] cursor-pointer" onClick={onClick}>
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 gap-4 z-10">
      <h3 className="text-2xl text-white font-montserrat font-medium text-center">{title}</h3>
      <div className="bg-white/20 border border-[#c2c2c2] rounded-2xl px-4 py-1 text-white text-sm">{location}</div>
      <p className="text-white text-lg text-center">{description}</p>
      <button className="mt-4 border border-[#a4a4a4] rounded-xl px-5 py-3 bg-white text-[#3d3834] text-base font-medium flex items-center gap-2">Take me there</button>
    </div>
  </div>
);

interface ProjectOtherProjectsProps {
  projects: Array<{
    title: string;
    location: string;
    description: string;
    image: string;
    onClick?: () => void;
  }>;
}

export const ProjectOtherProjects: React.FC<ProjectOtherProjectsProps> = ({ projects }) => (
  <section className="px-24 py-16 flex flex-col gap-12">
    <h2 className="text-4xl font-montserrat font-medium text-[#3d3834] text-center w-full">Checkout Our Other Projects</h2>
    <div className="flex gap-8 w-full justify-center">
      {projects.map((p, i) => (
        <ProjectOtherProjectsCard key={i} {...p} />
      ))}
    </div>
  </section>
);
