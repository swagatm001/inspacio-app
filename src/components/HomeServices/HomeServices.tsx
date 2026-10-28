import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { services } from "@/constants/services";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { Button } from "../ui/Button";

const FEATURED_SERVICES = [
  "Conceptualization & Design",
  "Detailing & Documentation",
  "Execution & Supervision",
  "Sustainable Design",
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

const HomeServices: React.FC = () => {
  return (
    <section className="mb-28" aria-labelledby="home-services-heading">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h2
            id="home-services-heading"
            className={clsx(montserrat.className, "text-2xl md:text-[40px] text-[#3D3834]")}
          >
            What We Do
          </h2>
          <p className={clsx(satoshi.className, "text-base text-gray-600 mt-2 max-w-xl")}>
            From the first sketch to the final handover, one team carries your project through every stage.
          </p>
        </div>
        <Button href="/services" variant="secondary" arrow className="self-start md:self-auto">
          Explore Our Services
        </Button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_SERVICES.map((key) => {
          const service = services[key];
          if (!service) return null;
          return (
            <li key={key}>
              <Link
                href="/services"
                className="group flex flex-col h-full rounded-lg border border-[#E0D9C9] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#885739]"
              >
                {service.imageUrl && (
                  <Image src={service.imageUrl} alt="" width={56} height={56} className="mb-5 h-14 w-14" />
                )}
                <h3 className={clsx(montserrat.className, "text-xl font-medium text-[#3D3834] mb-3")}>
                  {service.title}
                </h3>
                <p className={clsx(satoshi.className, "text-base text-gray-600 line-clamp-3")}>
                  {service.paragraph[0]}
                </p>
                <span className={clsx(satoshi.className, "mt-auto pt-5 inline-flex items-center gap-2 text-brand-brown font-medium group-hover:underline underline-offset-4")}>
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HomeServices;
