"use client";
import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { projectCategories, projectsByCategory } from "@/constants/projects";
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import { GalleryCard } from "@/components/LatestProject/GalleryCard";

const ProjectsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(projectCategories[0].value);

  const projects = useMemo(() => {
    return projectsByCategory[selectedCategory as keyof typeof projectsByCategory] || projectsByCategory.all;
  }, [selectedCategory]);

  return (
    <main className="mt-16">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className={clsx(montserrat.className, 'text-2xl md:text-4xl text-center font-medium mb-4 text-[#3D3834]')}>Projects</h1>

        {/* Category tabs (horizontal scroll like services) */}
        <div className="w-full overflow-x-auto no-scrollbar border-b border-light-gray mb-6">
          <div className="w-full flex flex-nowrap whitespace-nowrap md:justify-center">
            {projectCategories.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedCategory(c.value)}
                className={clsx(satoshi.className, 'py-2 px-4 flex-shrink-0 whitespace-nowrap', selectedCategory === c.value ? 'border-b-2 border-[#3D3834] text-[#3D3834] font-medium' : 'text-[#78736F]')}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
          <div  className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2">
              {projects.length > 0 && projects.map((project,index) => (
            <GalleryCard key={index} project={project} />
        ))}
            </div>
        
      </section>
    </main>
  );
};

export default ProjectsCatalog;
