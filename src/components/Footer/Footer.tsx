import { footerConstants } from "@/constants/footer";
import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import { SocialLinks } from "../Header/SocialLinks";

export const Footer = () => {
  return (
    <footer>
      <div className="border-y border-gray-200 pt-10 pb-10">
        <ImageLeftCopyRight
          leftTemplate={
            <div>
              <p
                className={clsx(
                  "lg:hidden text-5xl leading-tight w-9/12",
                  playfair.className
                )}
              >
                {footerConstants.left.text1}
              </p>
              <p
                className={clsx(
                  "hidden lg:block text-5xl leading-tight w-9/12",
                  playfair.className
                )}
              >
                {footerConstants.left.text2}
              </p>
              <p className={clsx("text-5xl lg:font-bold mt-6 leading-tight")}>
                {footerConstants.left.text3}
              </p>
            </div>
          }
          rightTemplate={
            <div className="pt-10 lg:pt-0 flex flex-col gap-10">
              <div>
                <p className={clsx("text-2xl", playfair.className)}>
                  {footerConstants.right.address.place}
                </p>
                <p className="pr-20 text-sm leading-normal w-9/12 lg:w-1/2">
                  {footerConstants.right.address.details}
                </p>
              </div>
              <div>
                <p>Email us at</p>
                <a href={`mailto:${footerConstants.right.email}`}>{footerConstants.right.email}</a>
              </div>
              <div>
                <p>If you&apos;re hurry, quick call for us</p>
                <a href={`tel:${footerConstants.right.phone}`}>{footerConstants.right.phone}</a>
              </div>
            </div>
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-10">
        <div>
          <p>{footerConstants.copyright}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-500">CONNECT</p>
          <div className="h-0.5 w-16 bg-gray-400 mx-4" />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
