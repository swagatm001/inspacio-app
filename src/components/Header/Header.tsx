"use client";

import { useState } from "react";
import { headerConstants } from "@/constants/headers";
import { Container } from "../Container";
import Image from "next/image";
import { SocialLink } from "./SocialLink";
import { HamMenu } from "./Ham";
import React from "react";
import { Navigation } from "./Navigation";
import { NavigationLinks } from "./NavigationLinks";
import { SocialLinks } from "./SocialLinks";
import { GetInTouch } from "./GetInTouch";
import Link from "next/link";
import { SignInButton } from "./SignInButton";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-0 w-full px-2 sm:px-4 md:px-8 h-20 z-50 bg-gradient-to-b from-black via-black/600 to-transparent">
      <div className="h-full flex items-center justify-between lg:lx-0">
        <Link href="/">
          <div className="flex items-center">
            <Image
              className="w-[150px] h-auto user-select-none"
              src={headerConstants.logo.imageUrl}
              alt={headerConstants.logo.altText}
              width={headerConstants.logo.width}
              height={headerConstants.logo.height}
            />
            {/* <p className="text-lg">{headerConstants.logo.brandLabel}</p> */}
          </div>
        </Link>
        {/* <HamMenu className="lg:hidden" /> */}
        
        {/* Desktop Hamburger Menu */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isDropdownOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <div className="w-full h-0.5 bg-white rounded-full"></div>
              <div className="w-4/5 h-0.5 bg-white rounded-full ml-auto"></div>
              <div className="w-4/5 h-0.5 bg-white rounded-full ml-auto"></div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl py-4 px-4 z-10 origin-top-right animate-in zoom-in-75 duration-300" style={{
              animation: "scaleExpandDiagonal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}>
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mb-4">
                <NavigationLinks className="flex-col" isDropdownOpen={isDropdownOpen}/>
              </nav>
            </div>
          )}
        </div>
        {/* <Navigation className="hidden lg:flex">
          <NavigationLinks />
          {/* <SignInButton title="Sign In" /> */}
        {/* <GetInTouch title="Book Free Consultation" />
        </Navigation> */}
      </div>
    </header>
  );
};
