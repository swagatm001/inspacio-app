import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";
import { siteConstants } from "@/constants/site";
import { InstagramStrip } from "../InstagramStrip/InstagramStrip";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Works", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FooterV2: React.FC = () => (
  <>
  <InstagramStrip />
  <footer className="bg-brand-ink text-white pt-12 pb-4 w-full">
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-start px-8 gap-8">
      <div className="flex-1 min-w-[280px]">
        <h2 className={clsx(montserrat.className, "text-5xl md:text-8xl font-medium mb-6")}>
          Want to Start <br />a Project?
        </h2>
        <BookFreeAppointment title="Book a Free Consultation" variant="inverse" size="lg" />
      </div>
      <nav aria-label="Footer" className="min-w-[180px] flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white no-underline text-lg font-medium transition-colors hover:text-white/80"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>

    <div className="block md:hidden border border-white/15 w-11/12 mx-8 mt-10"></div>

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-12 mb-6 px-8 gap-8">
      <Image className="w-[150px] h-auto select-none" src="/images/logo_white.svg" alt="Inspacio" width={120} height={92} />
      <address className={clsx(satoshi.className, "not-italic text-sm text-white/90 md:text-right leading-relaxed")}>
        {siteConstants.address.street}, {siteConstants.address.locality} {siteConstants.address.postalCode}
        <br />
        <a href={`mailto:${siteConstants.email}`} className="hover:underline">
          {siteConstants.email}
        </a>
      </address>
    </div>

    <div className="border border-white/15 w-11/12 mx-8"></div>
    <div className="text-center text-sm text-white mt-4">
      &copy; {new Date().getFullYear()} Inspacio Design. All rights reserved.
    </div>
  </footer>
  </>
);

export default FooterV2;
