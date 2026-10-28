import { partners } from "@/constants/partnerts";
import { montserrat } from "@/fonts/montserrat";
import clsx from "clsx";
import Image from "next/image";

export const Partners = () => {
  return (
    <section className="mb-20" aria-labelledby="partners-heading">
      <h2
        id="partners-heading"
        className={clsx(montserrat.className, "text-center text-2xl md:text-[40px] mb-4 text-[#3D3834] font-medium")}
      >
        Our Trusted Partners
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 items-center justify-items-center">
        {partners.map((partner) => (
          <li key={partner.name} className="w-full">
            <div className="w-full max-w-[200px] mx-auto h-24 md:h-28 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
