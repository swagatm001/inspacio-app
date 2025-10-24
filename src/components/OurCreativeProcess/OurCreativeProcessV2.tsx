"use client";
import { processConstants2 } from "@/constants/process";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import { uuidv4 } from "@/utils/uuid4";
import clsx from "clsx";
import React from "react";

type Step = {
    name: string;
    description: string;
    image: string;
};

const steps: Step[] = [
    {
        name: "Discovery",
        description: "We understand your needs, goals, and vision to set the foundation.",
        image: "/images/step1.png",
    },
    {
        name: "Research",
        description: "We analyze trends, materials, and inspirations to inform our approach.",
        image: "/images/step2.png",
    },
    {
        name: "Conceptualization",
        description: "We develop creative concepts and initial sketches for your project.",
        image: "/images/step3.png",
    },
    {
        name: "Design Development",
        description: "We refine concepts into detailed designs and select finishes.",
        image: "/images/step4.png",
    },
    {
        name: "Execution",
        description: "We bring the design to life, managing every detail and process.",
        image: "/images/step5.png",
    },
    {
        name: "Delivery",
        description: "We finalize, review, and hand over the completed project to you.",
        image: "/images/step6.png",
    },
];

export const OurCreativeProcessV2: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className={clsx(montserrat.className,"text-[#3D3834] text-3xl font-medium text-center mb-12")}>{processConstants2.title}</h2>
            <div className="relative">
                {/* Vertical divider */}
                <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 z-0" />
                {/* vertical circle */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-4 -bottom-6 w-8 h-8 rounded-full bg-gradient-to-b from-amber-800 to-white"></div>
                <div className="flex flex-col gap-12 relative z-10">
                    {processConstants2.steps.map((step, idx:number) => (
                        <>
                        <div
                            key={uuidv4()}
                            className="hidden lg:flex flex-row items-center justify-between gap-[10vw]"
                        >
                            {idx % 2 === 0 ? (
                                <>
                                    {/* Image left */}
                                    <div className="flex-1 flex justify-end">
                                        <div className="flex items-center justify-center">
                                            <img src={step.imgUrl} alt={step.stepTitle} className="w-32 h-32 object-contain" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-4 mb-8">
                                            <Step num={idx+1}/>
                                            <div className="flex-col">
                                                <h3 className={clsx(montserrat.className,"text-[#3D3834] text-2xl font-semibold mb-2 uppercase")}>{step.stepTitle}</h3>
                                                <p className={clsx(satoshi.className,"text-lg text-[#696969] border rounded-full border-gray-300 bg-gray-200 inline-block px-2.5 py-1")}>{step.timeline}</p>
                                            </div>
                                        </div>
                                        <p className={clsx(satoshi,"text-lg text-gray-600")}>{step.desc}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Content left */}
                                    <div className="flex-1">
                                        <div className="flex gap-4 mb-8">
                                            <Step num={idx+1}/>
                                            <div className="flex-col">
                                                <h3 className={clsx(montserrat.className,"text-[#3D3834] text-2xl font-semibold mb-2 uppercase")}>{step.stepTitle}</h3>
                                                <p className={clsx(satoshi.className,"text-lg text-[#696969] border rounded-full border-gray-300 bg-gray-200 inline-block px-2.5 py-1")}>{step.timeline}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                    <div className="flex-1 flex justify-start">
                                        <div className="flex items-center justify-center">
                                            <img src={step.imgUrl} alt={step.stepTitle} className="w-32 h-32 object-contain" />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            key={uuidv4()}
                            className="block lg:hidden flex flex-col items-center justify-between gap-[10vw]"
                        >
                                    {/* Image left */}
                                    <div className="flex-1 flex justify-end">
                                        <div className="flex items-center justify-center">
                                            <img src={step.imgUrl} alt={step.stepTitle} className="w-32 h-32 object-contain" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-4 mb-8 justify-center">
                                            <Step num={idx+1}/>
                                            <div className="flex-col">
                                                <h3 className={clsx(montserrat.className,"text-[#3D3834] text-2xl font-semibold mb-2 uppercase")}>{step.stepTitle}</h3>
                                                <p className={clsx(satoshi.className,"text-lg text-[#696969] border rounded-full border-gray-300 bg-gray-200 inline-block px-2.5 py-1")}>{step.timeline}</p>
                                            </div>
                                        </div>
                                        <p className={clsx(satoshi,"text-lg text-gray-600")}>{step.desc}</p>
                                    </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

type StepProps = {
    num: number;
}

const Step:React.FC<StepProps> = ({num}) => {

    return (
      <div className="relative w-16 h-16 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-gradient-to-b from-amber-800 to-white shadow overflow-hidden">
        {/* Subtle diagonal shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        
        {/* Number badge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="text-3xl font-bold text-amber-700">{num}</span>
          </div>
        </div>
      </div>
    )
}