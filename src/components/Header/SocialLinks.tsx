import { headerConstants } from "@/constants/headers";
import { SocialLink } from "./SocialLink";

export const SocialLinks = () => {
  return (
    <div className="flex gap-5">
      {headerConstants.menu.socials.map((link, i) => (
        <SocialLink
          key={i}
          imageUrl={link.imageUrl}
          altText={link.label}
          href={link.href}
        />
      ))}
    </div>
  );
};
