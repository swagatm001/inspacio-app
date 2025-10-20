"use client";
import clsx from "clsx";
import React from "react";
import {ImageComparator} from "./ImageComparator";
import { montserrat } from "@/fonts/montserrat";

const projects = [
    { name: "Modern Living Room" },
    { name: "Cozy Bedroom" },
    { name: "Minimalist Kitchen" },
    { name: "Elegant Bathroom" },
];

const ProjectTransformation: React.FC = () => {
    return (
        <section className="px-4 py-12 max-w-[1200px] mx-auto">
            {/* Section Heading */}
            <div className={clsx(montserrat.className,"text-center mb-10")}>
                <div className="text-gray-500 text-base tracking-wider mb-2">[The ‘Dream Team’ that always delivers]</div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[40px] font-medium m-0"><span className="text-gray-500">Built by</span> Experts</h2>
                    <h2 className="text-[40px] font-medium m-0 "><span className="text-gray-500">Backed by</span> Passion</h2>
                </div>
            </div>

            {/* Content Row */}
            <div className="flex flex-wrap gap-10 items-start justify-start">
                {/* Left Side: Text & Project List */}
                <div className="flex-1 min-w-[300px] max-w-[400px]">
                    <h4 className="text-xl font-semibold mb-3">Witness the Transformation</h4>
                    <p className="text-gray-600 mb-6">
                        Here we highlight, the power of thoughtful design, intelligent space planning, and curated décor. We reimagine outdated, underutilized commercial spaces into vibrant, functional environments that reflect your brand and support your business goals. Each transformation is a testament to our commitment to elevating interiors that leave lasting impressions and inspire everyone who walks through the door.
                    </p>
                    <ul className="list-none p-0 m-0">
                        {projects.map((project, idx) => (
                            <li
                                key={project.name}
                                className={clsx(
                                    'flex items-center py-2 cursor-pointer transition-colors',
                                    idx !== projects.length - 1 ? 'border-b border-gray-200' : '',
                                    'hover:text-black text-gray-700'
                                )}
                            >
                                <span className="flex-1 text-base">{project.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Image Comparator */}
                <div className="w-full h-full min-w-[320px] max-w-[520px]">
                    {/* <ImageComparator /> */}
                </div>
            </div>
        </section>
    );
};

export default ProjectTransformation;