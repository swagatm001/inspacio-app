// Testimonial.js

import React from 'react';

interface TestimonialProps {
    name: string
    content: string
    avatar: string
}

const Testimonial: React.FC<TestimonialProps> = ({ name, content, avatar }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-center">
          <img className="w-16 h-16 rounded-full" src={avatar} alt={name} />
        </div>
        <div className="text-center mt-4">
          <div className="text-lg font-semibold">{name}</div>
          <div className="mt-2 text-gray-600">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
