"use client";
import React, { useState } from "react";
import { Contact } from "../Contact";
import { Modal } from "../Modal";
import { Button, ButtonVariant, ButtonSize } from "../ui/Button";

type ButtonProps = {
  title?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const BookFreeAppointment: React.FC<ButtonProps> = ({
  title = "Book a FREE Consultation",
  variant = "primary",
  size = "md",
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant={variant} size={size} arrow onClick={() => setOpen(true)} className={className}>
        {title}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="bg-white p-6 rounded-lg">
          <Contact />
        </div>
      </Modal>
    </div>
  );
};

export default BookFreeAppointment;
