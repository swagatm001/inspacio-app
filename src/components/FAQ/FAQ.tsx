"use client";

import { faqsConstants } from "@/constants/faq";
import { playfair } from "@/fonts/playfair";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
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
        <p className="font-semibold">{question}</p>
        <button type="button" onClick={toggle}>
          +
        </button>
      </div>
      <AnimatePresence>
        {showAnswer && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4"
          >
            {question}
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
        <p className="text-4xl mb-2">Frequently asked questions</p>
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
