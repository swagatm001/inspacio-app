import { playfair } from "@/fonts/playfair";
import { Props } from "@/interfaces/Props";
import clsx from "clsx";
import React from "react";

interface I_Sections extends Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Sections: React.FC<I_Sections> = ({
  children,
  title,
  subtitle,
  className,
}) => {
  return (
    <section className={clsx("py-10", className)}>
      <div className="text-gray-600">
        <p className={clsx(playfair.className, "text-2xl lg:text-4xl mb-2")}>
          {title}
        </p>
        {subtitle && (
          <p className={clsx(playfair.className, "text-3xl")}>{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};
