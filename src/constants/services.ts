export interface Service {
    title: string;
    paragraph: string[];
    points: string[];
    imageUrl?: string;
    imageUrlMobile?: string;
}

interface ServiceList {
    [key: string]: Service;
}

export const services:ServiceList = {
    "Our Expertise": {
        title: "Our Expertise",
        paragraph: [
            "We design across scales and sectors, creating spaces that are as functional as they are beautiful.","Every project begins with a clear understanding of purpose, aesthetics, and emotion, shaping environments that truly reflect their people",
            "Every project begins with a clear understanding of purpose, aesthetics, and emotion, shaping environments that truly reflect their people",
            "Our approach combines design intelligence, material sensitivity, and craftsmanship to deliver timeless results."
        ],
        points: [
            "Residential Design",
            "Commercial Design",
            "Retail & Hospitality",
            "Landscape & Outdoor"
        ],
        imageUrl: "/images/Our-Expertise.jpg",
        imageUrlMobile: "/images/Our-Expertise.jpg"
    },
    "Conceptualization & Design": {
        title: "Conceptualization & Design",
        paragraph: [
            "Every project begins with a vision, and our role is to give it form and feeling.",
            "We listen, explore, and translate your aspirations into thoughtful concepts that define the tone and personality of your space.",
            "Each idea evolves through creativity, collaboration, and precision,  ensuring design becomes an expression of who you are.",
            "Includes:"
        ],
        points: [
            "Space planning & feasibility studies",
            "Theme creation & mood boards",
            "3D visualizations & walkthroughs"
        ],
        imageUrl: "/images/Conceptualization&Design.jpg",
        imageUrlMobile: "/images/Conceptualization&Design.jpg"
    },
    "Detailing & Documentation": {
        title: "Detailing & Documentation",
        paragraph: [
            "Our team prepares detailed drawings and specifications that ensure every idea is executed exactly as envisioned.",
            "This is where creativity meets technical mastery,  translating concepts into construction.",
            "Every document, drawing, and specification is crafted with accuracy to maintain quality and design integrity at every step.",
            "Includes:"
        ],
        points: [
            "Civil, furniture, MEP, ceiling & lighting drawings",
            "BOQs & specifications",
            "Material palette & procurement support"
        ],
        imageUrl: "/images/Detailing&Documentation.jpg",
        imageUrlMobile: "/images/Detailing&Documentation.jpg"
    },
    "Execution & Supervision": {
        title: "Execution & Supervision",
        paragraph: [
            "Design meets reality through disciplined execution and constant quality checks.",
            "We oversee every stage of on-site progress, ensuring that craftsmanship and timelines align with our design intent.",
            "Our hands-on supervision guarantees consistency, precision, and a finished space that matches the vision in every detail.",
            "Includes:"
        ],
        points: [
            "Project management & quality supervision",
            "Vendor & contractor coordination",
            "On-site execution with timely delivery"
        ],
        imageUrl: "/images/Execution&Supervision.jpg",
        imageUrlMobile: "/images/Execution&Supervision.jpg"
    },
    "Sustainable Design": {
        title: "Sustainable Design",
        paragraph: [
            "From material selection to energy use, we design consciously to create spaces that are efficient, enduring, and environmentally responsible",
            "Each decision is guided by balance, longevity, and mindfulness,  proving that luxury and sustainability can coexist beautifully.",
            "Our goal is to build spaces that not only inspire but also nurture the world around them.",
            "Includes:"
        ],
        points: [
            "Eco-conscious Materials",
            "Energy-efficient Solutions",
            "Responsible Spaces"
        ],
        imageUrl: "/images/Sustainable-Design.jpg",
        imageUrlMobile: "/images/Sustainable-Design.jpg"
    },
}