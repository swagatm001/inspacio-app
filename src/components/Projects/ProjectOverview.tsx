import React from "react";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";
import { RecognitionBadge } from "../ui/RecognitionBadge";
import type { ProjectRecognition } from "@/constants/projects";

interface ProjectOverviewProps {
  description: string;
  type: string;
  location: string;
  year: string | number;
  imageCount: number;
  recognition?: ProjectRecognition[];
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ description, type, location, year, imageCount, recognition }) => (
  <section className="px-6 md:px-24 py-12 md:py-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <aside className="lg:col-span-4 order-2 lg:order-1">
        <div className="lg:sticky lg:top-24 rounded-2xl border border-brand-sand bg-white p-6">
          <dl className="font-body divide-y divide-brand-sand">
            {[
              ["Type", type],
              ["Location", location],
              ["Year", year],
              ["Photos", imageCount ? `${imageCount}` : ""],
            ].map(([label, value]) =>
              value ? (
                <div key={label as string} className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <dt className="text-brand-faint">{label}</dt>
                  <dd className="text-brand-ink font-medium text-right">{value}</dd>
                </div>
              ) : null
            )}
          </dl>
          {recognition && recognition.length > 0 && (
            <div className="mt-6 pt-6 border-t border-brand-sand">
              <p className="font-body text-xs uppercase tracking-[0.18em] text-brand-faint mb-3">Recognition</p>
              <ul className="flex flex-col gap-2">
                {recognition.map((item) => (
                  <li key={item.title}>
                    <RecognitionBadge item={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-6 pt-6 border-t border-brand-sand">
            <p className="font-body text-sm text-brand-muted mb-3">Like this project? Let’s talk about yours.</p>
            <BookFreeAppointment title="Start a similar project" size="sm" />
          </div>
        </div>
      </aside>
      <div className="lg:col-span-8 order-1 lg:order-2">
        <p className="font-body text-xl md:text-2xl text-brand-body leading-relaxed">{description}</p>
      </div>
    </div>
  </section>
);

export default ProjectOverview;
