import React from "react";
import { I_Project, Project } from "./Project";
import { T_Category } from "./Categories";

interface I_Gallery {
  selectedCategory: T_Category;
  projects: Array<I_Project>;
}

export const Gallery: React.FC<I_Gallery> = ({
  selectedCategory,
  projects,
}) => {

  
  const filteredProjects = projects.filter(project => project.category.value === selectedCategory.value);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {filteredProjects.map((p, i) => (
        <Project
          key={i}
          title={p.title}
          address={p.address}
          thumbnail={p.thumbnail as string}
          category={p?.category}
          slug={`/projects/${p.slug}`}
        />
      ))}
    </div>
  );
};
