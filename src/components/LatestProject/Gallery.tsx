"use client"
import { T_Options } from "@/interfaces/Types";
import React from "react";
import { GalleryCard } from "./GalleryCard";

export interface I_Project {
    title: string
    thumbnail: string
    category: T_Options
    slug: string
    address: string
    description?: string
    image?: string[]
}

interface I_Gallery {
    projects: Array<I_Project>;
}


export const Gallery: React.FC<I_Gallery> = ({ projects }) => {
    // Helper to chunk array into pairs
    const chunkPairs = (arr: any[]) => {
        const res = [];
        for (let i = 0; i < arr.length; i += 2) {
            res.push(arr.slice(i, i + 2));
        }
        return res;
    };

    const projectPairs = chunkPairs(projects);

    return (
        <div className="flex flex-col gap-6 mb-10">
            {projectPairs.map((pair, rowIdx) => (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-3" key={rowIdx}>
                    {pair.map((p, colIdx) => {
                        // Odd rows: first col col-span-2, second col col-span-1
                        // Even rows: first col col-span-1, second col col-span-2
                        let colSpan = '';
                        if (rowIdx % 2 === 0) {
                            colSpan = colIdx === 0 ? 'col-span-1 lg:col-span-2' : 'col-span-1';
                        } else {
                            colSpan = colIdx === 0 ? 'col-span-1' : 'col-span-1 lg:col-span-2';
                        }
                        return (
                            <GalleryCard key={colIdx} project={p} colSpan={colSpan} />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

