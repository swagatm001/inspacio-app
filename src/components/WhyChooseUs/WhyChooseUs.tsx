"use client";
import React, { useRef, useState } from "react";
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import WHY_CHOOSE_US from '../../constants/whyChooseUs';

export const WhyChooseUs:React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section aria-label="Why choose us" className="flex justify-center px-4 py-12">
            <div className="max-w-[900px] w-full text-center">
                <h2 className={clsx(montserrat.className, 'm-0 text-2xl md:text-4xl font-medium text-[#3D3834]')}>{WHY_CHOOSE_US.heading}</h2>
                <p className={clsx(satoshi.className, 'mt-2 mb-6 text-sm md:text-lg font-normal text-[#3F3F3F]')}>
                    {WHY_CHOOSE_US.subheading}
                </p>

                <div role="list" className="mt-10 flex flex-col w-full max-w-4xl bg-[#EFEBE2] rounded-lg overflow-hidden px-16 py-8">
                    {WHY_CHOOSE_US.items.map((item, i) => {
                        const isOpen = openIndex === i;
                        const maxHeight =
                            isOpen && contentRefs.current[i]
                                ? `${contentRefs.current[i]!.scrollHeight}px`
                                : "0px";

                        return (
                            <div key={item.title} role="listitem" className={`w-full ${i < WHY_CHOOSE_US.items.length - 1 ? 'border-b border-gray-300' : ''}`}>
                                <button
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between py-5 px-0 bg-transparent border-0 cursor-pointer text-left"
                                >
                                    <span className={clsx(satoshi.className, 'font-normal text-lg md:text-2xl text-[#3D3834]')}>{item.title}</span>

                                    <span aria-hidden className="flex-shrink-0 ml-4">
                                        {isOpen ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                <div
                                    ref={(el) => (contentRefs.current[i] = el)}
                                    style={{ maxHeight }}
                                    className="overflow-hidden transition-[max-height] duration-300"
                                >
                                    <div className={clsx(satoshi.className, 'px-0 pb-5 font-normal text-sm md:text-lg text-[#3D3834] leading-relaxed text-left')}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}