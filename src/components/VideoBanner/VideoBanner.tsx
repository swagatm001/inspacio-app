"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { BlurImage } from "../ui/BlurImage";
import { montserrat } from "@/fonts/display";
import { satoshi } from "@/fonts/satoshi";
import { Contact } from "../Contact";
import { Modal } from "../Modal";
import { Button } from "../ui/Button";
import { LaurelIcon } from "../ui/Icons";
import { awards } from "@/constants/awards";

const POSTER_SRC = "/images/banner.jpg";
const VIDEO_SRC = "/videos/banner-video.mp4";

const HEADLINE = "Designing Spaces That Inspire";

interface VideoBannerProps {
  /** Blur preview for the poster image (from the server-side blur map). */
  posterBlur?: string;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({ posterBlur }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [open, setOpen] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      return;
    }
    video
      .play()
      .then(() => setHasStarted(true))
      .catch(() => {
        /* autoplay restrictions or an aborted load; the poster stays in place */
      });
  };

  return (
    <section className="h-full w-full relative">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {!hasStarted && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-kenburns">
            <BlurImage
              src={POSTER_SRC}
              blurDataURL={posterBlur}
              alt="A living space designed by Inspacio"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/70"
      >
        {!isPlaying && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 text-white opacity-70 transition-opacity hover:opacity-90"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 lg:px-16 pt-16 pb-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
        <div className="pointer-events-auto w-full md:w-auto min-w-0 text-center md:text-left">
          <div className="hero-rise flex flex-wrap items-center gap-x-4 gap-y-2 mb-3" style={{ animationDelay: "80ms" }}>
            <p className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.28em] text-white/80">Interior Designers &amp; Architects · Bengaluru</p>
            {awards[0] && (
              <span className="font-body inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[11px] text-white whitespace-nowrap">
                <LaurelIcon className="w-4 h-4 text-brand-orange" />
                <span className="md:hidden">{awards[0].title} winner</span>
                <span className="hidden md:inline">{awards[0].title} · {awards[0].description.split(" – ")[0]}</span>
              </span>
            )}
          </div>
          <h1 className={clsx(montserrat.className, "text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.05] text-white text-balance")}>
            {HEADLINE.split(" ").map((word, i) => (
              <span key={word} className="hero-rise" style={{ animationDelay: `${150 + i * 110}ms` }}>
                {word}
                {i < HEADLINE.split(" ").length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>
          <p className={clsx(satoshi.className, "hero-rise mt-3 text-base sm:text-lg lg:text-xl text-white/85")} style={{ animationDelay: "650ms" }}>
            A journey where every design tells a story.
          </p>
        </div>

        <div className="pointer-events-auto hero-rise" style={{ animationDelay: "850ms" }}>
          <Button variant="primary" size="lg" onClick={() => setOpen(true)} icon={<Image src="/images/phone_icon.svg" alt="" width={20} height={20} />}>
            Book a FREE Appointment
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="bg-white p-6 rounded-3xl">
          <Contact />
        </div>
      </Modal>
    </section>
  );
};
