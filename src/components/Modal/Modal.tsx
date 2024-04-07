import "react-responsive-modal/styles.css";
import { Modal as ReactModal } from "react-responsive-modal";
import React from "react";
import { Props } from "@/interfaces/Props";

interface I_Modal extends Props {
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<I_Modal> = ({ children, onClose, open }) => {
  return (
    <ReactModal
      center
      open={open}
      onClose={onClose}
      classNames={{ modal: "w-full m-0 p-0 bg-transparent shadow-none", closeButton: "rounded-full bg-gray-200 outline-none", root: "backdrop-blur" }}
    >
      <div className="p-6">{children}</div>
    </ReactModal>
  );
};
