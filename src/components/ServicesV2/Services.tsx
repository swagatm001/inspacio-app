"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Service, services } from '../../constants/services';
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';

export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(services[Object.keys(services)[0]] || null);

    const imageList = useMemo(() => {
        return Object.keys(services).map((key) => services[key].imageUrl);
    }, []);

    const imageListMobile = useMemo(() => {
        return Object.keys(services).map((key) => services[key].imageUrlMobile);
    },[]);

    return (
        <div className='flex lg:flex-row justify-between flex-col mb-28 md:min-h-[600px] align-center'>
            <div className='hidden lg:flex flex-row gap-0 max-h-[500px]'>
                <Image className='relative top-0' src={imageList[0] || ''} alt={`Architectural Design`} width={200} height={573} />
                <Image className='relative top-32' src={imageList[1] || ''} alt={`Interior Design`} width={200} height={573} />
                <Image className='relative top-16' src={imageList[2] || ''} alt={`Turnkey Solutions`} width={200} height={573} />
            </div>
            <div className='flex lg:hidden flex-col gap-0 items-center'>
                <Image className='relative left-10' src={imageListMobile[0] || ''} alt={`Architectural Design`} width={200} height={573} />
                <Image className='relative -left-15' src={imageListMobile[1] || ''} alt={`Interior Design`} width={200} height={573} />
                <Image className='relative left-5' src={imageListMobile[2] || ''} alt={`Turnkey Solutions`} width={200} height={573} />
            </div>
            <div className='flex-[0_1_40%]'>
                <h1 className={clsx(montserrat.className, 'mt-3 md:mt-0 text-2xl text-center md:text-left md:text-[40px] font-medium mb-10 text-[#3D3834]')}>Our Services</h1>
                {/* Horizontal Tabs */}
                <div className="flex flex-row gap-1 mb-8 bg-[#E0D9C9] border rounded-lg px-3 py-0.5 justify-between">
                    {Object.keys(services).map((key) => (
                        <button
                            key={key}
                            onClick={() => setSelectedService(services[key])}
                            className={clsx(
                                'text-md font-medium focus:outline-none transition rounded shadow-sm',
                                selectedService === services[key]
                                    ? 'bg-[#EFEBE2] text-gray-800 shadow-md px-4 py-1.5'
                                    : 'text-[#A6836E] px-4 py-1.5'
                            )}
                            type="button"
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <div>
                    {selectedService && (
                        <>
                            {selectedService.title && <h2 className="text-[#3D3834] text-2xl font-semibold mb-2">{selectedService.title}</h2>}
                            {selectedService.paragraph && <p className="mb-4 text-gray-600">{selectedService.paragraph}</p>}
                            {selectedService.points && selectedService.points.length > 0 && (
                                <ul className="list-disc pl-5 mb-4">
                                    {selectedService.points.map((point, index) => (
                                        <li key={index} className="mb-1 text-gray-700">{point}</li>
                                    ))}
                                </ul>
                            )}
                            <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
                                <span>Check it Out</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}