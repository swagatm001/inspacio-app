"use client";
// create a video banner component with play/pause functionality
import React from "react";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import Image from "next/image";
import { satoshi } from "@/fonts/satoshi";

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
            <div onClick={handlePlayPause} className="absolute top-0 left-0 w-full h-full cursor-pointer">
                {showOnce.current && <Image src={'/images/banner.jpg'} className="object-cover" alt="Design video" fill/>}
                {/* play icon */}
                {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-32 text-white opacity-60">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                </svg>}
            </div>
            <div className="flex-col md:flex-row translate-y-0 absolute bottom-0 left-0 w-full flex items-center md:items-center px-10 bg-black bg-opacity-10 lg:px-16 justify-between align-center pb-10 pt-10 gap-6 md:gap-0">
                <div className="flex-col">
                    <p
                    className={clsx(
                        montserrat.className,
                        "text-2xl sm:text-4xl lg:text-5xl text-white"
                    )}
                >
                    Ek Safar, Ghar Tak
                </p>
                <p
                    className={clsx(
                        satoshi.className,
                        "text-md sm:text-lg lg:text-2xl text-white"
                    )}
                >
                    A journey where every design tells a story.
                </p>

                </div>
                {/* Gradient border CTA wrapper - always expanded on mobile, collapsible on desktop */}
                <div
                    className="inline-flex items-center rounded-lg md:rounded-full p-[1px] group transition-all duration-1000 md:group-hover:rounded-lg"
                    style={{ background: 'linear-gradient(to bottom, #ffffff, #F36730)' }}
                >
                    <button
                        aria-label="Book a free appointment"
                        type="button"
                        className="inline-flex items-center relative w-auto h-12 px-4 md:px-0 md:max-w-[48px] md:group-hover:max-w-[900px] md:group-hover:px-4 md:group-hover:flex-row-reverse rounded-lg md:rounded-full overflow-hidden bg-[#F36730] transition-all duration-1000 ease-out flex-row-reverse md:flex-row"
                    >
                        {/* circular icon container (fixed) */}
                        <span className="flex items-center justify-center w-12 h-12 shrink-0">
                            <Image src="/images/phone_icon.svg" alt="phone" width={20} height={20} />
                        </span>

                        {/* label - always visible on mobile, hidden on desktop until hover */}
                        <span className={clsx(
                            satoshi.className,
                            "md:ml-3 md:opacity-0 md:translate-x-2 text-white font-medium whitespace-nowrap transition-all duration-1000",
                            "md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:ml-0 md:group-hover:mr-1",
                        )}>
                            Book a FREE Appointment
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};