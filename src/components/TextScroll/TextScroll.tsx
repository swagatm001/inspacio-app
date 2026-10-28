import clsx from "clsx";
import React from "react";

const ITEMS = [
  { text: "Be part of the Inspacio makeover", outline: true },
  { text: "#YouDreamWeCreate", outline: false },
];

/** Repeated so one group always spans the widest screens; the track holds two groups for a seamless loop. */
const GROUP = [...ITEMS, ...ITEMS, ...ITEMS];

const Group: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <div className="inline-flex items-center" aria-hidden={hidden || undefined}>
    {GROUP.map((item, idx) => (
      <React.Fragment key={`${item.text}-${idx}`}>
        <span
          className={clsx(
            "font-heading inline-block px-6 md:px-8 text-5xl md:text-7xl lg:text-8xl font-medium leading-none tracking-tight",
            item.outline ? "text-outline" : "text-brand-brown"
          )}
        >
          {item.text}
        </span>
        <span aria-hidden="true" className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-orange shrink-0" />
      </React.Fragment>
    ))}
  </div>
);

const TextScroll: React.FC = () => (
  <div className="marquee my-12 md:my-16 w-full py-4">
    <div className="marquee__track">
      <Group />
      <Group hidden />
    </div>
  </div>
);

export default TextScroll;
