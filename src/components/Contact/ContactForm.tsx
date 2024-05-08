import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import Image from "next/image";
import { Contact } from ".";

export const ContactForm = () => {
  return (
    <div className="md:py-10">
      <ImageLeftCopyRight
        wrapperClassName="gap-10"
        leftTemplate={
          <div className="w-full h-full pr-20">
            <div className="w-full h-full mb-10 flex relative">
              <Image
                src="/kds/main/contact-us.png"
                fill
                alt="contact us"
                className="object-cover"
              />
            </div>
          </div>
        }
        rightTemplate={<Contact />}
      />
    </div>
  );
};
