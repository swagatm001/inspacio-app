// Testimonial.tsx
"use client"

import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import clsx from "clsx";
import React from "react";

interface TestimonialProps {
  name: string;
  content: string;
  avatar: string;
  role?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, content, avatar, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={avatar} alt={name} />
        <div className="absolute left-4 bottom-4 text-white">
          <div className={clsx(montserrat.className,"text-2xl")}>{name}</div>
          {role && <div className="text-sm opacity-90">{role}</div>}
        </div>
      </div>

      <div className="p-6">
        <div className="text-5xl text-black-300">“</div>
        <p className={clsx(satoshi.className, "text-[#3f3f3f] text-lg leading-relaxed")}>{content}</p>
      </div>
    </div>
  );
};

export default Testimonial;
