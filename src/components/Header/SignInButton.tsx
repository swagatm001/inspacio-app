"use client";

import { useState } from "react";
import { Contact } from "../Contact";
import { Modal } from "../Modal";

export const SignInButton = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-gradient-to-r from-[#FDFDFD] to-[#FDFDFD] text-black font-normal px-6 py-2 rounded-lg border border-[#A4A4A4]"
        style={{ borderWidth: '0.75px' }}
        onClick={() => setOpen(true)}
      >
        {title}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="bg-white p-6 rounded-lg">
          <Contact />
        </div>
      </Modal>
    </div>
  );
};
