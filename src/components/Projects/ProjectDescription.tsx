import { satoshi } from "@/fonts/satoshi";
import clsx from "clsx";
import React from "react";

interface ProjectDescriptionProps {
  children: React.ReactNode;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ children }) => (
  <section className="px-6 md:px-24 py-8 text-[#3f3f3f]">
    <div className={clsx(satoshi.className," text-2xl max-w-6xl mx-auto")}>{children}</div>
  </section>
);
