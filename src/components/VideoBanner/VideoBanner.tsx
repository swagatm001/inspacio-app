"use client";
// create a video banner component with play/pause functionality
import React from "react";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import Image from "next/image";

export const VideoBanner: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const showOnce = React.useRef(true);

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
            showOnce.current = false;
        }
    };
    return (
        <div className="h-full w-full relative">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                poster={'/images/banner.jpg'}
                ref={videoRef}
            >
                <source src={'/videos/banner-video.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div onClick={handlePlayPause} className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 cursor-pointer">
                {showOnce.current && <Image src={'/images/banner.jpg'} className="object-cover" alt="Design video" fill/>}
                {/* play icon */}
                {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-32 text-white opacity-60">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                </svg>}
            </div>
            <div className="bottom-1/2 flex-col md:flex-row translate-y-1/2 md:translate-y-0 absolute md:bottom-0 left-0 w-full flex items-center px-10 bg-black bg-opacity-10 lg:px-16 justify-between align-center pb-10 pt-10">
                <p
                    className={clsx(
                        montserrat.className,
                        "text-3xl sm:text-4xl lg:text-5xl text-white inline-block"
                    )}
                >
                    <span>You Dream, we <span className="italic">Create</span></span>
                </p>
                <button className="backdrop-blur-sm backdrop-saturate-150 inline-flex md:hidden gap-3 items-center align-center border border-[#A4A4A4] rounded-lg px-[20px] py-[13px] m-0 text-base/[13px] text-white">
                    <span className="font-medium">Make Your Dream Come True</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                <button className="hidden md:inline-flex gap-3 items-center align-center border border-[#A4A4A4] rounded-md px-[20px] py-[13px] m-0 text-base/[13px] text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3]">
                    <span className="font-medium">Make Your Dream Come True</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
};