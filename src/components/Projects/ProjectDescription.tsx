import React from "react";

interface ProjectDescriptionProps {
  children: React.ReactNode;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ children }) => (
  <section className="px-24 py-16 text-2xl text-[#3f3f3f]">
    {children}
  </section>
);
