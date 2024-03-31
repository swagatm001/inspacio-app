import React from "react";

interface I_ProjectsHero {
  html: string;
}

export const ProjectsHero: React.FC<I_ProjectsHero> = ({ html }) => {
  return (
    <div className="py-20 lg:py-32 px-6 lg:px-0">
      <p
        className="text-2xl lg:text-5xl"
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    </div>
  );
};
