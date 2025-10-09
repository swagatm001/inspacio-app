"use client";
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import clsx from 'clsx';
import React, { useRef, useEffect } from 'react';

const TEXTS = [
    "Be part of the Inspacio makeover",
    "#YouDreamWeCreate",
    "When",
    "#YouDreamWeCreate",
];

const SCROLL_SPEED = 50; // pixels per second

const TextScroll:React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let start: number | null = null;
        let animationFrame: number;

        const scrollWidth = scrollContainer.scrollWidth / 2;

        function animateScroll(timestamp: number) {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const distance = (elapsed / 1000) * SCROLL_SPEED;
            scrollContainer && (scrollContainer.scrollLeft = distance % scrollWidth);
            animationFrame = requestAnimationFrame(animateScroll);
        }

        animationFrame = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    // Duplicate texts for seamless infinite scroll
    const items = [...TEXTS, ...TEXTS];

    return (
        <div
            ref={scrollRef}
            className="mb-10 mt-10 w-full overflow-hidden whitespace-nowrap"
        >
            <div className="inline-block">
                {items.map((text, idx) => (
                    <span
                        key={idx}
                        className={clsx(
                            idx % 2 === 0 ? montserrat.className : satoshi.className,
                            "inline-block px-8 text-4xl align-middle",
                            idx % 2 === 0 ? "font-medium text-[#885739]" : "font-light italic text-[#3D3834]"
                        )}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextScroll;