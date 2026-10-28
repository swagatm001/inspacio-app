import React from "react";
import clsx from "clsx";
import type { ProjectRecognition } from "@/constants/projects";
import { ExternalIcon, LaurelIcon } from "./Icons";

const NewspaperIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
  </svg>
);

interface RecognitionBadgeProps {
  item: ProjectRecognition;
  /** Compact chip for cards; full shows the whole title. */
  variant?: "full" | "compact";
  /** Light styling for dark photo backgrounds. */
  light?: boolean;
  className?: string;
}

export const RecognitionBadge: React.FC<RecognitionBadgeProps> = ({ item, variant = "full", light = false, className }) => {
  const Icon = item.kind === "award" ? LaurelIcon : NewspaperIcon;
  const classes = clsx(
    "font-body inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors",
    variant === "compact" ? "text-[11px] px-2 py-0.5 tracking-wide uppercase" : "text-sm px-3 py-1",
    light
      ? "bg-black/45 border-white/30 text-white backdrop-blur-sm hover:bg-black/60"
      : "bg-brand-wash border-brand-sand text-brand-brown hover:border-brand-brown",
    className
  );
  const content = (
    <>
      <Icon className="w-4 h-4" />
      {variant === "compact" ? item.label : item.title}
      {item.href && <ExternalIcon className="w-3.5 h-3.5 opacity-70" />}
    </>
  );
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={`${item.title} (opens in a new tab)`}>
        {content}
      </a>
    );
  }
  return <span className={classes}>{content}</span>;
};

export default RecognitionBadge;
