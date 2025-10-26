import { partners } from "@/constants/partnerts";
import { montserrat } from "@/fonts/montserrat";
import { uuidv4 } from "@/utils/uuid4";
import clsx from "clsx";
import Image from "next/image";

export const Partners = () => {
  return (
    <section className="mb-20">
      <div>
        <p
          className={clsx(
            montserrat.className,
            "text-center text-2xl lg:text-4xl mb-4 text-[#3D3834] font-medium"
          )}
        >
          Our Trusted Partners
        </p>
      </div>
      <div>
        <ul className="flex justify-between items-center flex-wrap">
          {partners.map((partner) => (
            <li key={uuidv4()}>
              <div className="w-40 md:w-52 h-28 relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
