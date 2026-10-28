import React from "react";
import clsx from "clsx";
import { processConstants2 } from "@/constants/process";

interface ProcessStripProps {
  /** Step titles to highlight. */
  highlighted: string[];
}

/** The studio's seven process steps as chips, with the steps for the current service highlighted. */
export const ProcessStrip: React.FC<ProcessStripProps> = ({ highlighted }) => (
  <ol className="flex flex-wrap gap-2" aria-label="Project process">
    {processConstants2.steps.map((step, i) => {
      const active = highlighted.includes(step.stepTitle);
      return (
        <li
          key={step.stepTitle}
          aria-current={active ? "step" : undefined}
          className={clsx(
            "font-body inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors",
            active ? "bg-brand-brown border-brand-brown text-white" : "bg-white border-brand-sand text-brand-faint"
          )}
        >
          <span
            className={clsx(
              "inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-medium",
              active ? "bg-white/20 text-white" : "bg-brand-wash text-brand-tan"
            )}
          >
            {i + 1}
          </span>
          {step.stepTitle}
          {active && <span className="text-xs text-white/80">· {step.timeline}</span>}
        </li>
      );
    })}
  </ol>
);

export default ProcessStrip;
