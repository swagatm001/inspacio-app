"use client";

import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import { Contact } from ".";
import clsx from "clsx";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";
import dynamic from "next/dynamic";
const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });
import { SocialLinks } from "../Header/SocialLinks";

export const ContactForm = () => {

  const locationDetails = () => {
    return (
      <div className="flex flex-row md:flex-col gap-4 md:py-10">
        <h1 className={clsx(montserrat.className, "hidden md:block text-6xl text-[#3D3834] font-medium")}>Contact Us</h1>
          <div className="flex w-full">
          <div
            aria-hidden
            className="hidden md:block w-2 rounded-full"
            style={{ background: "linear-gradient(to bottom,#885739,#E0D9C9)" }}
          />
          <div className="flex flex-row md:flex-col gap-6 md:gap-20 md:pl-6 mt-6 mb-6 justify-between md:justify-start">
            <div className="w-2/5 min-w-0">
              <h3 className={clsx(montserrat.className, "text-[#A6836E] font-medium text-lg")}>Location</h3>
              <p className={clsx(satoshi.className, "text-[#3D3834] text-xl whitespace-normal break-words")}>32 A, XYZ Building, ABC Street, Indiranagar, Bengaluru - 123456</p>
            </div>
            <div className="w-2/5 min-w-0">
              <h3 className={clsx(montserrat.className, "text-[#A6836E] font-medium text-lg")}>React out at</h3>
              <p className={clsx(satoshi.className, "text-[#3D3834] text-xl whitespace-normal break-words")}>info@kreativedezine.com</p>
              <div className="block md:hidden"><SocialLinks removeBorder={true}/></div>
            </div>
            <div className="hidden md:block">
              <SocialLinks removeBorder={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:py-10">
      <div className="bg-contact-us-texture-pattern">
        <h1 className={clsx(montserrat.className, "block md:hidden text-2xl text-[#3D3834] font-medium text-center")}>Contact Us</h1>
        <ImageLeftCopyRight
          wrapperClassName="gap-10"
          leftTemplate={locationDetails()}
          rightTemplate={<Contact removeDescription={true} />}
        />
      </div>
      <div className="mt-8 px-0 md:px-6">
        {/* Map uses NEXT_PUBLIC_GOOGLE_MAPS_API_KEY or you can pass apiKey prop */}
        <ContactMap />
      </div>
    </div>
  );
};
