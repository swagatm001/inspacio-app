import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import clsx from "clsx";
import React from "react";

const TEXTS = ["Be part of the Inspacio makeover", "#YouDreamWeCreate"];

/** Enough repetitions to span wide screens; the track is duplicated once more for the seamless loop. */
const GROUP = [...TEXTS, ...TEXTS, ...TEXTS];

const Group: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <div className="inline-flex items-center" aria-hidden={hidden || undefined}>
    {GROUP.map((text, idx) => (
      <span
        key={`${text}-${idx}`}
        className={clsx(
          idx % 2 === 0 ? montserrat.className : satoshi.className,
          "inline-block px-8 text-4xl",
          idx % 2 === 0 ? "font-medium text-[#885739]" : "font-light italic text-[#3D3834]"
        )}
      >
        {text}
      </span>
    ))}
  </div>
);

const TextScroll: React.FC = () => (
  <div className="marquee my-10 w-full">
    <div className="marquee__track">
      <Group />
      <Group hidden />
    </div>
  </div>
);

export default TextScroll;
