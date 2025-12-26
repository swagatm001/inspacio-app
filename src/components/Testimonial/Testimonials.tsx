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
    content: `Lorem ipsum dolor sit amet consectetur. Odio aenean est ac lectus. Quis quis nunc quam viverra turpis a id congue. Praesent.`,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
  },
  {
    id: 2,
    name: 'Sushma Mundargi',
    content: `Sangeeta and Swati are a great team to work with… they worked closely with multiple stakeholders to ensure the project aligned with preferences and expectations.`,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
  },
  {
    id:3,
    name: "Abishek D Mavinkurve",
    content: `When we were on a look out for our pent house home interiors, Kreative Design Studio planned and executed the entire project with minute detailing and quality finishes. Highly recommended.`,
    avatar: "https://images.unsplash.com/photo-1545996124-1f8b2d4e2a6b?w=800&q=80"
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
