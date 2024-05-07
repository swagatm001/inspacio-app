"use client";

import clsx from "clsx";
import { playfair } from "@/fonts/playfair";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const Contact = () => {
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
    <div className="py-10">
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
        <p className={clsx("text-3xl lg:text-5xl mb-10", playfair.className)}>
          Our friendly team would <br/> love to hear from you.
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
                Please click on the checkbox to agree to our privacy policy
              </small>
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white h-12 w-full rounded-lg"
          >
            {isLoading ? "Sending message, please wait..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
};
