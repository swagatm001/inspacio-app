"use client";

import { useState } from "react";
import { Contact } from "../Contact";
import { Modal } from "../Modal";

export const GetInTouch = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-black text-white font-semibold px-6 py-2 rounded-lg"
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
