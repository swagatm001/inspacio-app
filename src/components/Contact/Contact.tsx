"use client";

import clsx from "clsx";
import { playfair } from "@/fonts/playfair";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { satoshi } from "@/fonts/satoshi";

const formGroupCSS = "w-full flex flex-col gap-2";
const inputCSS =
  "border border-gray-200 h-11 rounded-lg px-3 drop-shadow-sm focus:outline-none";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

interface I_FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
  isPrivacyPolicyChecked: boolean;
}

const sendMail = (data = {}) => {
  return fetch(`/api/sendmail`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

interface ContactProps {
  removeDescription?: boolean;
}

export const Contact = ({ removeDescription }: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<I_FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<I_FormData> = async (data) => {
    setIsLoading(true);
    try {
      await sendMail(data);
      setIsLoading(false);
      toast.success(
        "Your query has been successfully registered with us. Stay tuned we will get back to you shortly."
      );
      reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong, please try again later");
    }
  };

  return (
    <div className="md:py-10">
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable={false}
      />
      <div>
        {!removeDescription && <p className={clsx("text-3xl lg:text-4xl mb-10 text-gray-500", playfair.className)}>
          Our friendly team would <br/> love to hear from you.
        </p>}
      </div>
      <div className="relative p-6">
        {/* Decorative corner-only border: four corner segments (horizontal + vertical) */}
        <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-2xl border-l-4 border-t-4 border-[#885739]" />
        <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-2xl border-r-4 border-t-4 border-[#885739]" />
        <span className="absolute left-0 bottom-0 h-20 w-20 rounded-bl-2xl border-b-4 border-l-4 border-[#885739]" />
        <span className="absolute right-0 bottom-0 h-20 w-20 rounded-br-2xl border-b-4 border-r-4 border-[#885739]" />

        <form
          className="grid grid-cols-1 gap-6 p-5 rounded bg-white border border-[#D9D9D9]"
          onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className={formGroupCSS}>
            <label htmlFor="fname" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>First name</label>
            <input
              id="fname"
              type="text"
              placeholder="Enter Your First Name"
              className={clsx(inputCSS, errors.fname && "border-red-500")}
              {...register("fname", { required: true })}
            />
          </div>
          <div className={formGroupCSS}>
            <label htmlFor="lname" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>Last name</label>
            <input
              id="lname"
              type="text"
              placeholder="Enter Your Last Name"
              className={clsx(inputCSS, errors.lname && "border-red-500")}
              {...register("lname", { required: true })}
            />
          </div>
        </div>
        <div className={formGroupCSS}>
          <label htmlFor="email" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className={clsx(inputCSS, errors.email && "border-red-500")}
            {...register("email", {
              required: true,
              pattern: emailRegex,
            })}
          />
        </div>
        <div className={formGroupCSS}>
          <label htmlFor="phone" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>Phone number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            className={clsx(inputCSS, errors.phone && "border-red-500")}
            {...register("phone", {
              required: true,
              pattern: phoneRegex,
            })}
          />
        </div>
        <div className={formGroupCSS}>
          <label htmlFor="message" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>Can you tell me what you need?</label>
          <textarea
            id="message"
            placeholder="Leave us a message..."
            className={clsx(
              inputCSS,
              "resize-none h-32 p-3",
              errors.message && "border-red-500"
            )}
            {...register("message", { required: true, minLength: 10 })}
          ></textarea>
        </div>
        <div>
          <div className="flex gap-3">
            <input
              id="policyCheck"
              type="checkbox"
              {...register("isPrivacyPolicyChecked", { required: true })}
            />
            <label htmlFor="policyCheck" className={clsx(satoshi.className,"font-medium text-lg text-[#1E1E1E]")}>
              You agree to our friendly privacy policy.{" "}
            </label>
          </div>
          {errors.isPrivacyPolicyChecked && (
            <div>
              <small className="text-red-500">
                Please click on the checkbox to agree to our privacy policy
              </small>
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#885739] text-white h-12 w-full rounded-lg"
          >
            {isLoading ? "Sending message, please wait..." : "Send message"}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};
