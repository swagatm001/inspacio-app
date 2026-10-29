/** Reviews from the studio's Google profile. The studio name in older reviews is updated to Inspacio Design; the wording is otherwise the reviewer's own. */
export type Testimonial = {
    id: number;
    rating: number;
    name: string;
    content: string;
    /** Kind of project the review describes, used to surface relevant reviews on project pages. */
    projectType?: "Residential" | "Commercial";
};

export const testimonialsData: Array<Testimonial> = [
  {
    id: 1,
    projectType: "Commercial",
    name: 'Ritesh Soni',
    rating: 5,
    content: `They are a set of professional interior team; young, energetic and motivated. I’ve worked with them for an office renovation project of large scale and they delivered quality on time. Throughout the journey, they were responsive to changing requirements and provided their guidance on what would fit and suit better.

    Would highly recommend this team if you want to be stress free with interior works.`,
  },
  {
    id: 2,
    projectType: "Commercial",
    name: 'Sushma Mundargi',
    rating: 4,
    content: `Sangeeta and Swati are a great team to work with… Undertaking a renovation project at work place can be daunting and time consuming but Keative team was able to comprehend our vision. They worked closely with multiple stakeholders to ensure that the project is aligned with our preferences and expectations.`,
  },
  {
    id:3,
    projectType: "Residential",
    name: "Abishek D Mavinkurve",
    rating: 5,
    content: `When we were on a look out for our pent house home interiors, we came across Inspacio Design. The entire process of design and it's execution has been very well planned by Ms. Swati and Ms. Sangeeta. A large 4500 sqft of interiors was completed in less than 60 days. We are extremely happy with the quality and their minute detailing in the overall finishes. I would highly recommend Inspacio Design and a big thank you for making our dream home in to reality. I would also wish Swati and Sangeeta good luck in all their future projects.`,
  },
  {
    id: 4,
    projectType: "Residential",
    name: "Sarthak Rout",
    rating: 5,
    content: `I am quite amazed by the quality of consultation and services provided. Up-to-date with all latest creations and awesome designs are their hallmarks. The attitude of the staff and the management is very polite and cordial towards the customers. Highly recommended!!
    Services taken : Full 3 bhk interiors for apartment at indira nagar.`,
  },
  {
    id: 5,
    projectType: "Residential",
    name: "Tanaya Bhattacharya",
    rating: 5,
    content: `We renovated our home interiors with Kreative in June. All through the discussion / design / execution and support provided by the team was very good. Overall fully satisfied with the finished output quality.`,
  },
  {
    id: 6,
    name: "sammanita pradhan",
    rating: 5,
    content: `Great designs, great team, great work 👍`,
  }
];