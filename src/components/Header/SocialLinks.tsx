import { headerConstants } from "@/constants/headers";
import { SocialLink } from "./SocialLink";


type SocialLinksProps = {
  light?: boolean;
  removeBorder?: boolean;
}
export const SocialLinks:React.FC<SocialLinksProps> = ({light,removeBorder}) => {
  return (
    <div className="flex gap-5">
      {headerConstants.menu.socials.map((link, i) => (
        <SocialLink
          key={i}
          imageUrl={light ? link.imageUrlLight : link.imageUrl}
          altText={link.label}
          href={link.href}
          removeBorder={removeBorder}
        />
      ))}
    </div>
  );
};
