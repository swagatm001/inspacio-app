export interface Service {
    title: string;
    paragraph: string;
    points: string[];
    imageUrl?: string;
}

interface ServiceList {
    [key: string]: Service;
}

export const services:ServiceList = {
    "Architectural Design": {
        title: "Architectural Design",
        paragraph: "We provide top-notch architectural design services that blend creativity with functionality to bring your vision to life.",
        points: ["point 1", "point 2", "point 3"],
        imageUrl: "/images/architect.jpg"
    },
    "Interior Design": {
        title: "Interior Design",
        paragraph: "Our interior design services focus on creating beautiful and functional spaces that reflect your personal style and needs.",
        points: ["point 1", "point 2", "point 3"],
        imageUrl: "/images/interior.jpg"
    },
    "Turnkey Solutions": {
        title: "Turnkey Solutions",
        paragraph: "We offer comprehensive turnkey solutions that manage every aspect of your project from concept to completion, ensuring a seamless experience.",
        points: ["point 1", "point 2", "point 3"],
        imageUrl: "/images/turnkey.jpg"
    },
}