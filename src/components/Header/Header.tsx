"use client";

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
  return (
    <header className="bg-white fixed left-1/2 -translate-x-1/2 top-[21px] w-[90%] max-w-[1253px] px-2 sm:px-4 md:px-6 h-20 z-50 rounded-xl shadow-lg">
      <div className="h-full flex items-center justify-between lg:lx-0">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={headerConstants.logo.imageUrl}
              alt={headerConstants.logo.altText}
              width={headerConstants.logo.width}
              height={headerConstants.logo.height}
            />
            <p className="text-lg">{headerConstants.logo.brandLabel}</p>
          </div>
        </Link>
        <HamMenu className="lg:hidden" />
        <Navigation className="hidden lg:flex">
          <NavigationLinks />
          <SignInButton title="Sign In" />
          <GetInTouch title="Book Free Consultation" />
        </Navigation>
      </div>
    </header>
  );
};
