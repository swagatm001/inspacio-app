"use client";
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import React from "react";
import { OurStory as OurStoryData } from "@/constants/ourStory";
import Link from "next/link";
import Image from "next/image";
import { satoshi } from "@/fonts/satoshi";

const OurStory: React.FC = () => {
    return (
        <section className="flex flex-col justify-between mt-16 gap-3 mb-28">
            <h2 className={clsx(montserrat.className, "text-center text-2xl md:text-5xl font-medium mb-6 uppercase text-[#3D3834]")}>{OurStoryData.title}</h2>
            <h3 className={clsx(montserrat.className, "text-2xl font-medium text-[#3D3834]")}>Inspacio : Designing Spaces That Inspire.</h3>
            {/* Right: Title, Description, Button */}
            <div className="w-full flex flex-col">
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>For as long as I can remember, I’ve found myself observing spaces, how light moved, how people interacted, how a room made someone feel. What began as childhood sketches slowly grew into a calling.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>My five years of architecture at Piloo Mody College taught me the discipline behind creativity, structure, clarity, and spatial intelligence.<br /> But life taught me the rest. From hospitality and healthcare to residential and institutional spaces, I’ve explored how design can influence people, behavior, and experience.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>But real growth often comes from mentors, and mine was <b>Vasant Kamath</b>, an esteemed architect in New Delhi. Under him, I learned the value of ecologically sensitive, culturally rooted, and socially meaningful design, lessons that still guide every project I create.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>Starting <b>Inspacio Design</b> was not just a business decision. It was a leap of faith, supported by my family, especially my father, who always encouraged me to follow my aspirations.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>It became the ground where I shaped my identity as an architect. <br /> We crafted commercial and residential spaces that balanced beauty with functionality, places that made everyday living a little more intuitive, a little more soulful.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>Our work with <b>315 Work Avenue</b>, which earned the <em>Times Business Award for Best Coworking Brand for Design</em>, stands as a reminder that when design has clarity, purpose, and emotion, it resonates far beyond aesthetics.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>At Inspacio, we don’t just design spaces.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>We design journeys, your journey.</p>
                <p className={clsx(satoshi.className,"text-lg text-[#3f3f3f] mb-2 whitespace-pre-line")}>From concept to build, from idea to experience.</p>
                {/* <Link href={OurStoryData.redirectUrl}>
                    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
                        <span>{OurStoryData.buttonText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </Link> */}
            </div>

            {/* Left: Video Card */}
            <div className="w-full flex justify-center items-center">
                <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center aspect-w-16 aspect-h-9">
                    {/* Replace src with your video URL */}
                    {/* <video
                        className="w-full h-full object-cover aspect-video"
                        controls
                        poster={OurStoryData.posterUrl}
                    >
                        <source src={OurStoryData.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <Image src={'/images/director.webp'} width={500} height={300} alt="Managing director" priority={false} loading="lazy" className="h-full w-auto object-cover"/>
                </div>
            </div>

            
        </section>
    );
};

export default OurStory;