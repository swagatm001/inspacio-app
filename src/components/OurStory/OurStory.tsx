"use client";
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import React from "react";
import { OurStory as OurStoryData } from "@/constants/ourStory";
import Link from "next/link";

const OurStory: React.FC = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row lg:flex-row sm:flex-reverse justify-between mt-16 gap-3 md:gap-[90px] mb-28">
            {/* Left: Video Card */}
            <div className="w-full md:w-[70%] flex justify-center items-center">
                <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center aspect-w-16 aspect-h-9">
                    {/* Replace src with your video URL */}
                    <video
                        className="w-full h-full object-cover aspect-video"
                        controls
                        poster={OurStoryData.posterUrl}
                    >
                        <source src={OurStoryData.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Right: Title, Description, Button */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-4 py-8 md:py-0">
                <h2 className={clsx(montserrat.className, "text-center text-2xl md:text-5xl font-medium mb-4 uppercase text-[#3D3834]")}>{OurStoryData.title}</h2>
                <p className="text-gray-600 mb-6 text-center">{OurStoryData.description}</p>
                <Link href={OurStoryData.redirectUrl}>
                    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
                        <span>{OurStoryData.buttonText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default OurStory;