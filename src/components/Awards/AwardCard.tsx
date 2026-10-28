import { Award } from "@/constants/awards";
import React from "react";
import { LaurelIcon } from "../ui/Icons";

const AwardCard: React.FC<Award> = ({ title, description }) => {
  const year = title.match(/\b(19|20)\d{2}\b/)?.[0];
  const name = year ? title.replace(year, "").trim() : title;

  return (
    <div className="min-h-[250px] flex items-center">
      <div className="relative flex flex-col justify-center items-center bg-white border border-brand-sand shadow-sm rounded-lg px-5 py-7 h-52 text-center">
        {year && (
          <span className="font-body absolute top-3 right-3 text-xs font-medium tracking-wide text-brand-brown bg-brand-wash rounded-full px-2.5 py-1">
            {year}
          </span>
        )}
        <LaurelIcon className="w-9 h-9 text-brand-tan mb-3" />
        <h4 className="font-heading text-lg md:text-xl font-medium text-brand-ink mb-2 leading-snug">{name}</h4>
        <p className="font-body text-sm md:text-base text-[#696969] leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
