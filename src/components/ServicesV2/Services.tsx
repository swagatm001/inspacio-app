"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Service, services } from '../../constants/services';
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';
import BookFreeAppointment from '../BookFreeAppointment/BookFreeAppointment';

export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(services[Object.keys(services)[0]] || null);

    const imageList = useMemo(() => {
        return Object.keys(services).map((key) => services[key].imageUrl);
    }, []);


    const imageListMobile = useMemo(() => {
        return Object.keys(services).map((key) => services[key].imageUrlMobile);
    }, []);

    return (
        <div className='mb-24'>
            <h2 className={clsx(montserrat.className, 'text-center text-4xl font-medium mb-6 text-[#3D3834]')}>Services & Offerings</h2>
            <div className='flex flex-col'>
                {/* Tabs */}
                <div className='w-full overflow-x-auto no-scrollbar border-b border-light-gray'>
                    <div className='w-full flex flex-nowrap whitespace-nowrap text-lg'>
                        {Object.keys(services).map((key) => (
                            <button key={key} className={clsx(satoshi.className, `py-2 px-4 flex-shrink-0`, selectedService === services[key] ? 'border-b-2 border-[#3D3834] text-[#3D3834] font-medium' : 'text-[#78736F]')} onClick={() => setSelectedService(services[key])}>{key}</button>
                        ))}
                    </div>
                </div>

                {/* Tab content (content left, image right on md+) */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Left: textual content */}
                    <div>
                        {selectedService && (
                            <>
                                {selectedService.paragraph && selectedService.paragraph.map((para, index) => {
                                    return <p key={index} className={clsx(satoshi.className, "text-lg mb-4 text-[#3f3f3f]")}>{para}</p>
                                })}
                                {selectedService.points && selectedService.points.length > 0 && (
                                    <ul className="list-disc pl-5 mb-4">
                                        {selectedService.points.map((point, index) => (
                                            <li key={index} className={clsx(satoshi.className, "text-lg mb-1 text-[#3f3f3f]")}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <BookFreeAppointment title='Book a FREE Appointment' bgClassName='bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3]' textClassName='text-[#3D3834]' />
                            </>
                        )}
                    </div>

                    {/* Right: responsive image */}
                    <div className="flex items-center justify-center">
                        {selectedService ? (
                            <div className="w-full max-w-lg">
                                {selectedService.imageUrlMobile && (
                                    <div className="block md:hidden w-full">
                                        <Image src={selectedService.imageUrlMobile} alt={selectedService.title || 'service image'} width={800} height={520} className="w-full h-auto object-cover rounded-md" />
                                    </div>
                                )}

                                {selectedService.imageUrl && (
                                    <div className="hidden md:block w-full">
                                        <Image src={selectedService.imageUrl} alt={selectedService.title || 'service image'} width={800} height={520} className="w-full h-auto object-cover rounded-md" />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-gray-500">Select a service to see details</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tab1Content = () => <div>
    <h2 className="text-[#3D3834] text-2xl font-semibold mb-2">Service 1</h2>
    <p className="mb-4 text-gray-600">This is the content for Service 1.</p>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-1 text-gray-700">Point 1</li>
        <li className="mb-1 text-gray-700">Point 2</li>
        <li className="mb-1 text-gray-700">Point 3</li>
    </ul>
    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
        Learn More
    </button>
</div>;

const Tab2Content = () => <div>
    <h2 className="text-[#3D3834] text-2xl font-semibold mb-2">Service 2</h2>
    <p className="mb-4 text-gray-600">This is the content for Service 2.</p>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-1 text-gray-700">Point 1</li>
        <li className="mb-1 text-gray-700">Point 2</li>
        <li className="mb-1 text-gray-700">Point 3</li>
    </ul>
    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
        Learn More
    </button>
</div>;

const Tab3Content = () => <div>
    <h2 className="text-[#3D3834] text-2xl font-semibold mb-2">Service 3</h2>
    <p className="mb-4 text-gray-600">This is the content for Service 3.</p>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-1 text-gray-700">Point 1</li>
        <li className="mb-1 text-gray-700">Point 2</li>
        <li className="mb-1 text-gray-700">Point 3</li>
    </ul>
    <button className="inline-flex gap-3 items-center mt-2 px-6 py-2 text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3] border rounded-md transition border-1">
        Learn More
    </button>
</div>;