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

export const Header = () => {
  return (
    <header className="bg-white bg-opacity-70 fixed top-0 left-0 w-full h-20 z-50">
      <Container className="h-full">
        <div className="h-full flex items-center justify-between px-6 lg:px-32">
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
            <SocialLinks />
            <GetInTouch />
          </Navigation>
        </div>
      </Container>
    </header>
  );
};
