import { Props } from "@/interfaces/Props";
import { clsx } from "clsx";
import React from "react";

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx("container mx-auto px-4 sm:px-6 lg:px-20", className)}>{children}</div>;
};
