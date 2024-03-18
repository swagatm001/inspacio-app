import React from "react";
import { Props } from "@/interfaces/Props";

export const Navigation: React.FC<Props> = ({ className, children }) => {
  return (
    <nav
      className={`flex items-center justify-between gap-10 ${className}`}
    >
      {children}
    </nav>
  );
};
