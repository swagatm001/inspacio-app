import React from "react";
import { SocialLinks } from "../Header/SocialLinks";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Works", href: "/works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Awards", href: "/awards" },
];

const infoLinks = [
    { label: "Career", href: "/career" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
];

const FooterV2: React.FC = () => (
    <footer className="bg-[#885739] text-white pt-12 pb-4 w-full">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start px-8 gap-8">
            {/* Left Section */}
            <div className="flex-1 min-w-[280px]">
                <h2 className={clsx(montserrat.className,"text-8xl font-medium mb-6")}>Want to Start <br/>a Project?</h2>
                <button
                    type="button"
                    aria-label="Book a free consultation"
                    className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition whitespace-nowrap"
                >
                    <span>Book a FREE Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
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

        {/* Middle Section */}
        <div className="flex flex-wrap justify-between items-center my-12 mb-6 px-8 gap-8">
            {/* Logo */}
            <div className="flex-1 min-w-[120px]">
                {/* Replace with your logo */}
                <img src="/images/inspacio-logo-white.jpg" alt="Logo" className="h-10" />
            </div>
            {/* Info Links */}
            <div className="flex-2 min-w-[220px] flex justify-center gap-8">
                {infoLinks.map(link => (
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
            <div className="flex-1 flex justify-end">
                <SocialLinks light={true} removeBorder={true}/>
            </div>
        </div>
    <div className="border border-[#F8F7F326] w-11/12 mx-8 "></div>
        {/* Bottom Section */}
    <div className="text-center text-sm text-white mt-4">
            &copy; 2025 Inspacio Design. All rights reserved.
        </div>
    </footer>
);

export default FooterV2;