
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { I_Project } from './Gallery';
import { montserrat } from '@/fonts/montserrat';
import Link from 'next/link';
import { satoshi } from '@/fonts/satoshi';

interface GalleryCardProps {
    project: I_Project;
    colSpan?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ project, colSpan = "col-span-1" }) => {
    const cardRef = useRef<HTMLImageElement>(null);
    const [parallax, setParallax] = useState(0);
    const isVisible = useRef(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        let latestScroll = 0;
        let currentScroll = 0;

        const speed = 0.1;  // parallax strength
        const smooth = 0.1; // easing

        // Observe visibility of THIS card
        const observer = new IntersectionObserver(
            (entries) => {
                isVisible.current = entries[0].isIntersecting;
            },
            {
                threshold: 0,
                rootMargin: "200px", // start animation slightly before entering
            }
        );

        observer.observe(el);

        // Scroll listener (very light)
        const onScroll = () => {
            latestScroll = window.scrollY;
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // Animation loop
        const animate = () => {
            if (isVisible.current) {
                currentScroll += (latestScroll - currentScroll) * smooth;

                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const viewportCenter = windowHeight / 2;
                const elementCenter = rect.top + rect.height / 2;

                const distance = elementCenter - viewportCenter;
                const y = distance * speed;

                el.style.transform = `translateY(${-y}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };

    }, []);

    return (
        <div
         
            className={clsx(montserrat.className,
                colSpan,
                'relative group rounded-lg overflow-hidden h-80 cursor-pointer aspect-3/2'
            )}
        >
            {/* Image covers whole card with parallax effect */}
            <Image
                ref={cardRef}
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover w-full h-full transition-transform"
                style={{ transform: `scale(1.15)` }}
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
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-2 md:px-6 py-2 text-center text-white w-full pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
            >
                <p className="font-medium text-2xl drop-shadow mb-2">{project.title}</p>
                <span className="text-sm text-gray-200 border rounded-full px-3 py-0.5 backdrop-blur-lg backdrop-saturate-200">{project.address}</span>
            </div>
            {/* Hidden details, expand from center on hover */}
            <div
                className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/80 text-white opacity-0 scale-[0] group-hover:opacity-80 group-hover:scale-[1] transition-all duration-300 z-20 p-4"
                style={{ pointerEvents: 'none' }}
            >
                <div className="w-full text-center">
                    <p className="font-medium text-2xl mb-2">{project.title}</p>
                    <span className="text-sm text-gray-200 mb-2 border rounded-full px-3 py-0.5">{project.address}</span>
                    <p className={clsx(satoshi.className,"font-normal w-[80%] text-lg text-white-300 mb-4 line-clamp-3 mb-2 mt-2 mx-auto")}>{project.intro || project.description}</p>
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