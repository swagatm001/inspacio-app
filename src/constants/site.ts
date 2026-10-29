export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inspacio.in";

export interface SiteStat {
  value: string;
  label: string;
}

export const siteConstants = {
  name: "Inspacio Design",
  legalName: "Inspacio Design Pvt. Ltd.",
  tagline: "Designing Spaces That Inspire",
  email: "info@inspacio.in",
  /** Display phone number, e.g. "+91 98765 43210". Leave empty to hide phone links. */
  phone: "",
  /** WhatsApp number in international format without "+" or spaces, e.g. "919876543210". Leave empty to hide WhatsApp buttons. */
  whatsapp: "",
  whatsappMessage: "Hi Inspacio, I’d like to talk about an interior design project.",
  instagram: "https://www.instagram.com/inspaciodesignstudio",
  instagramHandle: "@inspaciodesignstudio",
  /** Link to the studio's Google reviews. Leave empty to hide the "Read all reviews" link. */
  googleReviewsUrl: "",
  address: {
    street: "37, Rama Residency, 38, Bowring Hospital Rd, Shivaji Nagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560051",
    country: "IN",
  },
  ogImage: "/images/og-image.jpg",
  logo: "/images/logo_dark.svg",
  /** Studio location, used for local search data and the map. */
  geo: { lat: 12.98339723305194, lng: 77.60063810988633 },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=37%2C+Rama+Residency%2C+38%2C+Bowring+Hospital+Rd%2C+Shivaji+Nagar%2C+Bengaluru+560051",
  founder: { name: "Swati Panda", role: "Founder & Principal Architect", alumniOf: "Piloo Mody College of Architecture", photo: "/images/director.webp" },
  /** From Google Search Console, "HTML tag" method. Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel. */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  /**
   * Numbers strip under the homepage intro. Rendered only when this list has entries.
   * Example: [{ value: "13+", label: "Years of practice" }, { value: "120+", label: "Projects delivered" }]
   */
  stats: [] as SiteStat[],
};

export const whatsappHref = siteConstants.whatsapp
  ? `https://wa.me/${siteConstants.whatsapp}?text=${encodeURIComponent(siteConstants.whatsappMessage)}`
  : "";
