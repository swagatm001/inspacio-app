export interface Award {
    title: string;
    description: string;
    /** Project shown alongside the award, when one was presented. */
    presented?: {
        slug: string;
        name: string;
    };
}

export interface PressFeature {
    outlet: string;
    title: string;
    href: string;
    projectSlug?: string;
}

export const awards: Award[] = [
    {
        title: "WADE Asia 2025",
        description: "Outstanding & Creative Architecture Firm of the Year – India",
        presented: { slug: "brita", name: "Brita India workspace" },
    },
    {
        title: "Times Business Awards 2024",
        description: "Best Coworking Brand for Design – 315 Work Avenue",
    },
    {
        title: "Women Entrepreneurs Review 2024",
        description: "Top 10 Women Architects – Swati Panda",
    },
];

export const press: PressFeature[] = [
    {
        outlet: "Archello",
        title: "Bengaluru Penthouse",
        href: "https://archello.com/project/bengaluru-penthouse",
        projectSlug: "penthouse",
    },
];
