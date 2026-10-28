import { partners } from "@/constants/partnerts";
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export const Partners = () => {
  return (
    <section className="mb-20" aria-labelledby="partners-heading">
      <div className="flex flex-col items-center mb-6">
        <SectionEyebrow number="05" label="Trusted by" className="justify-center" />
        <h2 id="partners-heading" className={clsx(montserrat.className, "text-center text-2xl md:text-[40px] text-brand-ink font-medium")}>
          Our Trusted Partners
        </h2>
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-5 gap-y-6">
        {partners.map((partner) => (
          <li key={partner.name}>
            <div className="w-32 lg:w-[140px] h-20 md:h-24 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
