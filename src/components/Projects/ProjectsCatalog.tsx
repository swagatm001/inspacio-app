"use client";
import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { ProjectList } from "./ProjectList";
import { montserrat } from "@/fonts/display";
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

type View = "grid" | "list";

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
  </svg>
);

const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

interface ProjectsCatalogProps {
  projects: I_Project[];
}

const ProjectsCatalog: React.FC<ProjectsCatalogProps> = ({ projects: allProjects }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [view, setView] = useState<View>("grid");

  const locations = useMemo(() => {
    const unique = new Set<string>();
    allProjects.forEach((p) => {
      if (p.address) unique.add(p.address);
    });
    return Array.from(unique).sort();
  }, [allProjects]);

  const projects = useMemo(() => {
    return allProjects.filter((p) => {
      if (selectedLocation && p.address && !String(p.address).toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
      if (selectedType && p.type && p.type.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [allProjects, selectedLocation, selectedType]);

  const hasFilters = Boolean(selectedLocation || selectedType);
  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedType("");
  };

  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className={clsx(montserrat.className, "text-2xl md:text-4xl text-center font-medium mb-8 text-brand-ink")}>
          Projects
        </h1>

        {/* Filter bar */}
        <div className={clsx(satoshi.className, "mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between")}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Type: segmented control */}
            <div
              role="group"
              aria-label="Project type"
              className="inline-flex w-full sm:w-auto p-1 rounded-full border border-brand-sand bg-white shadow-sm"
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
                      "flex-1 sm:flex-none h-9 px-5 rounded-full text-sm md:text-base whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/40",
                      active ? "bg-brand-brown text-white shadow-sm" : "text-brand-ink hover:bg-brand-wash"
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
              <span className="pointer-events-none absolute left-4 text-brand-tan">
                <PinIcon />
              </span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={clsx(
                  "appearance-none w-full sm:min-w-[260px] h-11 pl-11 pr-11 rounded-full border bg-white text-sm md:text-base cursor-pointer shadow-sm transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/40 hover:border-brand-tan",
                  selectedLocation ? "border-brand-brown text-brand-ink" : "border-brand-sand text-brand-muted"
                )}
              >
                <option value="">All locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 text-brand-brown">
                <ChevronIcon />
              </span>
            </label>
          </div>

          <div className="flex items-center gap-5 text-sm md:text-base">
            <div role="group" aria-label="View" className="hidden lg:inline-flex p-1 rounded-full border border-brand-sand bg-white shadow-sm">
              {(["grid", "list"] as View[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={view === v}
                  onClick={() => setView(v)}
                  className={clsx(
                    "inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-sm capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/40",
                    view === v ? "bg-brand-brown text-white" : "text-brand-ink hover:bg-brand-wash"
                  )}
                >
                  {v === "grid" ? <GridIcon /> : <ListIcon />}
                  {v}
                </button>
              ))}
            </div>
            <p className="text-brand-muted" aria-live="polite">
              Showing <span className="font-medium text-brand-ink">{projects.length}</span> of {allProjects.length} projects
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
          view === "list" ? (
            <div className="hidden lg:block">
              <ProjectList projects={projects} />
            </div>
          ) : null
        ) : null}
        {projects.length > 0 ? (
          <div className={clsx("grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2", view === "list" && "lg:hidden")}>
            {projects.map((project) => (
              <GalleryCard key={project.slug} project={project} className="h-80" />
            ))}
          </div>
        ) : (
          <div className={clsx(satoshi.className, "rounded-lg border border-dashed border-brand-sand bg-white/60 px-6 py-16 text-center")}>
            <p className="text-lg text-brand-ink mb-2">No projects match these filters.</p>
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
