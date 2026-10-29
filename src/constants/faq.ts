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
    question: "Can I see the design before work starts?",
    answer: "Yes. Before execution we present realistic 3D models and walkthroughs so you can experience the design in advance, with every texture, tone and lighting detail considered.",
  },
  {
    question: "Are there any hidden costs?",
    answer: "No. We believe great design comes with great trust: no hidden costs and no surprises, just complete clarity at every stage. Commercials are confirmed before work begins.",
  },
  {
    question: "Who manages the work on site?",
    answer: "Our own project management team oversees the on-site work, coordinates vendors and contractors, and checks quality against the design at every step through to handover.",
  },
  {
    question: "Do you design the architecture as well as the interiors?",
    answer: "Yes. We take on architecture design, interior design and turnkey execution, so one team can carry a project from planning through to the finished space.",
  },
  {
    question: "How do I get started?",
    answer: "Book a consultation, our interior designers from Bangalore will guide you based on your space and needs.",
  },
];
