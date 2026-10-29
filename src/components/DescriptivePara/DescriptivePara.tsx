import React from "react";
import { descriptiveConstants } from "../../constants/descriptive";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const DescriptivePara: React.FC = () => (
  <section className="mt-6 mb-28" aria-labelledby="intro-heading">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-7">
        <SectionEyebrow number="" label="The studio" />
        <h2 id="intro-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-brand-ink text-balance">
          {descriptiveConstants.heading}
        </h2>
      </div>
      <div className="lg:col-span-5 lg:pt-10 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-brand-sand pt-8 lg:pl-10">
        {descriptiveConstants.content.map((para, index) => (
          <p key={index} className="font-body text-base md:text-lg leading-relaxed text-brand-body">
            {para}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default DescriptivePara;
