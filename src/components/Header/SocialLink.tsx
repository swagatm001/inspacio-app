import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface I_SocialLink {
  imageUrl: string;
  altText: string;
  href: string;
  removeBorder?: boolean;
}

export const SocialLink: React.FC<I_SocialLink> = ({
  imageUrl,
  altText,
  href,
  removeBorder
}) => {
  return (
    <a href={href} target="_blank">
      <div className={clsx("w-10 h-10 rounded-full border border-black cursor-pointer flex items-center justify-center",removeBorder && "border-none")}>
        <Image width={20} height={20} src={imageUrl} alt={altText} />
      </div>
    </a>
  );
};
