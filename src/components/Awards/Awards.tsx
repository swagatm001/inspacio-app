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

    const options: EmblaOptionsType = {align:'start',loop:true}
    return (
        <section className="py-8">
            <h2 className={clsx(montserrat.className,"mb-8 text-center text-3xl font-medium text-[#3D3834]")}>Awards We Are Proud Of</h2>
            <div className={clsx(satoshi.className,"flex flex-col md:flex-row items-center gap-8")}>
                {/* Left Side */}
                <div className="basis-1/3">
                    <h3 className="mb-4 text-2xl font-bold">We’ve got felicitated</h3>
                    <p className="mb-6 text-lg text-gray-700">
                        Inspacio Design has been recognized for excellence in interior design, innovation, and creativity. Explore our award-winning projects and discover what sets us apart.
                    </p>
                    <button className="mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
                        Check it Out
                    </button>
                </div>
                {/* Right Side */}
                <div className="basis-2/3 w-full">
                    <EmblaCarousel slides={getAwardSlides()} options={options}/>
                    
                </div>
            </div>
        </section>
    );
};

export default Awards;