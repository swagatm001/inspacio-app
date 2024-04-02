import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import Image from "next/image";

export const Boardmembers = () => {
  return (
    <section className="mb-20">
      <div className="bg-[#212529] p-20 text-white">
        <div className="mb-20">
          <p className="lg:text-4xl mb-4">Board Members</p>
          <p className={clsx(playfair.className, "text-3xl")}>
            We&apos;re lucky to be supported by some of the best investors in
            the world.
          </p>
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
              <p>Co-Founder</p>
            </div>
          </div>
          <div>
            <div className="w-52 h-52 relative mb-3">
              <Image
                fill
                src="/kds/main/sangeeta.jpg"
                alt="Swati Panda"
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Sangeeta Poojari</p>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
