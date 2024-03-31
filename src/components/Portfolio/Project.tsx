import { T_Options } from "@/interfaces/Types";
import Image from "next/image";
import React from "react";

export interface I_Project {
  title: string
  images: Array<string>
  subTitle?: string
  description?: string
  address?: string
  category: T_Options
}

export const Project:React.FC<I_Project> = ({title, images, subTitle, address}) => {
  return (
    <div className="w-full">
      <div className="aspect-video bg-gray-200">
        <Image src="" alt="" />
      </div>
      <div className="mt-4">
        <p>{title}</p>
        <p>Tin factory, Banaglore</p>
      </div>
    </div>
  );
};
