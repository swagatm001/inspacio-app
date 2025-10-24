"use client"
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import { Gallery } from "./Gallery";
import { latestProjectConstants } from "@/constants/projects";
import Link from "next/link";



export const LatestProjects = () => {
    return (
        <div className="mb-28">
            <div className={clsx(montserrat.className,"flex justify-between mb-10")}>
                <h1 className="text-[40px] text-gray-600">Our Latest Works</h1>
                <Link href={'/projects'}>
                <button className="inline-flex gap-3 items-center hidden md:inline-flex border border-[#A4A4A4] rounded-md px-[20px] py-[13px] m-0 text-base/[13px] text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3]">
                    <span>View All Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                </Link> 
            </div>
            <Gallery projects={latestProjectConstants}/>
            <button className="relative left-1/2 -translate-x-1/2 inline-flex gap-3 items-center md:hidden align-center border border-[#A4A4A4] rounded-md px-[20px] py-[13px] m-0 text-base/[13px] text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3]">
                <span>View All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    )
}