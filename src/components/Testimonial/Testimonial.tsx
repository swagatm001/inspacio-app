// Testimonial.js
"use client"

import React from "react";
import StarRatings from "react-star-ratings";

interface TestimonialProps {
  name: string;
  content: string;
  avatar: string;
  rating: number
}

const Testimonial: React.FC<TestimonialProps> = ({ name, content, avatar, rating }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-center">
          <img className="w-16 h-16 rounded-full" src={avatar} alt={name} />
        </div>
        <div className="text-center mt-4">
          <div className="text-lg font-semibold">{name}</div>
          <div className="p-2">
            <StarRatings starDimension="15" rating={rating} starRatedColor="#fabb05" numberOfStars={5} />
          </div>
          <div className="mt-2 text-gray-600">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
