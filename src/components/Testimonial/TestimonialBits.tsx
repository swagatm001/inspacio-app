import React from "react";
import clsx from "clsx";

export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export const Avatar: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <div
    aria-hidden="true"
    className={clsx(
      "font-heading rounded-full bg-brand-orange text-white flex items-center justify-center font-medium shadow-md border-2 border-white/40 shrink-0",
      className
    )}
  >
    {initialsOf(name)}
  </div>
);

export const Stars: React.FC<{ rating: number; dim?: string }> = ({ rating, dim = "text-white/30" }) => (
  <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={clsx("w-4 h-4", star <= rating ? "text-[#FFC107]" : dim)}
      >
        <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    ))}
  </div>
);
