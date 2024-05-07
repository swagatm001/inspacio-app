import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import Image from "next/image";

export const Services = () => {
  return (
    <section className="mb-20">
      <div className="mb-10">
        <p
          className={clsx(
            playfair.className,
            "text-2xl lg:text-4xl mb-3 text-gray-500"
          )}
        >
          Explore Our Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="w-full aspect-square bg-gray-200 relative">
          <Image
            fill
            src="/kds/main/interior-design.jpg"
            alt="Interior design"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
            <div className="p-6 lg:p-8">
              <p
                className={clsx(
                  playfair.className,
                  "text-4xl text-white font-semibold w-32"
                )}
              >
                Interior design
              </p>
            </div>
          </div>
        </div>
        <div className="w-full aspect-square bg-gray-200 relative">
          <Image
            fill
            src="/kds/main/architectural-design.jpg"
            alt="Interior design"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
            <div className="p-6 lg:p-8">
              <p
                className={clsx(
                  playfair.className,
                  "text-4xl text-white font-semibold w-32"
                )}
              >
                Architectural design
              </p>
            </div>
          </div>
        </div>
        <div className="w-full aspect-square bg-gray-200 relative">
          <Image
            fill
            src="/kds/main/turnkey-solution.jpg"
            alt="Interior design"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
            <div className="p-6 lg:p-8">
              <p
                className={clsx(
                  playfair.className,
                  "text-4xl text-white font-semibold w-32"
                )}
              >
                Turnkey solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
