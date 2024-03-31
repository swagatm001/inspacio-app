import clsx from "clsx";
import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import { playfair } from "@/fonts/playfair";
import Image from "next/image";

const formGroupCSS = "w-full flex flex-col gap-2";
const inputCSS =
  "border border-gray-200 h-11 rounded-lg px-3 drop-shadow-sm focus:outline-none";

export const ContactForm = () => {
  return (
    <div className="py-10">
      <ImageLeftCopyRight
        wrapperClassName="gap-10"
        leftTemplate={
          <div className="mb-10">
            <Image src="/kds/main/contact-us.png" width={600} height={500} alt="contact us"  />
          </div>
        }
        rightTemplate={
          <div className="py-10">
            <div>
              <p className="text-4xl mb-3">Contact us</p>
              <p className={clsx("text-2xl mb-10", playfair.className)}>
                Our friendly team would love to hear from you.
              </p>
            </div>
            <form className="grid grid-cols-1 gap-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className={formGroupCSS}>
                  <label htmlFor="fname">First name</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="John"
                    className={clsx(inputCSS)}
                  />
                </div>
                <div className={formGroupCSS}>
                  <label htmlFor="lname">Last name</label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Doe"
                    className={clsx(inputCSS)}
                  />
                </div>
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className={clsx(inputCSS)}
                />
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  className={clsx(inputCSS)}
                />
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="message">Can you tell me what you need?</label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  className={clsx(inputCSS, "resize-none h-32 p-3")}
                ></textarea>
              </div>
              <div className="flex gap-3">
                <input id="policyCheck" type="checkbox" />
                <label htmlFor="policyCheck">
                  You agree to our friendly privacy policy.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white h-12 w-full rounded-lg"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
};
