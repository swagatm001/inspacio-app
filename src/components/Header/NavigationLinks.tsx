import { headerConstants } from "@/constants/headers";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

type NavigationLinksProps = {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
  isDropdownOpen?: boolean;
};

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  className,
  linkClassName = "text-brand-cream",
  onClick,
  isDropdownOpen,
}) => {
  return (
    <ul className={clsx("flex gap-5", className)}>
      {headerConstants.menu.links.map((link, i) => (
        <li key={link.href} className={clsx(isDropdownOpen && "animate-slide-up", `menu-item-${i}`)}>
          <Link
            href={link.href}
            onClick={onClick}
            className={clsx(linkClassName, "transition-opacity hover:opacity-75 focus:outline-none focus-visible:underline")}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
