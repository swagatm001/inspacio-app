
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { I_Project } from './Gallery';
import { montserrat } from '@/fonts/montserrat';
import Link from 'next/link';

interface GalleryCardProps {
    project: I_Project;
    colSpan: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ project, colSpan }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [parallax, setParallax] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!cardRef.current) return;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = cardRef.current!.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const cardCenter = rect.top + rect.height / 2;
                    const viewportCenter = windowHeight / 2;
                    const distance = cardCenter - viewportCenter;
                    const factor = 0.1;

                    setParallax(-distance * factor);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={clsx(montserrat.className,
                colSpan,
                'relative group rounded-lg overflow-hidden h-80 cursor-pointer'
            )}
        >
            {/* Image covers whole card with parallax effect */}
            <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500"
                style={{ zIndex: 1, transform: `scale(1.15) translateY(${parallax}px)` }}
            />
            {/* Gradient shadow at bottom of image */}
            <div
                className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, rgba(45, 34, 28, 0) 30%, rgba(45, 34, 28, 0.7) 79%)',
                }}
            />
            {/* Title & address at bottom center, no background */}
            <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-2 md:px-6 py-2 text-center text-white w-[80%] pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
            >
                <p className="font-medium text-2xl drop-shadow mb-2">{project.title}</p>
                <span className="text-sm text-gray-200 border rounded-full px-3 py-0.5 backdrop-blur-lg backdrop-saturate-200">{project.address}</span>
            </div>
            {/* Hidden details, slide up on hover */}
            <div
                className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/80 text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 p-6"
                style={{ pointerEvents: 'none' }}
            >
                <div className="w-full text-center">
                    <p className="font-medium text-2xl mb-2">{project.title}</p>
                    <span className="text-sm text-gray-200 mb-2 border rounded-full px-3 py-0.5">{project.address}</span>
                    <p className="font-normal w-[80%] text-lg text-white-300 mb-4 line-clamp-3 mb-2 mt-2 mx-auto">{project.description}</p>
                    <Link href={`projects/${project.slug}`}>
                        <button
                        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                        style={{ pointerEvents: 'auto' }}
                        >
                            Take me there
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}