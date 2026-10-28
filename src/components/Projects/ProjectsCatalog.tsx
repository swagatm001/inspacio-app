"use client";
import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { Project, projectsConstants } from "@/constants/projects";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { GalleryCard } from "@/components/LatestProject/GalleryCard";
import { I_Project } from "@/components/LatestProject/Gallery";
import { Button } from "../ui/Button";

const TYPE_OPTIONS = [
  { label: "All", value: "" },
  { label: "Residential", value: "Residential" },
  { label: "Commercial", value: "Commercial" },
];

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const ProjectsCatalog: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const allProjects = useMemo(() => projectsConstants || [], []);

  const locations = useMemo(() => {
    const unique = new Set<string>();
    allProjects.forEach((p: Project) => {
      if (p.address) unique.add(p.address);
    });
    return Array.from(unique).sort();
  }, [allProjects]);

  const projects = useMemo(() => {
    return allProjects.filter((p: Project) => {
      if (selectedLocation && p.address && !String(p.address).toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
      if (selectedType && p.type && p.type.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
      return true;
    }) as I_Project[];
  }, [allProjects, selectedLocation, selectedType]);

  const hasFilters = Boolean(selectedLocation || selectedType);
  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedType("");
  };

  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className={clsx(montserrat.className, "text-2xl md:text-4xl text-center font-medium mb-8 text-[#3D3834]")}>
          Projects
        </h1>

        {/* Filter bar */}
        <div className={clsx(satoshi.className, "mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between")}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Type: segmented control */}
            <div
              role="group"
              aria-label="Project type"
              className="inline-flex w-full sm:w-auto p-1 rounded-full border border-[#E0D9C9] bg-white shadow-sm"
            >
              {TYPE_OPTIONS.map((option) => {
                const active = selectedType === option.value;
                return (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedType(option.value)}
                    className={clsx(
                      "flex-1 sm:flex-none h-9 px-5 rounded-full text-sm md:text-base whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#885739]/40",
                      active ? "bg-[#885739] text-white shadow-sm" : "text-[#3D3834] hover:bg-[#F3EEE8]"
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {/* Location: styled native select */}
            <label className="relative inline-flex items-center w-full sm:w-auto">
              <span className="sr-only">Location</span>
              <span className="pointer-events-none absolute left-4 text-[#A6836E]">
                <PinIcon />
              </span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={clsx(
                  "appearance-none w-full sm:min-w-[260px] h-11 pl-11 pr-11 rounded-full border bg-white text-sm md:text-base cursor-pointer shadow-sm transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#885739]/40 hover:border-[#A6836E]",
                  selectedLocation ? "border-[#885739] text-[#3D3834]" : "border-[#E0D9C9] text-[#696969]"
                )}
              >
                <option value="">All locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 text-[#885739]">
                <ChevronIcon />
              </span>
            </label>
          </div>

          <div className="flex items-center gap-5 text-sm md:text-base">
            <p className="text-[#696969]" aria-live="polite">
              Showing <span className="font-medium text-[#3D3834]">{projects.length}</span> of {allProjects.length} projects
            </p>
            {hasFilters && (
              <Button variant="link" onClick={clearFilters} icon={<CloseIcon />}>
                Clear filters
              </Button>
            )}
          </div>
        </div>

        {/* Projects grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <GalleryCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className={clsx(satoshi.className, "rounded-lg border border-dashed border-[#E0D9C9] bg-white/60 px-6 py-16 text-center")}>
            <p className="text-lg text-[#3D3834] mb-2">No projects match these filters.</p>
            <Button variant="secondary" onClick={clearFilters}>
              Show all projects
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectsCatalog;
