import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { processConstants2, sumWeeks, formatWeeks, ProcessPhase } from "@/constants/process";
import { slugify } from "@/utils/slugify";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";

const PHASES: { name: ProcessPhase; blurb: string }[] = [
  { name: "Design", blurb: "Understanding your space and agreeing on what it should become." },
  { name: "Build", blurb: "Turning the approved design into a finished, move-in-ready space." },
];

const splitLead = (desc: string): [string, string] => {
  const [lead, ...rest] = desc.split("\n");
  return [lead.trim(), rest.join(" ").trim()];
};

export const OurCreativeProcessV2: React.FC = () => {
  const { steps } = processConstants2;
  const total = sumWeeks(steps);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" aria-labelledby="process-heading">
      <header className="text-center mb-12">
        <p className="font-body text-sm font-medium tracking-[0.18em] uppercase text-brand-tan mb-3">How we work</p>
        <h2 id="process-heading" className="font-heading text-brand-ink text-3xl md:text-4xl font-medium">
          {processConstants2.title}
        </h2>
        <p className="font-body text-base md:text-lg text-brand-muted mt-3">
          Seven steps in two phases. Typically <span className="font-medium text-brand-ink">{formatWeeks(total)}</span> from first
          conversation to handover.
        </p>
      </header>

      {PHASES.map((phase, phaseIndex) => {
        const phaseSteps = steps.filter((s) => s.phase === phase.name);
        if (!phaseSteps.length) return null;
        const firstNumber = steps.indexOf(phaseSteps[0]) + 1;
        const lastNumber = steps.indexOf(phaseSteps[phaseSteps.length - 1]) + 1;
        return (
          <div key={phase.name} className={clsx(phaseIndex > 0 && "mt-6")}>
            {/* Phase header */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
              <h3 className="font-heading text-xl md:text-2xl font-medium text-brand-brown">
                <span className="font-body text-xs font-medium tracking-[0.18em] uppercase text-brand-tan mr-3">Phase {phaseIndex + 1}</span>
                {phase.name}
              </h3>
              <span className="font-body text-sm text-brand-faint">
                Steps {firstNumber} to {lastNumber} · {formatWeeks(sumWeeks(phaseSteps))}
              </span>
              <p className="font-body basis-full text-base text-brand-muted">{phase.blurb}</p>
            </div>

            <ol className="relative ml-5 md:ml-6 border-l-2 border-brand-sand">
              {phaseSteps.map((step) => {
                const number = steps.indexOf(step) + 1;
                const [lead, rest] = splitLead(step.desc);
                return (
                  <li key={step.stepTitle} className="relative pl-10 md:pl-14 pb-10 last:pb-6">
                    <span
                      aria-hidden="true"
                      className="font-heading absolute -left-[19px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-brown text-white text-sm font-medium shadow-md ring-4 ring-brand-cream"
                    >
                      {number}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="font-heading text-xl md:text-2xl font-medium text-brand-ink">{step.stepTitle}</h4>
                          <span className="font-body text-sm text-brand-brown bg-brand-wash rounded-full px-2.5 py-0.5">{step.timeline}</span>
                          <Link
                            href={`/services#${slugify(step.service)}`}
                            className="font-body text-xs text-brand-faint border border-brand-sand rounded-full px-2.5 py-0.5 hover:text-brand-brown hover:border-brand-brown transition-colors"
                          >
                            Part of {step.service}
                          </Link>
                        </div>
                        <p className="font-body text-base md:text-lg text-brand-body leading-relaxed">
                          <strong className="font-medium text-brand-ink">{lead}</strong> {rest}
                        </p>
                        <p className="font-body text-sm md:text-base text-brand-body mt-2">
                          <span className="font-medium text-brand-brown">You receive: </span>
                          {step.outcome}
                        </p>
                      </div>
                      <Image src={step.imgUrl} alt="" width={96} height={96} className="hidden md:block w-24 h-24 object-contain opacity-90" />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}

      <div className="flex flex-col items-center text-center mt-8">
        <p className="font-body text-base text-brand-muted mb-4">Step one costs nothing and commits you to nothing.</p>
        <BookFreeAppointment title="Start with a free consultation" variant="primary" size="lg" />
      </div>
    </section>
  );
};
