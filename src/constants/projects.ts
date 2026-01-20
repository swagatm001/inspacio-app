export const projectConstants = {
  hero: {
    text: `<span class="leading-normal">Transforming <strong>Spaces,</strong></span> <br/> <span class="leading-normal">Capturing <strong>Dreams</strong></span><br/>
        <span class="leading-normal">Explore Our Stunning <strong>Projects.</strong></span>`,
  },
};

export const categoriesConstants = [
  {
    label: "Commercial",
    value: "commercial",
  },
  {
    label: "Residential",
    value: "residential",
  },
];

export interface Section {
  title: string;
  intro?: string[];
  moreText?: {
    title: string;
    points: string[];
    finishLine?: string;
  }
  images?: string[];
}

export interface Project {
  slug: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  image: string[];
  description: string;
  sections?: Section[];
  address: string;
  location?: string;
  category: {
    label: string;
    value: string;
  };
  type: string;
  attributes?: {
    label: string;
    value: string;
  }[];
  year: number;
}

const anthology: Project = {
  thumbnail: "/images/anthology/Anthology-13.webp",
  title: "Anthology",
  subtitle: "A contemporary corporate workspace designed to feel open, inclusive, and future-ready.",
  slug: "anthology",
  year: 2025,
  image: [
    "/images/anthology/1000053858.webp",
    "/images/anthology/1000053862.webp",
    "/images/anthology/1000053876.webp",
    "/images/anthology/1689261367923.webp",
    "/images/anthology/1689261367938.webp",
    "/images/anthology/1689261367987.webp",
    "/images/anthology/1689261368023.webp",
    "/images/anthology/1689261368113.webp",
    "/images/anthology/1689261368133.webp",
    "/images/anthology/1689261368148.webp",
    "/images/anthology/1689261368198.webp",
    "/images/anthology/1689261368215.webp",
    "/images/anthology/1689261368245.webp",
    "/images/anthology/1689261368261.webp",
    "/images/anthology/1689261368320.webp",
    "/images/anthology/1689261405538.webp",
    "/images/anthology/1691558965806.webp",
    "/images/anthology/1691558965827.webp",
    "/images/anthology/1691558965882.webp",
    "/images/anthology/1691558965937.webp",
    "/images/anthology/Anthology-02.webp",
    "/images/anthology/Anthology-03.webp",
    "/images/anthology/Anthology-04.webp",
    "/images/anthology/Anthology-05.webp",
    "/images/anthology/Anthology-13.webp",
    "/images/anthology/board-room.webp"
  ],
  description: `Corporate office design today must support inclusivity, collaboration, and adaptability while embracing technology and sustainability. It should feel open, intelligent, and people-centric. For Anthology, the intent was to create a modern workspace that reflects its global outlook and progressive values. The result is a light-filled, thoughtfully planned office that feels spacious, efficient, and engaging.`,
  sections: [
    {
      title: "The Concept Note",
      images: [
        "/images/anthology/1000053858.webp",
        "/images/anthology/1000053862.webp",
        "/images/anthology/1000053876.webp",
        "/images/anthology/1689261367923.webp",
        "/images/anthology/1689261367938.webp",
        "/images/anthology/1689261367987.webp",
        "/images/anthology/1689261368023.webp",
        "/images/anthology/1689261368113.webp",
        "/images/anthology/1689261368133.webp",
        "/images/anthology/1689261368148.webp",
      ],
      intro: [
        "Anthology required the design of a contemporary corporate workspace aligned with its values of inclusivity, authenticity, and professional growth.",
        "The brief called for a smart, technology-driven office that balances aesthetics with functionality.",
        "The challenge was to create a workspace that feels open and expansive while optimising energy use and spatial efficiency."
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on openness, strategic planning, and natural light.",
        "Extensive design development through sketches, 3D models, and renderings helped visualise and refine the space before execution.",
        "Structural glazing and views of the surrounding context were leveraged to enhance brightness and spatial perception."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Strategic space planning for workspaces, meeting rooms, and collaboration zones",
          "Maximising natural light through structural glazing",
          "Reducing reliance on artificial lighting and air conditioning",
          "A welcoming reception to establish openness",
          "Warm colour palettes and layered lighting in lounge and meeting areas"
        ],
        finishLine: "Each element was designed to balance efficiency with visual warmth and character."
      },
      images: [
        "/images/anthology/1689261368198.webp",
        "/images/anthology/1689261368215.webp",
        "/images/anthology/1689261368245.webp",
        "/images/anthology/1689261368261.webp",
        "/images/anthology/1689261368320.webp",
        "/images/anthology/1689261405538.webp",
        "/images/anthology/1691558965806.webp",
        "/images/anthology/1691558965827.webp",
        "/images/anthology/1691558965882.webp",
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed workspace feels open, modern, and inclusive.",
        "Natural light, smart planning, and thoughtful detailing create a comfortable and energy-efficient work environment.",
        "Anthology now operates from a contemporary office that reflects its global mindset — a workspace designed to support collaboration, growth, and everyday well-being."
      ],
      images: [
        "/images/anthology/1691558965937.webp",
        "/images/anthology/Anthology-02.webp",
        "/images/anthology/Anthology-03.webp",
        "/images/anthology/Anthology-04.webp",
        "/images/anthology/Anthology-05.webp",
        "/images/anthology/Anthology-13.webp",
        "/images/anthology/board-room.webp"
      ]
    }
  ],
  address: `Manayata Tech Park, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Commercial",
    value: "commercial",
  },
  type: `Commercial`,
  attributes: [
    {
      label: "Style",
      value: "Corporate",
    },
    {
      label: "Service",
      value: "Workspace Design",
    },
    {
      label: "Space Type",
      value: "Commercial Office Space",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const citadel: Project = {
  thumbnail: "/images/citadel.jpg",
  title: "Citadel PropCon.",
  subtitle: "A compact corporate workspace designed to seamlessly host client interactions while supporting focused internal collaboration.",
  slug: "citadel",
  image: [
    "/kds/citadel/img1.jpg",
    "/kds/citadel/img2.jpg",
    "/kds/citadel/img3.jpg",
    "/kds/citadel/img4.jpg",
    "/kds/citadel/img5.jpg",
    "/kds/citadel/img6.jpg",
    // "/kds/citadel/img7.jpg",
    "/kds/citadel/img8.jpg",
    "/kds/citadel/img9.jpg",
    "/kds/citadel/img10.jpg",
    "/kds/citadel/img11.jpg",
    "/kds/citadel/img12.jpg",
    // "/kds/citadel/img13.jpg",
  ],
  description: `Corporate office design prioritises structure, efficiency, and clarity. For Citadel PropCon, the brief was to create a contemporary workspace that supports in-house teams, client meetings, and internal sales discussions within a compact footprint. The result is a refined office, professional yet approachable, open yet composed, designed to support both daily operations and client interactions seamlessly.`,
  address: `Indiranagar, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Commercial",
    value: "commercial",
  },
  type: `Commercial`,
  attributes: [
    {
      label: "Style",
      value: "Classy & Contemporary",
    },
    {
      label: "Service",
      value: "Interior Design & Built",
    },
    {
      label: "Space Type",
      value: "Office Space",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
  year: 2022,
  sections: [
    {
      images: [
        "/kds/citadel/img1.jpg",
        "/kds/citadel/img2.jpg",
        "/kds/citadel/img3.jpg",
        "/kds/citadel/img4.jpg",
        "/kds/citadel/img5.jpg",
      ],
      title: "The Concept Note",
      intro: [
        "Citadel PropCon required a contemporary corporate office within a compact footprint. The brief called for multiple functional zones, from leadership spaces to collaborative and support areas, without compromising openness, comfort, or clarity.",
        "The primary challenge was to create an environment that feels spacious and composed, while reflecting a professional corporate identity."
      ],
      moreText: {
        title:"Key interventions included:",
        points: [
          "Linear lighting to enhance depth",
          "Textured walls with subtle colour accents",
          "A pastel Jali partition to define zones while retaining light",
          "Hexagonal wooden ceiling elements for warmth",
          "Glass partitions to maximise openness and illumination"
        ],
        finishLine: "Each element was selected to balance function with understated elegance."
      }
    },
    {
      title: "Final Handover",
      images: [
        "/kds/citadel/img6.jpg",
        "/kds/citadel/img8.jpg",
        "/kds/citadel/img9.jpg",
        "/kds/citadel/img10.jpg",
        "/kds/citadel/img11.jpg",
        "/kds/citadel/img12.jpg",
      ],
      intro: ["The completed office presents a clean, modern workspace that feels open and well-organised. Despite spatial limitations, all functional requirements are seamlessly integrated.", "Neutral tones, contemporary furniture, and thoughtful lighting come together to create an efficient, refined corporate environment designed for everyday use and long-term growth."]
    }
  ]
};

const excelya: Project = {
  thumbnail: "/images/excelya.jpg",
  title: "Excelya",
  subtitle: "A modern 10,000 sq.ft. workplace revamp focused on collaboration and vibrant interiors.",
  slug: "excelya",
  year: 2024,
  image: [
    "/kds/excelya/img1.jpg",
    "/kds/excelya/img2.jpg",
    "/kds/excelya/img3.jpg",
    "/kds/excelya/img4.jpg",
    "/kds/excelya/img5.jpg",
    "/kds/excelya/img6.jpg",
    "/kds/excelya/img7.jpg",
    "/kds/excelya/img8.jpg",
    "/kds/excelya/img9.jpg",
    "/kds/excelya/img10.jpg",
    "/kds/excelya/img11.jpg",
    "/kds/excelya/img12.jpg",
    // "/kds/excelya/img13.jpg",
  ],
  description: `Excleya, a renowned independent partner that serves Biotech, Pharma and Medical Device Organisations, was a wonderful space to revamp. The Kreative Dezine team had so much fun designing this modern workplace, spread across 10,000 sq. ft. Our ultimate goal was the same as it is for any other commercial project, to design a workplace that fosters productivity, collaboration and the well-being of employees. Apart from this, at Excelya, our team had the mission to create additional collaboration spaces, phone booths, and wall art and revamp the boardroom space. To begin with, we chose wall colours and wallpapers that were vibrant, playful and not distracting at all.  The phone booths were designed in a way that there is space for employees to sit and focus on their calls without feeling suffocated inside. Since the office space highlighted an open plan layout, encouraging communication and collaboration among employees, we decided to breakout areas, and collaborative zones. While each space stood out by itself, the workplace as a whole looked cohesive, which was the aim.`,
  address: `RMZ Millenia, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Commercial",
    value: "commercial",
  },
  type: `Commercial`,
  attributes: [
    {
      label: "Area",
      value: "10000 Sq. Ft",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const celegence: Project = {
  thumbnail: "/kds/celegence/DSC_0084.JPG",
  title: "Celegence Systems Private Limited",
  subtitle: "Office redesign focused on improved space utilization, texture and natural light.",
  slug: "celegence",
  year: 2023,
  image: [
    "/kds/celegence/DSC_0082.JPG",
    "/kds/celegence/DSC_0108.JPG",
    "/kds/celegence/DSC_0077.JPG",
    "/kds/celegence/DSC_0061.JPG",
    "/kds/celegence/DSC_0100.JPG",
    "/kds/celegence/DSC_0097.JPG",
    "/kds/celegence/DSC_0054.JPG",
    "/kds/celegence/DSC_0050.JPG",
    "/kds/celegence/DSC_0071.JPG",
    "/kds/celegence/DSC_0109.JPG",
    "/kds/celegence/DSC_0070.JPG",
    "/kds/celegence/DSC_0083.JPG",
  ],
  description: `The Celegence team approached Kreative Dezine Studio to redesign their office space. The aim was to create a fresh, new and impressive look and feel. . Apart from these, the team also aimed for better utilization of space. A dull, bland, and unfurnished interior space, no matter how functional, will never impart pleasant vibes. In our initial visit to the existing office, we came up with an idea to redesign the entire space and upgrade it according to recent trends. The process begans with a meeting between the architect/ interior designer, project manager and the client’s project manager, who was in charge of the commercial project. The three stakeholders brainstormed ideas to understand the feasibility of the given space and prepared the schematics, and concepts to freeze on the design for executions finally. The workspace was changed from curvilinear to linear workstations, opening up more collaborative spaces. Adding different textures, colours and patterns to the space was the main concept to uplift the space from a dull ambience to a bright, energetic and motivated office ambience.  Bringing in more natural light and adding the biophilic use of plants more generously brought a positive effect on employees' well-being. Staying focused on the client’s requirements and achieving high-end results within the assigned budget was the ultimate motive.`,
  address: `Jayanagar, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Commercial",
    value: "commercial",
  },
  type: `Commercial`,
  attributes: [
    {
      label: "Style",
      value: "Corporate",
    },
    {
      label: "Service",
      value: "Interior ReDesign & Built",
    },
    {
      label: "Space Type",
      value: "Commercial Office Space",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const texport: Project = {
  thumbnail: "/images/texport.jpg",
  title: "Texport Overseas",
  subtitle: "A contemporary corporate workspace transformed to feel open, fresh, and productivity-driven.",
  slug: "texport",
  year: 2023,
  image: [
    "/images/texport/IMG_3659.webp",
    "/images/texport/IMG_3667.webp",
    "/images/texport/IMG_3676.webp",
    "/images/texport/IMG_3901.webp",
    "/images/texport/IMG_3902.webp",
    "/images/texport/IMG_3926.webp",
    "/images/texport/IMG_3979.webp",
    "/images/texport/IMG_3987.webp",
    "/images/texport/IMG_3991.webp",
    "/images/texport/IMG_3999.webp",
    "/images/texport/IMG_4001.webp",
    "/images/texport/IMG_4018.webp",
    "/images/texport/IMG_4023.webp",
    "/images/texport/IMG_4033.webp",
    "/images/texport/IMG_4038.webp",
    "/images/texport/IMG_4043.webp",
    "/images/texport/IMG_4047.webp",
    "/images/texport/IMG_4052.webp",
  ],
  description: "Corporate office design demands clarity, efficiency, and spatial intelligence. For Texport Overseas, the goal was to transform a cramped, outdated workspace into an open, breathable, and contemporary office. The result is a light-filled environment that feels expansive, functional, and human-centric.",
  address: `Yeswanthpur, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Commercial",
    value: "commercial",
  },
  type: `Commercial`,
  attributes: [
    {
      label: "Carpet Area",
      value: "8000 sq. ft",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "Texport Overseas operated out of a cramped and outdated office space.",
        "Low ceilings, narrow passages, and rigid partitions restricted light, movement, and overall comfort.",
        "The primary challenge was to transform the space into a contemporary office that enhances productivity, well-being, and spatial openness within the existing footprint."
      ],
      images: [
        "/images/texport/IMG_3659.webp",
        "/images/texport/IMG_3667.webp",
        "/images/texport/IMG_3676.webp",
        "/images/texport/IMG_3901.webp",
        "/images/texport/IMG_3902.webp",
      ],
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on openness, biophilic elements, and spatial optimization.",
        "Outdated layouts were removed to introduce flexibility, light, and visual continuity.",
        "A lighter palette and open planning helped redefine the workspace experience."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Removal of false ceilings to reveal a 14-foot clear height",
          "Open workstation planning for better flow and collaboration",
          "Biophilic design elements to enhance well-being",
          "A lighter colour palette to improve brightness",
          "Improved ventilation and access to natural light"
        ],
        finishLine: "Each intervention was aimed at improving comfort, efficiency, and spatial quality."
      },
      images: [
        "/images/texport/IMG_3979.webp",
        "/images/texport/IMG_3987.webp",
        "/images/texport/IMG_3991.webp",
        "/images/texport/IMG_3999.webp",
        "/images/texport/IMG_4001.webp",
        "/images/texport/IMG_4018.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed office feels open, modern, and inviting.",
        "Enhanced ceiling height, natural light, and thoughtful planning create a more expansive and breathable workspace.",
        "Texport Overseas now operates from a functional, contemporary office that supports productivity, collaboration, and employee well-being, a clear transformation from its earlier condition."
      ],
      images: [
        "/images/texport/IMG_4023.webp",
        "/images/texport/IMG_4033.webp",
        "/images/texport/IMG_4038.webp",
        "/images/texport/IMG_4043.webp",
        "/images/texport/IMG_4047.webp",
        "/images/texport/IMG_4052.webp"
      ]
    }
  ],
};

const penthouse: Project = {
  thumbnail: "/kds/penthouse/img1.jpg",
  title: "Penthouse at Tata Aquila Heights",
  subtitle: "A light-filled penthouse designed as a serene retreat above the city.",
  slug: "penthouse",
  year: 2025,
  image: [
    "/images/penthouse/_SNF0296.webp",
    "/images/penthouse/_SNF0301.webp",
    "/images/penthouse/_SNF0306.webp",
    "/images/penthouse/_SNF0311.webp",
    "/images/penthouse/_SNF0326.webp",
    "/images/penthouse/_SNF0346.webp",
    "/images/penthouse/_SNF0361.webp",
    "/images/penthouse/_SNF0366.webp",
    "/images/penthouse/_SNF0376.webp",
    "/images/penthouse/_SNF0381.webp",
    "/images/penthouse/_SNF0391.webp",
    "/images/penthouse/_SNF0406.webp",
    "/images/penthouse/_SNF0411.webp",
    "/images/penthouse/_SNF0421.webp",
    "/images/penthouse/_SNF0441.webp",
    "/images/penthouse/_SNF0446.webp",
    "/images/penthouse/_SNF0461.webp",
    "/images/penthouse/_SNF0481.webp",
    "/images/penthouse/_SNF0501.webp",
    "/images/penthouse/_SNF0526.webp",
    "/images/penthouse/_SNF0536.webp",
    "/images/penthouse/_SNF0541.webp",
    "/images/penthouse/_SNF0551.webp",
    "/images/penthouse/_SNF0556.webp",
    "/images/penthouse/_SNF0561.webp",
    "/images/penthouse/_SNF0566.webp",
    "/images/penthouse/_SNF0581.webp",
    "/images/penthouse/_SNF0586.webp",
    "/images/penthouse/_SNF0591.webp",
  ],
  description: `Residential design is about creating spaces that feel personal, comfortable, and effortlessly functional.
It must balance openness, luxury, and everyday ease, especially in high-rise living.
The result is a home that feels calm, refined, and deeply connected to its surroundings.`,
  address: `Jalahalli, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  type: `Residential`,
  attributes: [
    {
      label: "Style",
      value: "Modern Contemporary",
    },
    {
      label: "Service",
      value: "Interior Design & Built",
    },
    {
      label: "Space Type",
      value: "Residential",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "This 4,600 sq. ft. penthouse, located on the 29th floor, offered expansive views and abundant natural light.",
        "The brief was to design interiors that complement the panoramic setting while maintaining a sense of warmth, serenity, and understated luxury.",
        "The challenge was to balance openness with comfort, creating a peaceful escape from the city below."
      ],
      images: [
        "/images/penthouse/_SNF0296.webp",
        "/images/penthouse/_SNF0301.webp",
        "/images/penthouse/_SNF0306.webp",
        "/images/penthouse/_SNF0311.webp",
        "/images/penthouse/_SNF0326.webp",
        "/images/penthouse/_SNF0346.webp",
        "/images/penthouse/_SNF0361.webp",
        "/images/penthouse/_SNF0366.webp",
        "/images/penthouse/_SNF0376.webp",
        "/images/penthouse/_SNF0381.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on light, flow, and restrained elegance.",
        "A contemporary aesthetic was chosen to enhance the penthouse’s openness while allowing the views to take centre stage.",
        "Materials, furnishings, and lighting were curated to create a calm, cohesive living environment."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Floor-to-ceiling windows to maximise daylight and cross ventilation",
          "A white palette to enhance brightness and spatial openness",
          "Plush furnishings and soft linens for comfort",
          "Thoughtfully curated décor to maintain visual calm",
          "Mirror accents to add depth and reflect light",
          "Bespoke lighting fixtures to introduce warmth and sophistication"
        ],
        finishLine: "Each element was designed to support a tranquil and luxurious lifestyle."
      },
      images: [
        "/images/penthouse/_SNF0391.webp",
        "/images/penthouse/_SNF0406.webp",
        "/images/penthouse/_SNF0411.webp",
        "/images/penthouse/_SNF0421.webp",
        "/images/penthouse/_SNF0441.webp",
        "/images/penthouse/_SNF0446.webp",
        "/images/penthouse/_SNF0461.webp",
        "/images/penthouse/_SNF0481.webp",
        "/images/penthouse/_SNF0501.webp",
        "/images/penthouse/_SNF0526.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed penthouse feels airy, serene, and timeless.",
        "Natural light, gentle breezes, and refined interiors come together to create a soothing living experience.",
        "The Penthouse at Tata Aquila Heights stands as a refined urban sanctuary, offering elevated living with comfort, clarity, and quiet luxury."
      ],
      images: [
        "/images/penthouse/_SNF0536.webp",
        "/images/penthouse/_SNF0541.webp",
        "/images/penthouse/_SNF0551.webp",
        "/images/penthouse/_SNF0556.webp",
        "/images/penthouse/_SNF0561.webp",
        "/images/penthouse/_SNF0566.webp",
        "/images/penthouse/_SNF0581.webp",
        "/images/penthouse/_SNF0586.webp",
        "/images/penthouse/_SNF0591.webp"
      ]
    }
  ],
};

const duplex: Project = {
  thumbnail: "/kds/duplex/img1.jpg",
  title: "Duplex Apartment - Sri Lakshmi Venkateshwara Nilaya",
  subtitle: "A traditional-contemporary duplex blending wooden textures with modern layouts.",
  slug: "duplex",
  year: 2023,
  image: [
    "/kds/duplex/img1.jpg",
    "/kds/duplex/img2.jpg",
    "/kds/duplex/img3.jpg",
    "/kds/duplex/img4.jpg",
    "/kds/duplex/img5.jpg",
    "/kds/duplex/img6.jpg",
    "/kds/duplex/img7.jpg",
    "/kds/duplex/img8.jpg",
    "/kds/duplex/img9.jpg",
  ],
  description: `After jotting down the client’s vision and ideas about the space, the Kreative Dezine Studio team put our best into bringing our client’s vision and dreams into reality. Brainstorming ideas and discussing them with the client gave a clearer picture of the home Mr.Prakash was looking at. High-end interior design exudes a sense of opulence, and a wonderful overall aesthetic, achieved by the strategic placement of furniture and decorative. We as interior designers have used every element to bring forth a vibrant aesthetic. The fusion of traditional and contemporary elements is very smartly incorporated to bring elegance to the entire living area. Shades of wooden textures, pastel shades of paint, glasses and warm décor lighting to the space bring life to the fulfilled home.`,
  address: `Anand Alpine, Anjanapura`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  type: `Residential`,
  attributes: [
    {
      label: "Style",
      value: "Traditional & Contemporary fusion",
    },
    {
      label: "Service",
      value: "Interior Design",
    },
    {
      label: "Space Type",
      value: "Residential",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const appartment = {
  thumbnail: "/kds/appartment/img1.jpg",
  title: "Vaswani Gardenia",
  subtitle: "A refined villa with a contemporary German kitchen and luxurious master suite.",
  slug: "appartment",
  image: [
    "/kds/appartment/img1.jpg",
    "/kds/appartment/img2.jpg",
    "/kds/appartment/img3.jpg",
    "/kds/appartment/img4.jpg",
    "/kds/appartment/img5.jpg",
    "/kds/appartment/img6.jpg",
    "/kds/appartment/img7.jpg",
    "/kds/appartment/img8.jpg",
    "/kds/appartment/img9.jpg",
    "/kds/appartment/img10.jpg",
    "/kds/appartment/img11.jpg",
    "/kds/appartment/img12.jpg",
    "/kds/appartment/img13.jpg",
    "/kds/appartment/img14.jpg",
    "/kds/appartment/img15.jpg",
  ],
  description: `The Kreative Dezine team was approached for the initial spatial planning and refinement of the home layouts, alongside comprehensive interior design, lighting planning, and service coordination. The kitchen boasts a contemporary German design, taupe lacquered cabinets, and dark-stained oak timber. The master suite, in particular, stands out for its generous space and luxurious feel. It offers a retreat from the rest of the property, with a thoughtfully designed layout including a vestibule that welcomes the owner into a serene environment. This vestibule not only separates the bedroom from the hallway but also acts as a seamless link between the interconnected rooms, facilitating movement between the bathroom, dressing room, and hallway without causing disturbance to the bedroom. For the property's decor, we specified all internal finishes such as wallcoverings, tiles, floorings, and paint finishes. Additionally, we designed and oversaw the installation of all window treatments, including blinds and curtains, adding the final touches to this exceptional villa property.`,
  address: `Jalahalli, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  type: `Residential`,
  attributes: [
    {
      label: "Style",
      value: "Modern Contemporary",
    },
    {
      label: "Service",
      value: "Interior Design & Built",
    },
    {
      label: "Space Type",
      value: "Residential",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const villa: Project = {
  thumbnail: "/kds/villa/img1.jpg",
  title: "Villament - Interiors",
  subtitle: "A recent handover of a small contemporary office space designed for corporate executive staff.",
  slug: "villa",
  year: 2024,
  image: [
    "/kds/villa/img1.jpg",
    "/kds/villa/img2.jpg",
    "/kds/villa/img3.jpg",
    "/kds/villa/img4.jpg",
    "/kds/villa/img5.jpg",
    "/kds/villa/img6.jpg",
    "/kds/villa/img7.jpg",
    "/kds/villa/img8.jpg",
    "/kds/villa/img9.jpg",
    "/kds/villa/img10.jpg",
    "/kds/villa/img11.jpg",
    "/kds/villa/img12.jpg",
    "/kds/villa/img13.jpg",
    "/kds/villa/img14.jpg",
    "/kds/villa/img15.jpg",
    "/kds/villa/img16.jpg",
    "/kds/villa/img17.jpg",
    "/kds/villa/img18.jpg",
    "/kds/villa/img19.jpg",
    "/kds/villa/img20.jpg",
  ],
  sections: [
    {
      title: "Office Layout",
      intro: ["A compact executive layout optimised for space and daylight."],
      images: [
        "/kds/citadel/img2.jpg",
        "/kds/citadel/img3.jpg",
        "/kds/citadel/img4.jpg",
        "/kds/citadel/img5.jpg",
        "/kds/citadel/img6.jpg",
        "/kds/citadel/img8.jpg",
      ],
    },
  ],
  description: `We were commissioned to furnish and style a newly constructed property in Bangalore. Our tasks included conceptualizing furniture layouts, selecting accessories, implementing window treatments, optimizing lighting, and enhancing overall aesthetics. The focal point of the residence is its expansive open-plan living area, seamlessly integrating the kitchen, dining, and lounge zones. We curated modern furniture pieces, including a breakfast bar in the kitchen, a well-appointed dining ensemble, and a relaxed seating arrangement overlooking the garden. Our design approach incorporated contemporary interior trends, ensuring a stylish and functional space. Additionally, we crafted a separate sitting room to evoke a cosy ambience. This involved incorporating a striking brick wallcovering as a focal point, complemented by carefully curated lighting fixtures and plush furnishings such as embroidered cushions and vibrant textiles, adding sophistication to the room. Each bedroom was meticulously designed to exude elegance and comfort, featuring luxurious and contemporary decor themes. We transformed the fourth bedroom into a versatile study area, utilizing modern furnishings, vibrant accents, and appropriate lighting to create an inspiring environment suitable for remote work or academic pursuits.`,
  address: `J.P Nagar, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  type: `Residential`,
  attributes: [
    {
      label: "Style",
      value: "Modern Contemporary",
    },
    {
      label: "Service",
      value: "Interior Design & Built",
    },
    {
      label: "Space Type",
      value: "Residential",
    },
    {
      label: "Status",
      value: "Completed",
    },
  ],
};

const bunsik: Project = {
  category: {
    label: "Commercial",
    value: "commercial",
  },
  year:2025,
  image:[
    "/images/bunsik/DSC07141.webp",
    "/images/bunsik/DSC07150.webp",
    "/images/bunsik/DSC07156.webp",
    "/images/bunsik/DSC07159.webp",
    "/images/bunsik/DSC07165.webp",
    "/images/bunsik/DSC07168.webp",
    "/images/bunsik/DSC07171.webp",
    "/images/bunsik/DSC07174.webp",
    "/images/bunsik/DSC07177.webp",
    "/images/bunsik/DSC07183.webp",
    "/images/bunsik/DSC07186.webp",
    "/images/bunsik/DSC07189.webp",
    "/images/bunsik/DSC07195.webp",
    "/images/bunsik/DSC07198.webp",
    "/images/bunsik/DSC07204.webp"
  ],
  slug: "bunsik",
  thumbnail: "/images/bunsik.webp",
  title:"Bunsik",
  subtitle: "A compact Korean café designed to be warm, soulful, and consciously budget-friendly.",
  address: "Koramangala, Bangalore",
  location: "Bangalore",
  type: "Commercial",
  description: "Café design prioritises atmosphere, comfort, and emotional connection over formality. For Bunsik, the focus was on creating an authentic Korean street-style café that was both budget-conscious and sustainable. The result is a space with character and soul, shaped by thoughtful material choices rather than excess",
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "Bunsik required a compact café interior inspired by traditional Korean snack shops.",
        "The brief demanded a warm and approachable environment that could be delivered within strict budget constraints.",
        "The primary challenge was to create a space with strong identity and comfort, using low-cost, reusable, and repurposed materials without compromising the overall experience."
      ],
      images: [
        "/images/bunsik/DSC07141.webp",
        "/images/bunsik/DSC07150.webp",
        "/images/bunsik/DSC07156.webp",
        "/images/bunsik/DSC07159.webp",
        "/images/bunsik/DSC07165.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on material honesty, restraint, and sustainability.",
        "A neutral base was used to keep the space visually calm, while textures and finishes introduced depth and warmth. Upcycled elements and simple furnishings played a key role in maintaining both budget efficiency and cultural authenticity."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Concrete flooring to establish an urban, grounded base",
          "Neutral grey tones for visual balance and calm",
          "Wooden beadings and trims to add warmth",
          "Upcycled décor elements for authenticity",
          "Simple, functional furniture inspired by Korean street cafés"
        ],
        finishLine: "Each element was selected to create impact through thoughtful materiality rather than cost."
      },
      images: [
        "/images/bunsik/DSC07168.webp",
        "/images/bunsik/DSC07171.webp",
        "/images/bunsik/DSC07174.webp",
        "/images/bunsik/DSC07177.webp",
        "/images/bunsik/DSC07183.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed café feels cozy, grounded, and welcoming.",
        "Despite budget limitations, the design successfully delivers warmth and character through texture and tone.",
        "Bunsik stands as an example of how meaningful hospitality design can be achieved through restraint, sustainability, and storytelling, creating a space that feels genuine and inviting."
      ],
      images: [
        "/images/bunsik/DSC07186.webp",
        "/images/bunsik/DSC07189.webp",
        "/images/bunsik/DSC07195.webp",
        "/images/bunsik/DSC07198.webp",
        "/images/bunsik/DSC07204.webp"
      ]
    }
  ],
}

const brita: Project = {
  category: {
    label: "Commercial",
    value: "commercial",
  },
  year:2025,
  thumbnail: "/images/brita.webp",
  title: "Brita India Water Solutions Pvt. Ltd.",
  slug: "brita",
  image: [
    "/images/brita/SNF08922.webp",
    "/images/brita/SNF08925.webp",
    "/images/brita/SNF08934.webp",
    "/images/brita/SNF08937.webp",
    "/images/brita/SNF08946.webp",
    "/images/brita/SNF08949.webp",
    "/images/brita/SNF08955.webp",
    "/images/brita/SNF08958.webp",
    "/images/brita/SNF08979.webp",
    "/images/brita/SNF08982.webp",
    "/images/brita/SNF08988.webp",
    "/images/brita/SNF09006.webp",
    "/images/brita/SNF09036.webp",
    "/images/brita/SNF09039.webp",
    "/images/brita/SNF09042.webp",
    "/images/brita/SNF09045.webp",
    "/images/brita/SNF09051.webp",
    "/images/brita/SNF09054.webp",
    "/images/brita/SNF09057.webp",
    "/images/brita/SNF09069.webp",
    "/images/brita/SNF09078.webp",
    "/images/brita/SNF09085.webp",
    "/images/brita/SNF09099.webp",
    "/images/brita/SNF09108.webp",
    "/images/brita/SNF09114.webp",
    "/images/brita/SNF09120.webp",
    "/images/brita/SNF09129.webp",
    "/images/brita/SNF09132.webp",
    "/images/brita/SNF09135.webp",
    "/images/brita/SNF09144.webp",
  ],
  subtitle: "A modern workspace reflecting purity and innovation with fluid forms and greenery.",
  address: "Whitefield, Bangalore",
  location: "Bangalore",
  type: "Commercial",
  description: "Corporate office design is most effective when it translates brand values into spatial experience. Beyond functionality, it must communicate identity, purpose, and vision. For Brita India, this meant creating a workspace that embodies purity, sustainability, and innovation through thoughtful design. The result is an office environment that feels inspiring, purposeful, and distinctly aligned with the brand."
  ,
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "Brita India required a corporate office that clearly reflected its brand philosophy.",
        "The brief called for a modern workspace that balances aesthetics with functionality, while creating a strong and memorable first impression.",
        "The challenge was to integrate brand storytelling into the interiors without compromising everyday usability and comfort."
      ],
      images: [
        "/images/brita/SNF08922.webp",
        "/images/brita/SNF08925.webp",
        "/images/brita/SNF08934.webp",
        "/images/brita/SNF08937.webp",
        "/images/brita/SNF08946.webp",
        "/images/brita/SNF08949.webp",
        "/images/brita/SNF08955.webp",
        "/images/brita/SNF08958.webp",
        "/images/brita/SNF08979.webp",
        "/images/brita/SNF08982.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on brand expression, fluidity, and warmth.",
        "Clean forms and modern finishes were layered with organic elements to reflect Brita’s connection to water and sustainability.",
        "Every zone was designed to reinforce identity while supporting function."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "A curved wooden reception desk with a sleek white front panel",
          "Circular ceiling planters introducing cascading greenery",
          "Copper ceiling panels to add warmth and depth",
          "Fluid blue wave wall graphics inspired by water",
          "Futuristic ring lighting to enhance ambience",
          "Integrated product displays seamlessly embedded into the space"
        ],
        finishLine: "Each element was designed to balance visual impact with functional clarity."
      },
      images: [
        "/images/brita/SNF08988.webp",
        "/images/brita/SNF09006.webp",
        "/images/brita/SNF09036.webp",
        "/images/brita/SNF09039.webp",
        "/images/brita/SNF09042.webp",
        "/images/brita/SNF09045.webp",
        "/images/brita/SNF09051.webp",
        "/images/brita/SNF09054.webp",
        "/images/brita/SNF09057.webp",
        "/images/brita/SNF09069.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed office is more than a workplace,  it is a physical expression of Brita’s values.",
        "The space feels modern, welcoming, and purposeful, with brand cues woven subtly throughout.",
        "This project demonstrates how thoughtful corporate design can successfully unite identity, sustainability, and everyday function into a cohesive environment."
      ],
      images: [
        "/images/brita/SNF09078.webp",
        "/images/brita/SNF09085.webp",
        "/images/brita/SNF09099.webp",
        "/images/brita/SNF09108.webp",
        "/images/brita/SNF09114.webp",
        "/images/brita/SNF09120.webp",
        "/images/brita/SNF09129.webp",
        "/images/brita/SNF09132.webp",
        "/images/brita/SNF09135.webp",
        "/images/brita/SNF09144.webp"
      ]
    }
  ]
}

const penthouse2: Project = {
  category: {
    label: "Residential",
    value: "residential",
  },
  slug: "penthouse",
  image: ["/images/penthouse.webp"],
  thumbnail: "/images/penthouse.webp",
  title:"Penthouse at Tata Aquila Heights",
  subtitle: "A light-filled penthouse designed as a serene retreat above the city.",
  address: "Yeshwanthpur, Bangalore",
  location: "Bangalore",
  type: "Residential",
  year: 2025,
  description: "Residential design is about creating spaces that feel personal, comfortable, and effortlessly functional. It must balance openness, luxury, and everyday ease, especially in high-rise living. The result is a home that feels calm, refined, and deeply connected to its surroundings.",
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "This 4,600 sq. ft. penthouse, located on the 29th floor, offered expansive views and abundant natural light.",
        "The brief was to design interiors that complement the panoramic setting while maintaining a sense of warmth, serenity, and understated luxury.",
        "The challenge was to balance openness with comfort, creating a peaceful escape from the city below."
      ],
      images: [
        "/images/penthouse.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on light, flow, and restrained elegance.",
        "A contemporary aesthetic was chosen to enhance the penthouse’s openness while allowing the views to take centre stage.",
        "Materials, furnishings, and lighting were curated to create a calm, cohesive living environment."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Floor-to-ceiling windows to maximise daylight and cross ventilation",
          "A white palette to enhance brightness and spatial openness",
          "Plush furnishings and soft linens for comfort",
          "Thoughtfully curated décor to maintain visual calm",
          "Mirror accents to add depth and reflect light",
          "Bespoke lighting fixtures to introduce warmth and sophistication"
        ],
        finishLine: "Each element was designed to support a tranquil and luxurious lifestyle."
      },
      images: [
        "/images/penthouse.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed penthouse feels airy, serene, and timeless.",
        "Natural light, gentle breezes, and refined interiors come together to create a soothing living experience.",
        "The Penthouse at Tata Aquila Heights stands as a refined urban sanctuary, offering elevated living with comfort, clarity, and quiet luxury."
      ],
      images: [
        "/images/penthouse.webp"
      ]
    }
  ]
}

const prestige: Project = {
  category: {
    label: "Residential",
    value: "residential",
  },
  slug: "prestige-golfshire",
  thumbnail: "/images/golfshire.webp",
  image: [
    "/images/prestige/052b1b10-fcc5-425b-92c3-a64155877a5c.webp",
    "/images/prestige/28dc229d-4458-42dd-9cde-a3feb4eec36c.webp",
    "/images/prestige/f599b886-6eb4-48e0-ab76-0fcd30e7aa37.webp",
    "/images/prestige/IMG_9960.webp",
    "/images/prestige/IMG_9961.webp",
    "/images/prestige/IMG_9962.webp",
    "/images/prestige/IMG_9963.webp",
    "/images/prestige/IMG_9964.webp",
    "/images/prestige/IMG_9965.webp",
    "/images/prestige/IMG_9966.webp",
    "/images/prestige/IMG_9967.webp",
    "/images/prestige/IMG_9971.webp",
    "/images/prestige/IMG_9972.webp",
    "/images/prestige/IMG_9973.webp",
    "/images/prestige/IMG_9974.webp",
    "/images/prestige/IMG_9975.webp",
    "/images/prestige/IMG_9976.webp"
  ],
  title:"Prestige Golfshire – Landscaping",
  subtitle: "A comprehensive residential upgrade designed to elevate ambience through interiors and landscape design",
  address: "Nandi Hills Road, Bangalore",
  location: "Bangalore",
  type: "Commercial",
  year: 2024,
  description: "Residential design is about creating spaces that feel personal, comfortable, and effortlessly functional. It must balance interiors and outdoor environments to support everyday living and visual harmony. The result is a home where design upgrades enhance both lifestyle and atmosphere.",
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "The villa at Prestige Golfshire required a complete aesthetic and functional upgrade.",
        "The brief focused on refreshing interiors while redesigning the landscaping to elevate the overall living experience.",
        "The challenge was to ensure that interior enhancements and outdoor spaces felt cohesive and well-integrated."
      ],
      images: [
        "/images/prestige/052b1b10-fcc5-425b-92c3-a64155877a5c.webp",
        "/images/prestige/28dc229d-4458-42dd-9cde-a3feb4eec36c.webp",
        "/images/prestige/f599b886-6eb4-48e0-ab76-0fcd30e7aa37.webp",
        "/images/prestige/IMG_9960.webp",
        "/images/prestige/IMG_9961.webp",
        "/images/prestige/IMG_9962.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design approach focused on holistic transformation, addressing both indoor and outdoor environments.",
        "Key upgrades were planned to improve visual warmth, lighting quality, and spatial experience.",
        "Landscape design was treated as an extension of the home rather than a separate element."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Introduction of stylish wallpaper across key interior spaces",
          "Complete replacement of the lighting system",
          "New furniture selections to enhance comfort and flow",
          "Redesigned landscaping to elevate outdoor ambience",
          "Improved indoor–outdoor visual continuity"
        ],
        finishLine: "Each intervention was carefully coordinated to enhance the villa’s overall character."
      },
      images: [
        "/images/prestige/IMG_9963.webp",
        "/images/prestige/IMG_9964.webp",
        "/images/prestige/IMG_9965.webp",
        "/images/prestige/IMG_9966.webp",
        "/images/prestige/IMG_9967.webp",
        "/images/prestige/IMG_9971.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The upgraded villa feels refreshed, cohesive, and visually elevated.",
        "Interior enhancements and landscaping work together to create a balanced and inviting environment.",
        "Prestige Golfshire now stands as a residence where thoughtful upgrades and landscape design come together to enhance everyday living and long-term comfort."
      ],
      images: [
        "/images/prestige/IMG_9972.webp",
        "/images/prestige/IMG_9973.webp",
        "/images/prestige/IMG_9974.webp",
        "/images/prestige/IMG_9975.webp",
        "/images/prestige/IMG_9976.webp"
      ]
    }
  ]
}

const cedar: Project = {
  thumbnail: "/images/cedar/61.webp",
  title: "Cedar String",
  subtitle: "A 5,000 sq. ft. luxury villa designed to balance modern elegance with warmth and livability.",
  slug: "cedar-string",
  image: [
    "/images/cedar/102.webp",
    "/images/cedar/109.webp",
    "/images/cedar/118.webp",
    "/images/cedar/127.webp",
    "/images/cedar/128.webp",
    "/images/cedar/129.webp",
    "/images/cedar/133.webp",
    "/images/cedar/134.webp",
    "/images/cedar/135.webp",
    "/images/cedar/138.webp",
    "/images/cedar/141.webp",
    "/images/cedar/143.webp",
    "/images/cedar/144.webp",
    "/images/cedar/147.webp",
    "/images/cedar/151.webp",
    "/images/cedar/154.webp",
    "/images/cedar/155.webp",
    "/images/cedar/160.webp",
    "/images/cedar/161.webp",
    "/images/cedar/162.webp",
    "/images/cedar/166.webp",
    "/images/cedar/170.webp",
    "/images/cedar/171.webp",
    "/images/cedar/61.webp",
    "/images/cedar/62.webp",
    "/images/cedar/63.webp",
    "/images/cedar/64.webp",
    "/images/cedar/65.webp",
    "/images/cedar/70.webp",
    "/images/cedar/72.webp",
    "/images/cedar/74.webp",
    "/images/cedar/77.webp",
    "/images/cedar/78.webp",
    "/images/cedar/81.webp",
    "/images/cedar/82.webp"
  ],
  description: `Residential design is about creating spaces that feel personal, comfortable, and effortlessly functional.
It must balance aesthetics with utility while reflecting the lifestyle and personality of its occupants.
The result is a home that offers sensory richness and elevates everyday living.`,
  address: `Thanisandra Main Rd, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  year: 2025,
  type: `Residential`,
  sections: [
    {
      title: "The Concept Note",
      intro: [
        "The brief for Cedar String was to design a luxury villa that feels experiential rather than ornamental.",
        "The homeowners sought a space that blends contemporary architecture with natural materials, while maintaining a strong indoor–outdoor connection.",
        "The challenge was to create opulence that feels warm, grounded, and timeless."
      ],
      images: [
        "/images/cedar/102.webp",
        "/images/cedar/109.webp",
        "/images/cedar/118.webp",
        "/images/cedar/127.webp",
        "/images/cedar/128.webp",
        "/images/cedar/129.webp",
        "/images/cedar/133.webp",
        "/images/cedar/134.webp",
        "/images/cedar/135.webp",
        "/images/cedar/138.webp",
        "/images/cedar/141.webp",
        "/images/cedar/143.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design concept, Modern Elegance with Earthy Roots, guided every spatial and material decision.",
        "Clean architectural lines were softened with natural textures, layered lighting, and curated views of greenery.",
        "Spaces were planned to flow organically, allowing the indoors and outdoors to feel seamlessly connected."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "Contemporary architectural forms with clean lines and symmetry",
          "Split-level planning to add visual interest and functional zoning",
          "Double-height ceilings to enhance scale and natural light",
          "Use of wood, stone, glass, and greenery for material balance",
          "Curated indoor–outdoor transitions with gardens and sit-outs",
          "Layered lighting to create depth and understated luxury"
        ],
        finishLine: "Each element was designed to contribute to a refined yet livable environment."
      },
      images: [
        "/images/cedar/144.webp",
        "/images/cedar/147.webp",
        "/images/cedar/151.webp",
        "/images/cedar/154.webp",
        "/images/cedar/155.webp",
        "/images/cedar/160.webp",
        "/images/cedar/161.webp",
        "/images/cedar/162.webp",
        "/images/cedar/166.webp",
        "/images/cedar/170.webp",
        "/images/cedar/171.webp",
        "/images/cedar/61.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "Cedar String emerges as a villa where luxury feels intuitive and deeply personal.",
        "Thoughtful spatial planning, natural materials, and layered detailing create a home that is both elegant and grounded.",
        "The result is a residence that tells a story, one of modern living shaped by warmth, balance, and timeless design."
      ],
      images: [
        "/images/cedar/62.webp",
        "/images/cedar/63.webp",
        "/images/cedar/64.webp",
        "/images/cedar/65.webp",
        "/images/cedar/70.webp",
        "/images/cedar/72.webp",
        "/images/cedar/74.webp",
        "/images/cedar/77.webp",
        "/images/cedar/78.webp",
        "/images/cedar/81.webp",
        "/images/cedar/82.webp"
      ]
    }
  ],
}

const embassy: Project = {
  thumbnail: "/images/casabella/15.webp",
  title: "Embassy Casabella",
  year: 2025,
  subtitle: "A luxury residence that blends classic elegance with contemporary comfort.",
  slug: "embassy-casabella",
  image: [
    "/images/casabella/11.webp",
    "/images/casabella/15.webp",
    "/images/casabella/16.webp",
    "/images/casabella/17.webp",
    "/images/casabella/18.webp",
    "/images/casabella/19.webp",
    "/images/casabella/24.webp",
    "/images/casabella/27.webp",
    "/images/casabella/30.webp",
    "/images/casabella/39.webp",
    "/images/casabella/42.webp",
    "/images/casabella/44.webp",
    "/images/casabella/46.webp",
    "/images/casabella/48.webp",
    "/images/casabella/49.webp",
    "/images/casabella/50.webp",
    "/images/casabella/52.webp",
    "/images/casabella/53.webp",
    "/images/casabella/54.webp",
    "/images/casabella/60.webp",
    "/images/casabella/61.webp",
    "/images/casabella/62.webp",
    "/images/casabella/63.webp",
    "/images/casabella/66.webp",
    "/images/casabella/71.webp",
    "/images/casabella/72.webp",
    "/images/casabella/73.webp",
    "/images/casabella/75.webp",
    "/images/casabella/80.webp"
  ],
  description: "Residential design is about creating spaces that feel personal, comfortable, and effortlessly functional. It must balance timeless character with modern living, while reflecting the personality of its occupants. The result is a home that feels warm, refined, and deeply rooted in everyday comfort.",
  address: `Kasturba Cross Rd, Bangalore`,
  location: `Bangalore`,
  category: {
    label: "Residential",
    value: "residential",
  },
  type: `Residential`,

  sections: [
    {
      title: "The Concept Note",
      intro: [
        "This 5,000 sq. ft. residence at Embassy Casabella was envisioned as a home that merges old-world charm with present-day sensibilities.",
        "The brief focused on creating a space that feels intimate yet expansive, luxurious yet lived-in.",
        "The challenge was to balance traditional influences with contemporary design without losing warmth or character."
      ],
      images: [
        "/images/casabella/11.webp",
        "/images/casabella/15.webp",
        "/images/casabella/16.webp",
        "/images/casabella/17.webp",
        "/images/casabella/18.webp",
        "/images/casabella/19.webp",
        "/images/casabella/24.webp",
        "/images/casabella/27.webp",
        "/images/casabella/30.webp",
        "/images/casabella/39.webp"
      ]
    },
    {
      title: "Design Strategy & Execution",
      intro: [
        "The design narrative centred on layering, of textures, tones, and forms, to achieve understated opulence.",
        "Classic design elements were reinterpreted through a contemporary lens to create spaces that feel both timeless and current.",
        "Artisanal detailing and curated décor played a key role in shaping the home’s character."
      ],
      moreText: {
        title: "Spatial Highlights:",
        points: [
          "A palette of warm hues and tactile materials",
          "Thoughtful layering of textures and finishes",
          "Vintage-inspired details such as brass hardware and carved wood accents",
          "Clean contemporary lines softened by traditional forms",
          "Curated décor and artwork for a collected, lived-in feel",
          "Clearly defined yet open spaces suitable for entertaining and quiet moments"
        ],
        finishLine: "Each room was carefully composed to reflect the client’s personality and values."
      },
      images: [
        "/images/casabella/42.webp",
        "/images/casabella/44.webp",
        "/images/casabella/46.webp",
        "/images/casabella/48.webp",
        "/images/casabella/49.webp",
        "/images/casabella/50.webp",
        "/images/casabella/52.webp",
        "/images/casabella/53.webp",
        "/images/casabella/54.webp",
        "/images/casabella/60.webp"
      ]
    },
    {
      title: "Final Handover: How the Space Came Alive",
      intro: [
        "The completed residence feels elegant, warm, and deeply personal.",
        "Classic detailing and contemporary design come together to create a home that is both sophisticated and welcoming.",
        "Embassy Casabella stands as a refined urban retreat, a space that tells a story of heritage, comfort, and timeless taste."
      ],
      images: [
        "/images/casabella/61.webp",
        "/images/casabella/62.webp",
        "/images/casabella/63.webp",
        "/images/casabella/66.webp",
        "/images/casabella/71.webp",
        "/images/casabella/72.webp",
        "/images/casabella/73.webp",
        "/images/casabella/75.webp",
        "/images/casabella/80.webp"
      ]
    }
  ],

}

export const projectsConstants = [
  anthology,
  citadel,
  texport,
  penthouse,
  cedar,
  prestige,
  bunsik,
  brita,
  embassy
];

export const latestProjectConstants = [
  bunsik,
  brita,
  penthouse2,
  prestige
]