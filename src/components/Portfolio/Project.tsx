import { T_Options } from "@/interfaces/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface I_Project {
  title: string
  thumbnail: string
  category: T_Options
  slug: string
  address: string
  description?: string
  image?: string[]
}

export const Project:React.FC<I_Project> = ({title, thumbnail, address, slug}) => {

  return (
    <Link href={slug}>
    <div className="w-full cursor-pointer">
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        <Image src={thumbnail as string} alt="project image" fill className="object-cover transition duration-[3000ms] hover:scale-150" />
      </div>
      <div className="mt-4">
        <p className="underline block mb-2">{title}</p>
        <p className="text-gray-400">{address}</p>
      </div>
    </div>
    </Link>
  );
};
