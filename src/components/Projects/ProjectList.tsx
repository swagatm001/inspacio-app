"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import type { I_Project } from "@/components/LatestProject/Gallery";

/** Text rows with a thumbnail that floats beside the pointer (desktop only). */
export const ProjectList: React.FC<{ projects: I_Project[] }> = ({ projects }) => {
  const [active, setActive] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  // Ease the preview toward the pointer only while a row is hovered.
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${current.current.x + 28}px, ${current.current.y - 96}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  const onMove = (e: React.MouseEvent) => {
    target.current = { x: e.clientX, y: e.clientY };
    if (!active) current.current = { ...target.current };
  };

  return (
    <div onMouseMove={onMove}>
      <ul className="border-t border-brand-sand">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              onMouseEnter={() => setActive(p.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p.slug)}
              onBlur={() => setActive(null)}
              className={clsx(
                "group grid grid-cols-12 items-center gap-4 py-6 border-b border-brand-sand transition-colors focus:outline-none focus-visible:bg-brand-wash",
                active && active !== p.slug && "opacity-50"
              )}
            >
              <span className="col-span-6 font-heading text-2xl md:text-3xl text-brand-ink transition-transform duration-300 group-hover:translate-x-2">{p.title}</span>
              <span className="col-span-2 font-body text-sm text-[#696969]">{p.type || p.category?.label}</span>
              <span className="col-span-3 font-body text-sm text-[#696969]">{p.address}</span>
              <span className="col-span-1 flex items-center justify-end gap-3 font-body text-sm text-[#696969]">
                {p.year}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-brand-brown opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Floating preview: every thumbnail is mounted so switching rows is instant */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={clsx(
          "pointer-events-none fixed top-0 left-0 z-30 w-72 h-48 rounded-xl overflow-hidden shadow-2xl bg-brand-wash transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0"
        )}
      >
        {projects.map((p) => (
          <Image
            key={p.slug}
            src={p.thumbnail}
            alt=""
            fill
            sizes="288px"
            className={clsx("object-cover transition-opacity duration-200", active === p.slug ? "opacity-100" : "opacity-0")}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
