"use client";
import React, {useState, useMemo} from 'react';
import Image from 'next/image';
import {Service, services} from '../../constants/services';
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';

export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(services[Object.keys(services)[0]] || null);

    const imageList = useMemo(() => {
        return Object.keys(services).map((key) => services[key].imageUrl);
    },[])

    return (
        <div className='flex lg:flex-row justify-between sm:flex-col mb-10'>
            <div className='flex flex-row gap-0 sm:display-none'>
                {imageList.map((url, index) => (
                    url && <Image key={index} src={url} alt={`Service ${index + 1}`} width={200} height={573} />
                ))}
            </div>
            <div className='flex-[0_1_40%]'>
                <h1 className={clsx(montserrat.className,'text-[40px] font-medium mb-10 text-[#3D3834]')}>Our Services</h1>
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
                                     {selectedService.points.map((point,index) => (
                                        <li key={index} className="mb-1 text-gray-700">{point}</li>
                                ))}
                                </ul>
                            )}
                            <button className="mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">Check it Out</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}