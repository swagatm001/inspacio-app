import type { Project, SectorSlug } from "./projects";

export interface Sector {
  slug: SectorSlug;
  name: string;
  /** Short line used on tiles. */
  tagline: string;
  /** Opening paragraph on the sector page. */
  intro: string;
  /** Project slug whose photo represents the sector. */
  heroProject: string;
  /** Page title and description for search engines. */
  seoTitle: string;
  seoDescription: string;
}

export const sectors: Sector[] = [
  {
    slug: "residential",
    name: "Residential",
    tagline: "Apartments, penthouses, duplexes and villas",
    intro:
      "Homes designed around the people who live in them. From a 4,600 sq ft penthouse to a split-level villa, we plan the architecture and interiors together so every room feels personal, comfortable and effortlessly functional.",
    heroProject: "penthouse",
    seoTitle: "Residential Interior Designers in Bangalore | Inspacio",
    seoDescription:
      "Home interiors and architecture in Bangalore: apartments, penthouses, duplexes and villas designed and delivered turnkey by Inspacio Design.",
  },
  {
    slug: "commercial",
    name: "Commercial",
    tagline: "Corporate offices and headquarters",
    intro:
      "Workspaces that translate a brand into space. We plan offices for daylight, collaboration and focus, from a compact executive floor to a headquarters, and deliver them turnkey with our own team on site.",
    heroProject: "brita",
    seoTitle: "Office & Commercial Interior Designers in Bangalore | Inspacio",
    seoDescription:
      "Corporate office and commercial interiors in Bangalore, planned for daylight, collaboration and focus and delivered turnkey by Inspacio Design.",
  },
  {
    slug: "retail-hospitality",
    name: "Retail & Hospitality",
    tagline: "Cafés, restaurants and retail",
    intro:
      "Spaces where atmosphere does the selling. Cafés, restaurants and retail interiors shaped by thoughtful material choices rather than excess, on realistic budgets and timelines.",
    heroProject: "bunsik",
    seoTitle: "Café, Restaurant & Retail Interior Designers in Bangalore | Inspacio",
    seoDescription:
      "Café, restaurant and retail interiors in Bangalore with character and soul, designed and executed by Inspacio Design.",
  },
  {
    slug: "landscape-outdoor",
    name: "Landscape & Outdoor",
    tagline: "Terraces, gardens and outdoor lounges",
    intro:
      "Outdoor rooms that extend living beyond the walls. Terraces, gardens, pergolas and poolside lounges designed to feel as considered by night as by day.",
    heroProject: "prestige-golfshire",
    seoTitle: "Landscape & Outdoor Design in Bangalore | Inspacio",
    seoDescription:
      "Terraces, gardens and outdoor lounges in Bangalore designed by Inspacio Design to extend living space beyond the walls.",
  },
];

export const sectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);

/** A project's sector: the explicit field, otherwise derived from its category. */
export const sectorOf = (project: Project): SectorSlug =>
  project.sector ?? (project.category?.value === "commercial" ? "commercial" : "residential");
