import Image from "next/image";
import Link from "next/link";
import { siteConstants, whatsappHref } from "@/constants/site";
import { WhatsAppIcon } from "../ui/Icons";

/** Instagram (all sizes) and WhatsApp (desktop only, when configured). Sits above the mobile action bar. */
export const FloatingActions = () => (
  <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-40 flex flex-col items-end gap-3">
    {whatsappHref && (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Inspacio on WhatsApp"
        className="hidden lg:flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#25D366] text-white drop-shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    )}
    <Link
      href={siteConstants.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Inspacio on Instagram"
      className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-brand-orange drop-shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50"
    >
      <Image src="/images/instagram-white.svg" alt="" width={26} height={26} className="drop-shadow-lg" />
    </Link>
  </div>
);

export default FloatingActions;
