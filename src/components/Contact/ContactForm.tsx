"use client";

import clsx from "clsx";
import { ImageLeftCopyRight } from "../ImageLeftCopyRight";
import { playfair } from "@/fonts/playfair";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

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

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<I_FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<I_FormData> = async (data) => {
    setIsLoading(true);
    try {
      await sendMail(data);
      setIsLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="py-10">
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
        rightTemplate={
          <div className="py-10">
            <div>
              <p className="text-4xl mb-3">Contact us</p>
              <p className={clsx("text-2xl mb-10", playfair.className)}>
                Our friendly team would love to hear from you.
              </p>
            </div>
            <form
              className="grid grid-cols-1 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className={formGroupCSS}>
                  <label htmlFor="fname">First name</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="John"
                    className={clsx(inputCSS, errors.fname && "border-red-500")}
                    {...register("fname", { required: true })}
                  />
                </div>
                <div className={formGroupCSS}>
                  <label htmlFor="lname">Last name</label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Doe"
                    className={clsx(inputCSS, errors.lname && "border-red-500")}
                    {...register("lname", { required: true })}
                  />
                </div>
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className={clsx(inputCSS, errors.email && "border-red-500")}
                  {...register("email", {
                    required: true,
                    pattern: emailRegex,
                  })}
                />
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  className={clsx(inputCSS, errors.phone && "border-red-500")}
                  {...register("phone", {
                    required: true,
                    pattern: phoneRegex,
                  })}
                />
              </div>
              <div className={formGroupCSS}>
                <label htmlFor="message">Can you tell me what you need?</label>
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
                  <label htmlFor="policyCheck">
                    You agree to our friendly privacy policy.{" "}
                  </label>
                </div>
                {errors.isPrivacyPolicyChecked && (
                  <div>
                    <small className="text-red-500">
                      Please click on the checkbox to agree to our privacy
                      policy
                    </small>
                  </div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white h-12 w-full rounded-lg"
                >
                  {isLoading
                    ? "Sending message, please wait..."
                    : "Send message"}
                </button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
};
