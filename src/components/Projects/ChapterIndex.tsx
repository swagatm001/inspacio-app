"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

export interface Chapter {
  id: string;
  number: string;
  title: string;
}

/** Sticky list of chapters on desktop, a scrollable chip row on smaller screens. Highlights the chapter in view. */
export const ChapterIndex: React.FC<{ chapters: Chapter[] }> = ({ chapters }) => {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [chapters]);

  const onJump = (id: string) => setActive(id);

  return (
    <nav aria-label="Chapters" className="lg:sticky lg:top-28">
      <p className="font-body hidden lg:block text-[11px] font-medium tracking-[0.2em] uppercase text-brand-faint mb-4">In this project</p>
      <ol className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto no-scrollbar -mx-1 px-1 pb-2 lg:pb-0">
        {chapters.map((c) => {
          const isActive = c.id === active;
          return (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                onClick={() => onJump(c.id)}
                aria-current={isActive ? "true" : undefined}
                className={clsx(
                  "font-body group flex items-center gap-3 rounded-full lg:rounded-none lg:border-l-2 px-3 py-1.5 lg:px-0 lg:pl-4 lg:py-2 text-sm transition-colors",
                  "border lg:border-y-0 lg:border-r-0",
                  isActive
                    ? "bg-brand-brown text-white border-brand-brown lg:bg-transparent lg:text-brand-ink lg:border-brand-orange"
                    : "bg-white text-brand-muted border-brand-sand lg:bg-transparent lg:border-brand-sand hover:text-brand-ink lg:hover:border-brand-tan"
                )}
              >
                <span className={clsx("tabular-nums text-xs", isActive ? "text-white lg:text-brand-orange" : "text-brand-tan")}>{c.number}</span>
                <span className="whitespace-nowrap lg:whitespace-normal">{c.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ChapterIndex;
