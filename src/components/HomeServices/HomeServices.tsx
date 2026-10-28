import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { services } from "@/constants/services";
import { slugify } from "@/utils/slugify";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const FEATURED_SERVICES: { key: string; stage: string }[] = [
  { key: "Conceptualization & Design", stage: "Stage 01" },
  { key: "Detailing & Documentation", stage: "Stage 02" },
  { key: "Execution & Supervision", stage: "Stage 03" },
  { key: "Sustainable Design", stage: "Every stage" },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-1 shrink-0 text-brand-brown" aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

const HomeServices: React.FC = () => {
  const sectors = services["Our Expertise"]?.points ?? [];

  return (
    <section className="mb-28" aria-labelledby="home-services-heading">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <SectionEyebrow number="01" label="Our services" />
          <h2 id="home-services-heading" className="font-heading text-2xl md:text-[40px] leading-tight text-brand-ink">
            What We Do
          </h2>
          <p className="font-body text-base md:text-lg text-[#696969] mt-3">
            From the first sketch to the final handover, one team carries your project through every stage.
          </p>
          {sectors.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Sectors we design for">
              {sectors.map((sector) => (
                <li key={sector} className="font-body text-sm text-brand-ink bg-white border border-brand-sand rounded-full px-3 py-1">
                  {sector}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button href="/services" variant="secondary" arrow className="self-start md:self-auto md:mb-1">
          Explore Our Services
        </Button>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURED_SERVICES.map(({ key, stage }) => {
          const service = services[key];
          if (!service) return null;
          const everyStage = stage === "Every stage";
          return (
            <li key={key} className="h-full">
              <Link
                href={`/services#${slugify(key)}`}
                className="group relative flex flex-col h-full rounded-xl border border-brand-sand bg-white p-6 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-tan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-brown opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className={clsx("inline-flex items-center justify-center w-16 h-16 rounded-xl", everyStage ? "bg-[#EEF4EA]" : "bg-brand-wash")}>
                    {service.imageUrl && <Image src={service.imageUrl} alt="" width={44} height={44} className="h-11 w-11" />}
                  </span>
                  <span
                    className={clsx(
                      "font-body text-xs font-medium tracking-wide uppercase rounded-full px-2.5 py-1",
                      everyStage ? "text-[#3F6B3A] bg-[#EEF4EA]" : "text-brand-brown bg-brand-wash"
                    )}
                  >
                    {stage}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-brand-ink mb-3 text-balance">{service.title}</h3>

                <ul className="font-body text-[15px] leading-snug text-[#4a4541] space-y-2 mb-6">
                  {service.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <span className="font-body mt-auto inline-flex items-center gap-2 text-brand-brown font-medium underline-offset-4 group-hover:underline">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default HomeServices;
