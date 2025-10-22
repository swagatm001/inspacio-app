export interface Service {
    title: string;
    paragraph: string;
    points: string[];
    imageUrl?: string;
    imageUrlMobile?: string;
}

interface ServiceList {
    [key: string]: Service;
}

export const services:ServiceList = {
    "Architectural Design": {
        title: "Architectural Design",
        paragraph: "At Inspacio Design, we offer a full spectrum of design services that combine innovation, functionality, and aesthetic excellence. Whether you're designing a new space or transforming an existing one, we provide end-to-end solutions that align with your vision and business goals.",
        points: [],
        imageUrl: "/images/architect.jpg",
        imageUrlMobile: "/images/architect_mobile.jpg"
    },
    "Interior Design": {
        title: "Interior Design",
        paragraph: "We craft interiors that are as functional as they are beautiful. Our expertise spans:",
        points: ["Office Interiors: Designing workspaces that foster productivity and collaboration through ergonomic planning, thoughtful layouts, and inspiring aesthetics.", "Commercial Interior Décor: Enhancing brand identity through curated décor, modern furnishings, and impactful spatial design in retail outlets, showrooms, and business environments.", "Hospitality & Recreation Spaces: Creating immersive guest experiences with luxurious, welcoming interiors for hotels, lounges, restaurants, and recreational facilities."],
        imageUrl: "/images/interior.jpg",
        imageUrlMobile: "/images/interior_mobile.jpg"
    },
    "Turnkey Solutions": {
        title: "Turnkey Solutions",
        paragraph: "From concept development to final execution, we offer complete project management across all sectors—ensuring timely delivery, quality control, and a stress-free experience for our clients.We handle every aspect, including planning, procurement, execution, and final handover, whether it's a corporate office, retail chain, or a boutique resort.",
        points: [],
        imageUrl: "/images/turnkey.jpg",
        imageUrlMobile: "/images/turnkey_mobile.jpg"
    },
}