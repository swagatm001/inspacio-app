"use client";
import { satoshi } from '@/fonts/satoshi';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Contact } from "../Contact";
import { Modal } from "../Modal";

type ButtonProps = {
    title: string;
    bgClassName?: string;
    textClassName?: string;
};

const BookFreeAppointment: React.FC<ButtonProps> = ({
    title = 'Book a FREE Consultation',
    bgClassName = 'bg-white',
    textClassName = "text-black"
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                type="button"
                aria-label="Book a free consultation"
                className={clsx(satoshi.className, bgClassName,textClassName, "inline-flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition whitespace-nowrap")}
            >
                <span>{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="bg-white p-6 rounded-lg">
                    <Contact />
                </div>
            </Modal>
        </div>
    )

};

export default BookFreeAppointment;