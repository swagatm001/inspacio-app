// Testimonials.js

import React from 'react';
import Testimonial from './Testimonial';
import clsx from 'clsx';
import { playfair } from '@/fonts/playfair';
import { montserrat } from '@/fonts/montserrat';

const testimonialsData = [
  {
    id: 1,
    name: 'Ritesh Soni',
    content: `They are a set of professional interior team; young, energetic and motivated. I’ve worked with them for an office renovation project of large scale and they delivered quality on time.`,
    avatar: '/images/placeholder.webp',
  },
  {
    id: 2,
    name: 'Sushma Mundargi',
    content: `Sangeeta and Swati are a great team to work with… they worked closely with multiple stakeholders to ensure the project aligned with preferences and expectations.`,
    avatar: '/images/placeholder.webp',
  },
  {
    id:3,
    name: "Abishek D Mavinkurve",
    content: `When we were on a look out for our pent house home interiors, Kreative Design Studio planned and executed the entire project with minute detailing and quality finishes. Highly recommended.`,
    avatar: '/images/placeholder.webp'
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-6 md:px-24">
      <h2 className={clsx(montserrat.className, "text-3xl lg:text-4xl font-medium mb-8 text-[#3D3834]")}>Hear from Our Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {testimonialsData.slice(0, 3).map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            content={testimonial.content}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
