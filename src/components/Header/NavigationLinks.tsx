import { headerConstants } from "@/constants/headers";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

export const NavigationLinks: React.FC<{ className?: string, onClick?: () => void, isDropdownOpen?: boolean }> = ({
  className,
  onClick,
  isDropdownOpen
}) => {
  return (
    <ul className={clsx("flex gap-5", className)}>
      {headerConstants.menu.links.map((link, i) => (
        <li key={i} className={clsx(isDropdownOpen && "animate-slide-up", `menu-item-${i}`)}>
          <Link href={link.href} className="text-white" onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
