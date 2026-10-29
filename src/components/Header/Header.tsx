"use client";

import { useState, useRef, useEffect } from "react";
import { headerConstants } from "@/constants/headers";
import Image from "next/image";
import React from "react";
import { NavigationLinks } from "./NavigationLinks";
import Link from "next/link";
import clsx from "clsx";

type HeaderProps = {
  lightBackground?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ lightBackground = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  // Dark text and logo on light pages, and on every page once the frosted bar appears.
  const light = lightBackground || scrolled;
  const linkColor = light ? "text-brand-ink" : "text-brand-cream";
  const barColor = light ? "bg-brand-brown" : "bg-white";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full h-20 px-2 sm:px-4 md:px-8 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled && "bg-brand-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,56,52,0.08)]",
        !scrolled && !lightBackground && "bg-gradient-to-b from-black via-black/60 to-transparent"
      )}
    >
      <div className="h-full flex items-center justify-between">
        <Link href="/" aria-label="Inspacio home" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50 rounded">
          <Image
            className="w-[150px] h-auto select-none"
            src={light ? headerConstants.logo.darkImageUrl : headerConstants.logo.imageUrl}
            alt={headerConstants.logo.altText}
            width={headerConstants.logo.width}
            height={headerConstants.logo.height}
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <NavigationLinks className="gap-8" linkClassName={clsx(linkColor, "text-base font-medium")} />
        </nav>

        {/* Mobile and tablet menu */}
        <div className="relative lg:hidden" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((open) => !open)}
            className={clsx(
              "p-2 rounded-lg transition focus:outline-none focus-visible:ring-2",
              light ? "hover:bg-black/10 focus-visible:ring-brand-brown" : "hover:bg-white/10 focus-visible:ring-white"
            )}
            aria-label="Toggle menu"
            aria-expanded={isDropdownOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <div className={clsx("w-full h-0.5 rounded-full", barColor)}></div>
              <div className={clsx("w-4/5 h-0.5 rounded-full ml-auto", barColor)}></div>
              <div className={clsx("w-4/5 h-0.5 rounded-full ml-auto", barColor)}></div>
            </div>
          </button>

          {isDropdownOpen && (
            <nav
              id="mobile-menu"
              aria-label="Primary"
              className="absolute right-0 mt-2 w-64 bg-brand-orange rounded-lg shadow-2xl py-4 px-4 z-10 origin-top-right"
              style={{ animation: "scaleExpandDiagonal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <NavigationLinks
                className="flex-col gap-2"
                linkClassName="text-brand-cream text-lg"
                isDropdownOpen={isDropdownOpen}
                onClick={() => setIsDropdownOpen(false)}
              />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
