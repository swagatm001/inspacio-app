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

export const averageRating = (items: { rating: number }[]) =>
  items.length ? Math.round((items.reduce((sum, t) => sum + t.rating, 0) / items.length) * 10) / 10 : 0;

export const RatingPill: React.FC<{ rating: number; count: number; light?: boolean; className?: string }> = ({ rating, count, light, className }) => (
  <div
    className={clsx(
      "inline-flex items-center gap-3 rounded-full border px-4 py-2",
      light ? "bg-white/10 border-white/15 text-white" : "bg-white border-brand-sand text-brand-ink",
      className
    )}
  >
    <span className="font-heading text-2xl font-medium leading-none">{rating.toFixed(1)}</span>
    <div className="flex flex-col gap-0.5">
      <Stars rating={Math.round(rating)} dim={light ? "text-white/30" : "text-brand-sand"} />
      <span className={clsx("font-body text-[11px]", light ? "text-white/60" : "text-brand-faint")}>from {count} Google reviews</span>
    </div>
  </div>
);
