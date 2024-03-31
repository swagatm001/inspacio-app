import React from "react";
import { I_Project, Project } from "./Project";
import { T_Category } from "./Categories";

interface I_Gallery {
  selectedCategory: T_Category
  projects: Array<I_Project>
}

export const Gallery:React.FC<I_Gallery> = ({selectedCategory, projects}) => {

  const filteredProjects = []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};
