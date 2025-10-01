"use client"
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import { Gallery } from "./Gallery";
import { latestProjectConstants } from "@/constants/projects";



export const LatestProjects = () => {
    return (
        <div>
            <div className={clsx(montserrat.className,"flex justify-between mb-10")}>
                <h1 className="text-[40px] text-gray-600">Our Latest Works</h1>
                <button className="border border-[#A4A4A4] rounded-md px-[20px] py-[13px] m-0 text-gray-600 text-base/[13px]">View All Projects</button>
            </div>
            <Gallery projects={latestProjectConstants}/>
        </div>
    )
}