import { awards } from '@/constants/awards';
import React from 'react';
import AwardCard from './AwardCard';
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import EmblaCarousel from '../EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';


const Awards: React.FC = () => {

    const getAwardSlides = () => {
        let items = awards.map((award,index) => {
            return <AwardCard key={index} title={award.title} description={award.description}/>
        });
        return [...items,...items];
    }

    const options: EmblaOptionsType = {align:'center',loop:true,breakpoints: {"(max-width: 768px)": {align: 'center'}}}
    return (
        <section className="py-8">
            <h2 className={clsx(montserrat.className,"mb-8 text-center text-3xl font-medium text-[#3D3834]")}>Awards We Are Proud Of</h2>
            <div className={clsx(satoshi.className,"flex flex-col md:flex-row lg:flex-row items-center w-full")}>
                {/* Left Side */}
                <div className="basis-1/3 flex-shrink-0">
                    <h3 className="mb-4 text-2xl font-bold">Celebrating Design Excellence</h3>
                    <p className="mb-6 text-lg text-gray-700">
                        Honoured for creativity, craftsmanship, and meaningful design, each recognition strengthens our pursuit of timeless, human-centric spaces.
                    </p>
                    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1 sm:display-none">
                        <span>Check it Out</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                {/* Right Side */}
                <div className="basis-2/3 flex-shrink-1">
                    <EmblaCarousel slides={getAwardSlides()} options={options}/>
                </div>
            </div>
        </section>
    );
};

export default Awards;