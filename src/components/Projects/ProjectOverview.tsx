import React from "react";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface ProjectOverviewProps {
  description: string;
  type: string;
  location: string;
  year: string | number;
  attributes?: { label: string; value: string }[];
}

/** Facts as a flat spec strip. Drops rows that repeat the type or state the obvious. */
const buildFacts = (type: string, location: string, year: string | number, attributes: { label: string; value: string }[]) => {
  const facts: [string, string][] = [];
  if (type) facts.push(["Type", type]);
  if (location) facts.push(["Location", location]);
  if (year) facts.push(["Year", String(year)]);
  for (const a of attributes) {
    const value = a.value.trim();
    if (!value) continue;
    if (value.toLowerCase() === type.toLowerCase()) continue;
    if (a.label.toLowerCase() === "status" && value.toLowerCase() === "completed") continue;
    facts.push([a.label, value]);
  }
  return facts;
};

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ description, type, location, year, attributes = [] }) => {
  const facts = buildFacts(type, location, year, attributes);

  return (
    <section className="px-6 md:px-24 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow number="" label="The brief" />
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-brand-ink text-balance">{description}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <div className="flex flex-col gap-2 lg:items-end">
              <p className="font-body text-sm text-brand-muted">Like this project? Let’s talk about yours.</p>
              <BookFreeAppointment title="Start a similar project" size="sm" />
            </div>
          </div>
        </div>

        {facts.length > 0 && (
          <dl className="mt-10 md:mt-12 pt-8 border-t border-brand-sand grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-8 gap-y-6">
            {facts.map(([label, value]) => (
              <div key={label} className="min-w-0">
                <dt className="font-body text-[11px] uppercase tracking-[0.18em] text-brand-faint mb-1.5">{label}</dt>
                <dd className="font-heading text-base md:text-lg text-brand-ink leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
};

export default ProjectOverview;
