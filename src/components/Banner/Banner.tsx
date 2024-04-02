import clsx from "clsx";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="w-full mb-20">
      <div className="w-full h-96 relative rounded-lg overflow-hidden">
        <Image
          src="/kds/main/banner.jpg"
          fill
          alt="Experience Excellent Quality & Timely Delivery with Kreative Dezine Studio"
          className="object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-10 bg-black bg-opacity-40">
          <div className="flex flex-col justify-center items-center text-white text-xl lg:text-3xl px-10">
            <p className={clsx("text-center")}>
              Experience Excellent Quality & Timely Delivery with
            </p>
            <p className="text-center font-bold">Kreative Dezine Studio</p>
          </div>
          <button
            type="button"
            className="bg-gray-700 text-white rounded-lg px-4 py-2"
          >
            Book a consultation
          </button>
        </div>
      </div>
    </section>
  );
};
