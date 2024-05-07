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
                  "text-5xl leading-tight font-light w-9/12 text-gray-500",
                  playfair.className
                )}
              >
                {footerConstants.left.text1}
              </p>
              <p
                className={clsx(
                  "text-5xl leading-tight font-light w-9/12 text-gray-500",
                  playfair.className
                )}
              >
                {footerConstants.left.text2}
              </p>
              <p
                className={clsx(
                  "text-6xl lg:font-bold mt-6 leading-tight",
                  playfair.className
                )}
              >
                {footerConstants.left.text3}
              </p>
            </div>
          }
          rightTemplate={
            <div className="w-full flex md:justify-end">
              <div className="md:w-1/2 md:pl-6 pt-10 lg:pt-0 flex flex-col gap-10">
                <div>
                  <p className={clsx("text-2xl text-gray-500")}>
                    {footerConstants.right.address.place}
                  </p>
                  <p className="pr-20 text-sm leading-normal">
                    {footerConstants.right.address.details}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Email us at</p>
                  <a
                    href={`mailto:${footerConstants.right.email}`}
                    className="text-2xl hover:underline"
                  >
                    {footerConstants.right.email}
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500">
                    If you&apos;re hurry, quick call for us
                  </p>
                  <a
                    href={`tel:${footerConstants.right.phone1}`}
                    className="text-2xl hover:underline"
                  >
                    {footerConstants.right.phone1}
                  </a>
                  <a
                    href={`tel:${footerConstants.right.phone2}`}
                    className="text-2xl hover:underline"
                  >
                    {footerConstants.right.phone2}
                  </a>
                </div>
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
