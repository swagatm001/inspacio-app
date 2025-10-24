import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/constants/testimonials";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";


const TestimonialV2: React.FC = () => {
    
    const options: EmblaOptionsType = {align:'start',loop:true,breakpoints: {"(max-width: 768px)": {align: 'center'}}};
    const getTestimonials = () => {
        let items = testimonialsData.map((data,index) => {
            return <TestimonialCard key={index} testimonial={data}/>
        })
        return items;
    }
    return (
        <section className="py-10 align-center bg-brown-texture-pattern bg-cover bg-center">
        <h2 className={clsx(montserrat.className,'font-medium text-[40px] text-center text-white')}>What Our Clients Say</h2>
        <div className="">
            <EmblaCarousel options={options} slides={getTestimonials()} isDarkBackground={true}/>
        </div>
    </section>
    )
    
};

export default TestimonialV2;