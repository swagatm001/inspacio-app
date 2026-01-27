"use client";

import React from "react";
import Image from "next/image";
import { SocialLinks } from "../Header/SocialLinks";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import BookFreeAppointment from "../BookFreeAppointment/BookFreeAppointment";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Works", href: "/projects" },
    // { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
];

const infoLinks:any[] = [
    // { label: "Career", href: "/career" },
    // { label: "Terms & Conditions", href: "/terms" },
    // { label: "Privacy Policy", href: "/privacy" },
];

const FooterV2: React.FC = () => (
    <footer className="bg-[#885739] text-white pt-12 pb-4 w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start px-8 gap-8">
            {/* Left Section */}
            <div className="flex-1 min-w-[280px]">
                <h2 className={clsx(montserrat.className,"text-5xl md:text-8xl font-medium mb-6")}>Want to Start <br/>a Project?</h2>
                <BookFreeAppointment title="Book a Free Consultation"/>
            </div>
            {/* Right Section */}
            <nav className="flex-2 min-w-[180px] flex flex-col gap-4">
                {navLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-white no-underline text-lg font-medium transition-colors hover:text-white/80"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>

        <div className="block md:hidden border border-[#F8F7F326] w-11/12 mx-8 mt-10"></div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row items-start flex-wrap justify-between md:items-center my-12 mb-6 px-8 gap-8">
            {/* Logo */}
            <div className="flex-1 min-w-[120px]">
                {/* Replace with your logo */}
                <Image
                    className="w-[150px] h-auto user-select-none"
                    src="/images/logo_white.svg"
                    alt="inspacio"
                    width={120}
                    height={92}
                />
            </div>
            {/* Info Links */}
            <div className="flex-2 min-w-[220px] flex flex-col md:flex-row justify-center gap-8">
                {infoLinks.length > 0 && infoLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-white no-underline text-base font-normal transition-colors hover:text-white/80"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            {/* Social Icons */}
            {/* <div className="flex-1 flex justify-end">
                <SocialLinks light={true} removeBorder={true}/>
            </div> */}
        </div>
    <div className="border border-[#F8F7F326] w-11/12 mx-8 "></div>
        {/* Bottom Section */}
    <div className="text-center text-sm text-white mt-4">
            &copy; 2025 Inspacio Design. All rights reserved.
        </div>
    </footer>
);

export default FooterV2;