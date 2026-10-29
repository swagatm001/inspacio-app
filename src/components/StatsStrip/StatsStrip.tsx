import React from "react";
import { siteConstants } from "@/constants/site";

/** Renders nothing until `siteConstants.stats` has entries. */
const StatsStrip: React.FC = () => {
  if (!siteConstants.stats.length) return null;
  return (
    <section aria-label="Studio at a glance" className="mb-24">
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl border border-brand-sand bg-white px-6 py-8">
        {siteConstants.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dd className="font-heading text-3xl md:text-4xl font-medium text-brand-brown">{stat.value}</dd>
            <dt className="font-body text-sm md:text-base text-brand-muted mt-1">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default StatsStrip;
