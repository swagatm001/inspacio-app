"use client";
import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { Project, projectsConstants } from "@/constants/projects";
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import { GalleryCard } from "@/components/LatestProject/GalleryCard";
import { I_Project } from "@/components/LatestProject/Gallery";

const ProjectsCatalog: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  // build list from full projects dataset (projectsByCategory is still available, but we'll filter from all projects)
  const allProjects = useMemo(() => {
    // flatten projectsByCategory 'all' is fine
    return (projectsConstants || []);
  }, []);

  // Extract unique locations from projects
  const locations = useMemo(() => {
    const uniqueLocations = new Set<string>();
    allProjects.forEach((p: Project) => {
      if (p.location) {
        uniqueLocations.add(p.location);
      } else if (p.address) {
        // Extract city from address if location is not set
        const city = p.address.split(",").pop()?.trim();
        if (city) uniqueLocations.add(city);
      }
    });
    return Array.from(uniqueLocations).sort();
  }, [allProjects]);

  const projects = useMemo(() => {
    return allProjects.filter((p: Project) => {
      if (selectedLocation && (p.location || p.address) && !String(p.location || p.address).toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
      if (selectedType && p.type && p.type.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
      return true;
    }) as I_Project[];
  }, [allProjects, selectedLocation, selectedType]);

  return (
    <main className="mt-16">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className={clsx(montserrat.className, 'text-2xl md:text-4xl text-center font-medium mb-4 text-[#3D3834]')}>Projects</h1>

        {/* Filters: Location and Type as dropdowns, chips on right */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="flex gap-4 items-center">
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="border rounded py-2 px-3 bg-transparent border-[#E2D5CC] focus:outline-none focus:ring-0 focus:border-[#E2D5CC]"
              >
                <option value="">location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border rounded px-3 py-2 bg-transparent border-[#E2D5CC] focus:outline-none focus:ring-0 focus:border-[#E2D5CC]"
              >
                <option value="">Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="ml-auto flex gap-2 items-center">
            {selectedLocation && (
              <div className="flex items-center gap-2 bg-[#F3F2F0] px-3 py-1 rounded-full">
                <span className={clsx(satoshi.className, "text-sm")}>{selectedLocation}</span>
                <button onClick={() => setSelectedLocation("")} aria-label="remove location" className="text-sm">✕</button>
              </div>
            )}
            {selectedType && (
              <div className="flex items-center gap-2 bg-[#F3F2F0] px-3 py-1 rounded-full">
                <span className={clsx(satoshi.className, "text-sm")}>{selectedType}</span>
                <button onClick={() => setSelectedType("")} aria-label="remove type" className="text-sm">✕</button>
              </div>
            )}
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
