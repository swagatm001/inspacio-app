import React from "react";
import clsx from "clsx";

interface SectionEyebrowProps {
  number: string;
  label: string;
  className?: string;
  /** Use on dark backgrounds. */
  light?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ number, label, className, light }) => (
  <p
    className={clsx(
      "font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-3 flex items-center gap-3",
      light ? "text-white/70" : "text-brand-tan",
      className
    )}
  >
    {number && (
      <>
        <span className="text-brand-orange tabular-nums">{number}</span>
        <span aria-hidden="true" className={clsx("inline-block w-6 h-px", light ? "bg-white/40" : "bg-brand-sand")} />
      </>
    )}
    {label}
  </p>
);

export default SectionEyebrow;
