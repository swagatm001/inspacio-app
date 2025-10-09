import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import React from "react";
import { OurStory as OurStoryData } from "@/constants/ourStory";

const OurStory: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between my-16 gap-[90px]">
            {/* Left: Video Card */}
            <div className="w-full md:w-[70%] flex justify-center items-center">
                <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                    {/* Replace src with your video URL */}
                    <video
                        className="w-full h-full object-cover"
                        controls
                        poster={OurStoryData.posterUrl}
                    >
                        <source src={OurStoryData.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Right: Title, Description, Button */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-start px-4 py-8 md:py-0">
                <h2 className={clsx(montserrat.className,"text-5xl font-medium mb-4 uppercase")}>{OurStoryData.title}</h2>
                <p className="text-gray-600 mb-6">{OurStoryData.description}</p>
                <button className="mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">{OurStoryData.buttonText}</button>
            </div>
        </section>
    );
};

export default OurStory;