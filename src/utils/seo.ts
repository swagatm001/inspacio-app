import { SITE_URL, siteConstants, whatsappHref } from "@/constants/site";
import { awards } from "@/constants/awards";

export const ORG_ID = `${SITE_URL}/#organization`;

/** Locality from an address such as "Jalahalli, Bangalore". */
export const localityOf = (address?: string) => (address ? address.split(",")[0].trim() : "");

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": ORG_ID,
  name: siteConstants.name,
  legalName: siteConstants.legalName,
  url: SITE_URL,
  logo: absoluteUrl(siteConstants.logo),
  image: absoluteUrl(siteConstants.ogImage),
  email: siteConstants.email,
  ...(siteConstants.phone ? { telephone: siteConstants.phone } : {}),
  description:
    "Architecture and interior design studio in Bangalore delivering homes, offices and commercial spaces from concept to turnkey execution.",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConstants.address.street,
    addressLocality: siteConstants.address.locality,
    addressRegion: siteConstants.address.region,
    postalCode: siteConstants.address.postalCode,
    addressCountry: siteConstants.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: siteConstants.geo.lat, longitude: siteConstants.geo.lng },
  hasMap: siteConstants.mapUrl,
  areaServed: { "@type": "City", name: "Bengaluru" },
  founder: { "@type": "Person", name: siteConstants.founder.name, jobTitle: siteConstants.founder.role },
  knowsAbout: ["Interior design", "Architecture", "Turnkey interior execution", "Office interiors", "Home interiors"],
  award: awards.map((a) => `${a.title}: ${a.description}`),
  sameAs: [siteConstants.instagram, ...(siteConstants.googleReviewsUrl ? [siteConstants.googleReviewsUrl] : []), ...(whatsappHref ? [whatsappHref] : [])],
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConstants.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const founderJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#founder`,
  name: siteConstants.founder.name,
  jobTitle: siteConstants.founder.role,
  image: absoluteUrl(siteConstants.founder.photo),
  worksFor: { "@id": ORG_ID },
  alumniOf: { "@type": "CollegeOrUniversity", name: siteConstants.founder.alumniOf },
  award: awards.filter((a) => /Swati Panda/.test(a.description)).map((a) => `${a.title}: ${a.description}`),
  url: `${SITE_URL}/about`,
});
