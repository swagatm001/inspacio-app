"use client";

import { faqsConstants } from "@/constants/faq";
import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface I_Question {
  isLast: boolean;
  question: string;
  answer: string;
}

const Question: React.FC<I_Question> = ({ isLast, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggle = () => setShowAnswer((x) => !x);

  return (
    <div className={clsx("py-10", isLast && "border-b")}>
      <div className="flex justify-between items-center">
        <p className="font-semibold w-10/12">{question}</p>
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
            className="mt-4 text-gray-500"
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
    <div className="py-10">
      <div className="text-gray-600">
        <p className="text-2xl lg:text-4xl mb-2">Frequently asked questions</p>
        <p className={clsx(playfair.className, "text-3xl")}>
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div>
        {faqsConstants.map((faq, i) => (
          <Question
            key={i}
            isLast={i !== faqsConstants.length - 1}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};
