import { partners } from "@/constants/partnerts";
import { processConstants } from "@/constants/process";
import { uuidv4 } from "@/utils/uuid4";
import Image from "next/image";
import { Sections } from "../Sections";
import clsx from "clsx";
import { playfair } from "@/fonts/playfair";

export const OurCreativeProcess = () => {
  return (
    <Sections title={processConstants.title}>
      <ul className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-10">
        {processConstants.steps.map((step) => (
          <li key={uuidv4()}>
            <div className="aspect-square relative">
              <Image
                src={step.imgUrl}
                alt={step.desc}
                fill
                className="object-contain"
              />
            </div>
            <div className="pt-6">
              <p className="text-base font-bold mb-2">{step.name}</p>
              <p className={clsx(playfair.className, "text-xl")}>{step.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Sections>
  );
};
