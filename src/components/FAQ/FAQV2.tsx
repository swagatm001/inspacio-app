"use client";

import React, { useId, useState } from "react";
import clsx from "clsx";
import { faqs } from "@/constants/faq";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    aria-hidden="true"
    className={clsx("w-5 h-5 shrink-0 transition-transform duration-300", open && "rotate-180")}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-12 md:py-16" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionEyebrow number="" label="Good to know" />
            <h2 id="faq-heading" className="font-heading text-4xl md:text-6xl font-light text-brand-ink leading-[1.05] mb-4">
              Frequently asked questions
            </h2>
            <p className="font-body text-base md:text-lg text-brand-muted">
              The questions we hear most from people planning a home, office or commercial space in Bangalore.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="divide-y divide-brand-sand border-y border-brand-sand">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <li key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className={clsx(
                        "group w-full flex items-start gap-4 md:gap-6 py-5 md:py-6 text-left transition-colors focus:outline-none focus-visible:bg-brand-wash",
                        open ? "text-brand-ink" : "text-brand-body hover:text-brand-ink"
                      )}
                    >
                      <span className={clsx("font-body text-sm tabular-nums pt-1 w-6 shrink-0 transition-colors", open ? "text-brand-orange" : "text-brand-tan")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading flex-1 text-lg md:text-2xl font-medium leading-snug">{faq.question}</span>
                      <span className={clsx("mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors", open ? "border-brand-brown bg-brand-brown text-white" : "border-brand-sand text-brand-brown group-hover:border-brand-brown")}>
                        <ChevronIcon open={open} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={clsx("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body text-base md:text-lg text-brand-body leading-relaxed pl-10 md:pl-12 pr-12 pb-6">{faq.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 rounded-2xl border border-brand-sand bg-white p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="font-heading text-xl font-medium text-brand-ink mb-1">Still have a question?</p>
              <p className="font-body text-sm md:text-base text-brand-muted">The first conversation is free and commits you to nothing.</p>
            </div>
            <BookFreeAppointment title="Book a free consultation" className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
