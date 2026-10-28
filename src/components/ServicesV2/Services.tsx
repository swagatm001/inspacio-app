"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Service, services } from "@/constants/services";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";
import { slugify } from "@/utils/slugify";
import { ProcessStrip } from "./ProcessStrip";
import { ServiceGallery, SectorTiles } from "./ServiceVisuals";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-1.5 shrink-0 text-brand-brown" aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
);

const serviceKeys = Object.keys(services);

interface ServicesProps {
  /** Blur previews for the project thumbnails used in the tabs. */
  blurMap?: Record<string, string>;
}

export const Services: React.FC<ServicesProps> = ({ blurMap }) => {
  const [selectedKey, setSelectedKey] = useState<string>(serviceKeys[0]);
  const selected: Service = services[selectedKey];

  // Deep links such as /services#execution-supervision open the matching tab.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!hash) return;
    const key = serviceKeys.find((k) => slugify(k) === hash);
    if (key) setSelectedKey(key);
  }, []);

  const selectService = (key: string) => {
    setSelectedKey(key);
    window.history.replaceState(null, "", `#${slugify(key)}`);
  };

  const isOverview = selectedKey === serviceKeys[0];
  const everyStage = selected.stage === "Every stage";
  const paragraphs = selected.paragraph.filter((p) => p.trim().toLowerCase() !== "includes:");

  return (
    <div className="mb-24">
      {/* Anchor targets for deep links; scroll-mt keeps them clear of the fixed header */}
      {serviceKeys.map((key) => (
        <span key={key} id={slugify(key)} className="block scroll-mt-28" aria-hidden="true" />
      ))}
      <h2 className="font-heading text-center text-3xl md:text-4xl font-medium mb-8 text-brand-ink">Services & Offerings</h2>

      {/* Tabs */}
      <div className="w-full overflow-x-auto no-scrollbar border-b border-brand-sand">
        <div role="tablist" aria-label="Services" className="w-full flex flex-nowrap whitespace-nowrap text-lg">
          {serviceKeys.map((key) => {
            const active = key === selectedKey;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                className={clsx(
                  "font-body py-3 px-4 flex-shrink-0 -mb-px border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/40 rounded-t",
                  active ? "border-brand-ink text-brand-ink font-medium" : "border-transparent text-[#78736F] hover:text-brand-ink"
                )}
                onClick={() => selectService(key)}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab panel */}
      <div key={selectedKey} className="animate-fade-in mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          {selected.stage && (
            <p
              className={clsx(
                "font-body inline-block text-xs font-medium tracking-wide uppercase rounded-full px-2.5 py-1 mb-3",
                everyStage ? "text-[#3F6B3A] bg-[#EEF4EA]" : "text-brand-brown bg-brand-wash"
              )}
            >
              {selected.stage}
            </p>
          )}
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-brand-ink mb-4">{selected.title}</h3>

          {paragraphs.map((para, index) => (
            <p key={index} className={clsx("font-body text-lg text-[#3f3f3f] mb-3", index === 0 && "text-xl text-brand-ink")}>
              {para}
            </p>
          ))}

          {selected.bestFor && (
            <div className="font-body mt-6 rounded-lg bg-brand-wash border-l-4 border-brand-tan px-4 py-3 text-[#3f3f3f]">
              <span className="font-medium text-brand-ink">Best for: </span>
              {selected.bestFor}
            </div>
          )}

          {selected.points.length > 0 && (
            <>
              <h4 className="font-heading text-lg font-medium text-brand-ink mt-8 mb-3">
                {isOverview ? "Sectors we design for" : "What’s included"}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {selected.points.map((point) => (
                  <li key={point} className="font-body flex gap-2 text-base text-[#3f3f3f]">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {selected.processSteps && selected.processSteps.length > 0 && (
            <>
              <h4 className="font-heading text-lg font-medium text-brand-ink mt-8 mb-3">
                {everyStage ? "Woven through our process" : "Where it fits in our process"}
              </h4>
              <ProcessStrip highlighted={selected.processSteps} />
              <p className="font-body text-sm text-[#8a847f] mt-2">Highlighted steps show where this service does its work. The full process is described further down the page.</p>
            </>
          )}

          <div className="mt-8">
            <BookFreeAppointment title="Book a FREE Appointment" variant="primary" />
          </div>
        </div>

        <div className="lg:col-span-5">
          {isOverview && selected.sectorProjects ? (
            <SectorTiles sectors={selected.points} slugs={selected.sectorProjects} blurMap={blurMap} />
          ) : selected.relatedProjects ? (
            <ServiceGallery slugs={selected.relatedProjects} blurMap={blurMap} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
