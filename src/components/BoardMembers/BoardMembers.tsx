import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import Image from "next/image";

export const Boardmembers = () => {
  return (
    <section className="mb-20">
      <div className="bg-[#212529] py-20 px-10 md:p-20 text-white">
        <div className="mb-20">
          <p className={clsx(playfair.className, "text-2xl lg:text-4xl mb-4")}>Leadership</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-64 md:flex-row">
          <div>
            <div className="w-52 h-52 relative mb-3">
              <Image
                fill
                src="/kds/main/swati.jpg"
                alt="Swati Panda"
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Swati Panda</p>
              <p>Founder & MD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
