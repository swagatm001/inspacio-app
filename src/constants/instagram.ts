export interface InstagramPost {
  image: string;
  href: string;
  alt: string;
}

/** Placeholder tiles from the portfolio; replace with post images and permalinks. */
export const instagram = {
  handle: "@inspaciodesignstudio",
  url: "https://www.instagram.com/inspaciodesignstudio/",
  posts: [
    { image: "/images/brita.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
    { image: "/images/bunsik.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
    { image: "/images/penthouse.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
    { image: "/images/golfshire.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
    { image: "/images/cedar/DSC04231.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
    { image: "/images/anthology/Anthology-13.webp", href: "https://www.instagram.com/inspaciodesignstudio/", alt: "Inspacio project photo" },
  ] as InstagramPost[],
};
