"use client";

import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import { Contact } from ".";
import clsx from "clsx";
import { montserrat } from "@/fonts/display";
import { satoshi } from "@/fonts/satoshi";
import dynamic from "next/dynamic";
import { siteConstants, whatsappHref } from "@/constants/site";
import { InstagramIcon, WhatsAppIcon } from "../ui/Icons";

const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

const labelClass = "text-brand-tan font-medium text-lg mb-1";
const valueClass = "text-brand-ink text-xl whitespace-normal break-words";

export const ContactForm = () => {
  const locationDetails = () => {
    return (
      <div className="flex flex-col gap-4 md:py-10">
        <h1 className={clsx(montserrat.className, "hidden md:block text-6xl text-brand-ink font-medium")}>Contact Us</h1>
        <div className="flex w-full">
          <div
            aria-hidden
            className="hidden md:block w-2 rounded-full"
            style={{ background: "linear-gradient(to bottom, rgb(var(--c-brown)), rgb(var(--c-sand)))" }}
          />
          <div className="flex flex-col gap-6 md:gap-10 md:pl-6 mt-6 mb-6">
            <div className="min-w-0">
              <h3 className={clsx(montserrat.className, labelClass)}>Location</h3>
              <address className={clsx(satoshi.className, "not-italic", valueClass)}>
                {siteConstants.address.street},<br />
                {siteConstants.address.locality}, {siteConstants.address.region} {siteConstants.address.postalCode}
              </address>
            </div>

            <div className="min-w-0">
              <h3 className={clsx(montserrat.className, labelClass)}>Reach out at</h3>
              <a
                href={siteConstants.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(satoshi.className, valueClass, "group inline-flex items-center gap-3 hover:underline underline-offset-4")}
              >
                <InstagramIcon className="w-9 h-9 shrink-0 transition-transform group-hover:scale-105" />
                <span>{siteConstants.instagramHandle}</span>
              </a>
              {siteConstants.phone && (
                <p className={clsx(satoshi.className, valueClass, "mt-3")}>
                  <a href={`tel:${siteConstants.phone.replace(/\s+/g, "")}`} className="hover:underline underline-offset-4">
                    {siteConstants.phone}
                  </a>
                </p>
              )}
              {whatsappHref && (
                <p className={clsx(satoshi.className, valueClass, "mt-3")}>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:py-10">
      <div className="bg-contact-us-texture-pattern">
        <h1 className={clsx(montserrat.className, "block md:hidden text-2xl text-brand-ink font-medium text-center")}>Contact Us</h1>
        <ImageLeftCopyRight
          wrapperClassName="gap-10"
          leftTemplate={locationDetails()}
          rightTemplate={<Contact removeDescription={true} />}
        />
      </div>
      <div className="mt-8 px-0 md:px-6">
        {/* Map uses NEXT_PUBLIC_GOOGLE_MAPS_API_KEY */}
        <ContactMap />
      </div>
    </div>
  );
};
