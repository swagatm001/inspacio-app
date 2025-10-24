"use client";

import { faqsConstantsV2 } from "@/constants/faq";
import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Sections } from "../Sections";
import { montserrat } from "@/fonts/montserrat";
import { satoshi } from "@/fonts/satoshi";

interface I_Question {
  isLast: boolean;
  question: string;
  answer: string;
}

const Question: React.FC<I_Question> = ({ isLast, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggle = () => setShowAnswer((x) => !x);

  return (
    <div className={clsx("p-10 border-2 rounded-xl mb-10", isLast && "m-0")}>
      <div className="flex justify-between items-center">
        <p className={clsx(satoshi.className,"font-medium text-2xl w-10/12", showAnswer ? "text-[#3D3834]" : "text-[#696969]")}>{question}</p>
        <button type="button" onClick={toggle}>
          <Image
            src={showAnswer ? "/kds/main/minus.png" : "/kds/main/plus.png"}
            width={20}
            height={20}
            alt="toggle button"
          />
        </button>
      </div>
      <AnimatePresence>
        {showAnswer && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx(satoshi.className,"mt-4 text-lg")}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <Sections title="">
        <div className="flex flex-col lg:flex-row">
            <p className={clsx(montserrat.className,"font-medium flex-1 text-2xl lg:text-8xl mt-10 sm:m-auto lg:m-0 sm:mb-5")}>FAQs</p>
            <div className="flex-1">
                {faqsConstantsV2.map((faq, i) => (
                <Question
                    key={i}
                    isLast={i !== faqsConstantsV2.length - 1}
                    question={faq.question}
                    answer={faq.answer}
                />
                ))}
            </div>
        </div>
    </Sections>
  );
};
