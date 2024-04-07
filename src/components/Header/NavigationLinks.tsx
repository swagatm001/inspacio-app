import { headerConstants } from "@/constants/headers";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

export const NavigationLinks: React.FC<{ className?: string, onClick?: () => void }> = ({
  className,
  onClick
}) => {
  return (
    <ul className={clsx("flex gap-8", className)}>
      {headerConstants.menu.links.map((link, i) => (
        <li key={i}>
          <Link href={link.href} className="" onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
