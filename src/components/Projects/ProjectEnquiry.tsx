"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { sectors } from "@/constants/sectors";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface FormData {
  name: string;
  phone: string;
  email: string;
  sector: string;
  message: string;
}

interface ProjectEnquiryProps {
  projectTitle: string;
  defaultSector: string;
}

const field = "font-body w-full h-12 rounded-xl border border-brand-sand bg-white px-4 text-base text-brand-ink placeholder:text-brand-faint focus:outline-none focus:border-brand-brown";

/** Short enquiry form at the foot of a project page. Posts to the same lead endpoint as the contact form. */
export const ProjectEnquiry: React.FC<ProjectEnquiryProps> = ({ projectTitle, defaultSector }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ defaultValues: { sector: defaultSector } });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus("idle");
    const [fname, ...rest] = data.name.trim().split(/\s+/);
    const sectorName = sectors.find((s) => s.slug === data.sector)?.name ?? data.sector;
    const message = `Enquiry from the ${projectTitle} project page. Project type: ${sectorName}.${data.message ? ` ${data.message}` : ""}`;
    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname: rest.join(" ") || "-", email: data.email, phone: data.phone, message }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("sent");
      reset({ sector: defaultSector });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 md:px-24 py-14 md:py-20" aria-labelledby="enquiry-heading">
      <div className="max-w-6xl mx-auto rounded-3xl md:rounded-4xl bg-brand-ink text-white px-6 py-10 md:px-14 md:py-14 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionEyebrow number="" label="Start a conversation" light />
          <h2 id="enquiry-heading" className="font-heading text-3xl md:text-5xl font-light leading-[1.05] text-balance">
            Planning something similar?
          </h2>
          <p className="font-body text-base text-white/70 mt-4 max-w-md">
            Tell us a little about your space and we will come back within a working day. The first conversation is free.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enq-name" className="font-body text-xs uppercase tracking-[0.16em] text-white/60">Name</label>
            <input id="enq-name" type="text" autoComplete="name" placeholder="Your name" className={clsx(field, errors.name && "border-brand-orange")} {...register("name", { required: true })} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enq-phone" className="font-body text-xs uppercase tracking-[0.16em] text-white/60">Phone</label>
            <input id="enq-phone" type="tel" autoComplete="tel" placeholder="+91" className={clsx(field, errors.phone && "border-brand-orange")} {...register("phone", { required: true, pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/ })} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enq-email" className="font-body text-xs uppercase tracking-[0.16em] text-white/60">Email</label>
            <input id="enq-email" type="email" autoComplete="email" placeholder="you@example.com" className={clsx(field, errors.email && "border-brand-orange")} {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enq-sector" className="font-body text-xs uppercase tracking-[0.16em] text-white/60">Project type</label>
            <select id="enq-sector" className={clsx(field, "appearance-none")} {...register("sector")}>
              {sectors.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label htmlFor="enq-message" className="font-body text-xs uppercase tracking-[0.16em] text-white/60">Anything else (optional)</label>
            <textarea id="enq-message" rows={3} placeholder="Location, size, timeline…" className={clsx(field, "h-auto py-3 resize-none")} {...register("message")} />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} arrow>
              {isSubmitting ? "Sending" : "Send enquiry"}
            </Button>
            <p role="status" aria-live="polite" className="font-body text-sm text-white/70">
              {status === "sent" && "Thank you. We have your details and will be in touch shortly."}
              {status === "error" && "Something went wrong. Please try again or write to info@inspacio.in."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectEnquiry;
