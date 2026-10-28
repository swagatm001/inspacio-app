export interface Service {
    title: string;
    paragraph: string[];
    points: string[];
    /** Small illustration used on the homepage cards. */
    imageUrl?: string;
    imageUrlMobile?: string;
    /** Position in the studio's process, e.g. "Stage 01" or "Every stage". */
    stage?: string;
    /** Who this service suits, shown as a short callout. */
    bestFor?: string;
    /** Step titles from processConstants2 that belong to this service. */
    processSteps?: string[];
    /** Project slugs whose photos illustrate this service (first one is the large tile). */
    relatedProjects?: string[];
    /** For the overview tab: one project slug per sector in `points`, in the same order. */
    sectorProjects?: string[];
}

interface ServiceList {
    [key: string]: Service;
}

export const services: ServiceList = {
    "Our Expertise": {
        title: "Our Expertise",
        paragraph: [
            "We design across scales and sectors, creating spaces that are as functional as they are beautiful.",
            "Every project begins with a clear understanding of purpose, aesthetics, and emotion, shaping environments that truly reflect their people.",
            "Our approach combines design intelligence, material sensitivity, and craftsmanship to deliver timeless results.",
        ],
        points: [
            "Residential Design",
            "Commercial Design",
            "Retail & Hospitality",
            "Landscape & Outdoor",
        ],
        sectorProjects: ["penthouse", "brita", "bunsik", "prestige-golfshire"],
        imageUrl: "/images/Our-Expertise.svg",
        imageUrlMobile: "/images/Our-Expertise.svg",
    },
    "Conceptualization & Design": {
        title: "Conceptualization & Design",
        stage: "Stage 01",
        paragraph: [
            "Every project begins with a vision, and our role is to give it form and feeling.",
            "We listen, explore, and translate your aspirations into thoughtful concepts that define the tone and personality of your space.",
            "Each idea evolves through creativity, collaboration, and precision, ensuring design becomes an expression of who you are.",
        ],
        bestFor: "Starting a new home or office from scratch, or giving an existing space a clear new direction before any work begins.",
        points: [
            "Space planning & feasibility studies",
            "Theme creation & mood boards",
            "3D visualizations & walkthroughs",
        ],
        processSteps: ["Free Consultation", "Site Visit", "Design Concept", "3D Renderings"],
        relatedProjects: ["brita", "anthology"],
        imageUrl: "/images/Conceptualization&Design.svg",
        imageUrlMobile: "/images/Conceptualization&Design.svg",
    },
    "Detailing & Documentation": {
        title: "Detailing & Documentation",
        stage: "Stage 02",
        paragraph: [
            "Our team prepares detailed drawings and specifications that ensure every idea is executed exactly as envisioned.",
            "This is where creativity meets technical mastery, translating concepts into construction.",
            "Every document, drawing, and specification is crafted with accuracy to maintain quality and design integrity at every step.",
        ],
        bestFor: "Turning an approved concept into a drawing set and specifications that contractors can build from without guesswork.",
        points: [
            "Civil, furniture, MEP, ceiling & lighting drawings",
            "BOQs & specifications",
            "Material palette & procurement support",
        ],
        processSteps: ["3D Renderings", "Project Kick-Off"],
        relatedProjects: ["cedar-string", "texport"],
        imageUrl: "/images/Detailing&Documentation.svg",
        imageUrlMobile: "/images/Detailing&Documentation.svg",
    },
    "Execution & Supervision": {
        title: "Execution & Supervision",
        stage: "Stage 03",
        paragraph: [
            "Design meets reality through disciplined execution and constant quality checks.",
            "We oversee every stage of on-site progress, ensuring that craftsmanship and timelines align with our design intent.",
            "Our hands-on supervision guarantees consistency, precision, and a finished space that matches the vision in every detail.",
        ],
        bestFor: "Owners who want one accountable team on site, from the first day of work through to the handover.",
        points: [
            "Project management & quality supervision",
            "Vendor & contractor coordination",
            "On-site execution with timely delivery",
        ],
        processSteps: ["Project Kick-Off", "Execution", "Handover"],
        relatedProjects: ["bunsik", "citadel"],
        imageUrl: "/images/Execution&Supervision.svg",
        imageUrlMobile: "/images/Execution&Supervision.svg",
    },
    "Sustainable Design": {
        title: "Sustainable Design",
        stage: "Every stage",
        paragraph: [
            "From material selection to energy use, we design consciously to create spaces that are efficient, enduring, and environmentally responsible.",
            "Each decision is guided by balance, longevity, and mindfulness, proving that luxury and sustainability can coexist beautifully.",
            "Our goal is to build spaces that not only inspire but also nurture the world around them.",
        ],
        bestFor: "Anyone who wants a space that is efficient to run and gentle on its surroundings, without compromising on finish.",
        points: [
            "Eco-conscious Materials",
            "Energy-efficient Solutions",
            "Responsible Spaces",
        ],
        processSteps: ["Design Concept", "Project Kick-Off", "Execution"],
        relatedProjects: ["prestige-golfshire", "brita"],
        imageUrl: "/images/Sustainable-Design.svg",
        imageUrlMobile: "/images/Sustainable-Design.svg",
    },
};
