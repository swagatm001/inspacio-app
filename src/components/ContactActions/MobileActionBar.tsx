"use client";

import React, { useState } from "react";
import { siteConstants, whatsappHref } from "@/constants/site";
import { Button } from "../ui/Button";
import { CalendarIcon, MailIcon, WhatsAppIcon } from "../ui/Icons";
import { Modal } from "../Modal";
import { Contact } from "../Contact";

/** Sticky bottom bar on phones and tablets with the two actions that matter most. */
export const MobileActionBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-cream/95 backdrop-blur-md border-t border-brand-sand pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-3 p-3">
          {whatsappHref ? (
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<WhatsAppIcon className="w-5 h-5 text-[#25D366]" />}>
              WhatsApp us
            </Button>
          ) : (
            <Button href={`mailto:${siteConstants.email}`} variant="secondary" icon={<MailIcon />}>
              Email us
            </Button>
          )}
          <Button variant="primary" onClick={() => setOpen(true)} icon={<CalendarIcon />}>
            Book a consultation
          </Button>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="bg-white p-6 rounded-lg">
          <Contact />
        </div>
      </Modal>
    </>
  );
};

export default MobileActionBar;
