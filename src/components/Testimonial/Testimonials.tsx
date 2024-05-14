// Testimonials.js

import React from 'react';
import Testimonial from './Testimonial';
import clsx from 'clsx';
import { playfair } from '@/fonts/playfair';

const testimonialsData = [
  {
    id: 1,
    name: 'Ritesh Soni',
    content: `They are a set of professional interior team; young, energetic and motivated. I’ve worked with them for an office renovation project of large scale and they delivered quality on time. Throughout the journey, they were responsive to changing requirements and provided their guidance on what would fit and suit better.

    Would highly recommend this team if you want to be stress free with interior works.`,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWiywKqmjsUQroZ_NxRN5lFiur_E2O9FwbU3aRjJ6s7FsuJEFr7=w54-h54-p-rp-mo-ba3-br100',
  },
  {
    id: 2,
    name: 'Sushma Mundargi',
    content: `Sangeeta and Swath are a great team to work with… Undertaking a renovation project at work place can be daunting and time consuming but Keative team was able to comprehend our vision. They worked closely with multiple stakeholders to ensure that the project is aligned with our preferences and expectations.`,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW-HSDustNIP6nSLwh0LFSW1MNNYa3Ze0pwsLwbqi_InOoqfP2g=w54-h54-p-rp-mo-br100',
  },
  {
    id:3,
    name: "Abishek D Mavinkurve",
    content: `When we were on a look out for our pent house home interiors, we came across Kreative Design Studio. The entire process of design and it's execution has been very well planned by Ms.Swati and Ms. Sangeeta. A large 4500 sqft of interiors was completed in less than 60 days. We are extremely happy with the quality and their minute detailing in the overall finishes. I would highly recommend Kreative Design Studio and a big thank you for making our dream home in to reality. I would also wish Swati and Sangeeta good luck in all their future projects.`,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXYi_n0fGPOeBp2KS4cOysUUgHtJYrGKr8lHVthnK1J3plVWXY=w54-h54-p-rp-mo-br100"
  },
  {
    id: 4,
    name: "Sarthak Rout",
    content: `I am quite amazed by the quality of consultation and services provided. Up-to-date with all latest creations and awesome designs are their hallmarks. The attitude of the staff and the management is very polite and cordial towards the customers. Highly recommended!!
    Services taken : Full 3 bhk interiors for apartment at indira nagar.`,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUJBoa-pRY67PjKEDaJbcGNsaqaZ8z0_zqqhJX0HYNLItzJsGdH=w54-h54-p-rp-mo-br100"
  },
  {
    id: 5,
    name: "Tanaya Bhattacharya",
    content: `We renovated our home interiors with Kreative in June. All through the discussion / design / execution and support provided by the team was very good. Overall fully satisfied with the finished output quality.`,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX1EkB5cl2tuIRY9CkBOT9VlxkKfJHj_HCm7Ts145efUloYXGw=w54-h54-p-rp-mo-br100"
  },
  {
    id: 6,
    name: "sammanita pradhan",
    content: `Great designs, great team, great work 👍`,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUlcLDz_qS5qinCR1-pjRPz2s6RV5vYJTb3H2L6TrODphuWsLPDzw=w54-h54-p-rp-mo-br100"
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className={clsx(playfair.className, "text-3xl lg:text-4xl font-semibold mb-8")}>Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
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
