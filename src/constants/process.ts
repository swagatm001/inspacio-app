export type ProcessPhase = "Design" | "Build";

export interface ProcessStep {
  stepTitle: string;
  /** First line is the lead sentence; the rest follows after a newline. */
  desc: string;
  imgUrl: string;
  /** Duration as shown to visitors, e.g. "1-2 weeks" or "1 week". Parsed for phase and total durations. */
  timeline: string;
  phase: ProcessPhase;
  /** What the client has at the end of the step. */
  outcome: string;
  /** Service tab this step belongs to (key of `services`). */
  service: string;
}

export const processConstants2: { title: string; steps: ProcessStep[] } = {
  title: "Creative Process",
  steps: [
    {
      stepTitle: "Free Consultation",
      desc: "Every journey begins with a conversation.\nWe start with a free consultation, a relaxed discussion where we understand your needs, style, and goals, while you get to know our process and approach.",
      imgUrl: "/images/filling-survey.svg",
      timeline: "1-2 weeks",
      phase: "Design",
      outcome: "A shared understanding of your needs, style and goals, and of how we work.",
      service: "Conceptualization & Design",
    },
    {
      stepTitle: "Site Visit",
      desc: "Our team visits the site to study its layout, natural light, and potential.\nThis helps us assess dimensions, constraints, and opportunities before design begins, setting the foundation for everything that follows.",
      imgUrl: "/images/business-trip.svg",
      timeline: "3-6 weeks",
      phase: "Design",
      outcome: "A measured study of your space: its dimensions, light, constraints and opportunities.",
      service: "Conceptualization & Design",
    },
    {
      stepTitle: "Design Concept",
      desc: "We translate your aspirations into design intent.\nThrough brainstorming, sketches, and moodboards, we define the look, feel, and flow of your space, setting the tone for the project ahead.",
      imgUrl: "/images/designer-color-palette.svg",
      timeline: "8-16 weeks",
      phase: "Design",
      outcome: "Sketches and mood boards that define the look, feel and flow of your space.",
      service: "Conceptualization & Design",
    },
    {
      stepTitle: "3D Renderings",
      desc: "Your ideas come to life visually.\nWe present realistic 3D models and walkthroughs to help you experience the design before execution, every texture, tone, and light detail considered.",
      imgUrl: "/images/designer-working.svg",
      timeline: "1 week",
      phase: "Design",
      outcome: "Realistic 3D models and walkthroughs of the design before any work starts.",
      service: "Conceptualization & Design",
    },
    {
      stepTitle: "Project Kick-Off",
      desc: "Once the design is finalized, we bring it to life.\nFrom structural coordination to decor detailing, our team manages every aspect, ensuring seamless progress from paper to reality.",
      imgUrl: "/images/pie-and-charts.svg",
      timeline: "1 week",
      phase: "Build",
      outcome: "A finalized design and a coordinated plan, from structure through to decor detailing.",
      service: "Detailing & Documentation",
    },
    {
      stepTitle: "Execution",
      desc: "This is where vision turns tangible.\nOur project management team oversees on-site work with precision, ensuring timelines, quality, and design integrity at every step.",
      imgUrl: "/images/lets-start.svg",
      timeline: "8-16 weeks",
      phase: "Build",
      outcome: "On-site work managed for timelines, quality and design integrity.",
      service: "Execution & Supervision",
    },
    {
      stepTitle: "Handover",
      desc: "The most rewarding moment, we hand over your completed space, ready to move in.\nEvery corner, finish, and fixture is checked to perfection, ensuring your new environment feels just as it was imagined.",
      imgUrl: "/images/business-deal.svg",
      timeline: "8-16 weeks",
      phase: "Build",
      outcome: "Your completed space, checked corner by corner and ready to move in.",
      service: "Execution & Supervision",
    },
  ],
};

/** "1-2 weeks" -> [1, 2]; "1 week" -> [1, 1]. Returns null when the text has no week count. */
export const parseWeeks = (timeline: string): [number, number] | null => {
  const match = timeline.match(/(\d+)(?:\s*-\s*(\d+))?\s*week/i);
  if (!match) return null;
  const min = Number(match[1]);
  const max = match[2] ? Number(match[2]) : min;
  return [min, max];
};

export const sumWeeks = (steps: ProcessStep[]): [number, number] =>
  steps.reduce<[number, number]>(
    (acc, step) => {
      const weeks = parseWeeks(step.timeline);
      return weeks ? [acc[0] + weeks[0], acc[1] + weeks[1]] : acc;
    },
    [0, 0]
  );

export const formatWeeks = ([min, max]: [number, number]) =>
  min === max ? `${min} ${min === 1 ? "week" : "weeks"}` : `${min} to ${max} weeks`;
