import { processConstants2, sumWeeks, formatWeeks } from "./process";

export interface Faq {
  question: string;
  answer: string;
}

const projectDuration = formatWeeks(sumWeeks(processConstants2.steps));

export const faqs: Faq[] = [
  {
    question: "What kind of projects does Inspacio take up?",
    answer: "We handle architecture design, interior design, and turnkey projects for homes, offices, and commercial spaces.",
  },
  {
    question: "Do you work across Bangalore?",
    answer: "Yes. As an interior designer in Bangalore, we take projects citywide. Many clients find us searching for an interior designer near me.",
  },
  {
    question: "How much does an interior project usually cost?",
    answer: "Costs vary by size and materials. We offer options that suit different budgets, including clients looking for affordable interior designers in Bangalore.",
  },
  {
    question: "Do you offer both design and execution?",
    answer: "Yes. We’re a full interior company providing concept, drawings, materials, civil work, MEP, carpentry, finishes, and final styling, a complete turnkey solution under one roof.",
  },
  {
    question: "How long does a project take?",
    answer: `It depends on the size of the space and the scope of work. Our seven-step process, from the first conversation to handover, typically takes ${projectDuration}. We share a timeline for your project after the site visit.`,
  },
  {
    question: "What happens in the free consultation?",
    answer: "A relaxed conversation where we understand your needs, style, and goals, and you get to know our process and approach. There is no cost and no commitment.",
  },
  {
    question: "How do I get started?",
    answer: "Book a consultation, our interior designers from Bangalore will guide you based on your space and needs.",
  },
];
