import { Props } from "@/interfaces/Props";
import clsx from "clsx";
import React from "react";

export const End2EndWrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx("w-full", className)}>{children}</div>;
};
