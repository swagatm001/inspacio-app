import Link from "next/link";
import React from "react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  year: string | number;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, type, location, year }) => (
  <section className="px-6 md:px-24 pt-28 pb-16 md:pb-24">
    <div className="max-w-6xl mx-auto">
      <nav aria-label="Breadcrumb" className="font-body text-sm md:text-base text-[#696969] mb-6">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/projects" className="text-brand-brown underline-offset-4 hover:underline">
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="truncate max-w-[60vw]">{title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-8">
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-brand-ink leading-tight">{title}</h1>
          {subtitle && <p className="font-body mt-4 text-xl md:text-2xl text-[#3f3f3f]">{subtitle}</p>}
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <div className="flex items-stretch gap-6">
            <div className="hidden md:block w-1 bg-brand-tan rounded" />
            <dl className="text-sm md:text-xl">
              <div className="mb-4">
                <dt className="font-heading font-medium text-brand-tan">Type</dt>
                <dd className="font-body text-brand-ink">{type}</dd>
              </div>
              <div className="mb-4">
                <dt className="font-heading font-medium text-brand-tan">Location</dt>
                <dd className="font-body text-brand-ink">{location}</dd>
              </div>
              <div>
                <dt className="font-heading font-medium text-brand-tan">Year</dt>
                <dd className="font-body text-brand-ink">{year}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);
