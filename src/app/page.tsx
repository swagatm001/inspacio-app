import type { Metadata } from "next";
import Awards from "@/components/Awards/Awards";
import CustomContainer from "@/components/Container/CustomContainer";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import FooterV2 from "@/components/Footer/FooterV2";
import { LatestProjects } from "@/components/LatestProject";
import OurStory from "@/components/OurStory/OurStory";
import { Partners } from "@/components/Partners/Partners";
import TestimonialV2 from "@/components/Testimonial/TestimonialV2";
import TextScroll from "@/components/TextScroll/TextScroll";
import { VideoBanner } from "@/components/VideoBanner";
import DescriptivePara from "@/components/DescriptivePara/DescriptivePara";
import HomeServices from "@/components/HomeServices/HomeServices";
import StatsStrip from "@/components/StatsStrip/StatsStrip";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import { blurFor } from "@/utils/blur";
import { awards } from "@/constants/awards";
import { Header } from "@/components/Header";
import { SITE_URL, siteConstants } from "@/constants/site";

const title = "Best Interior Designers in Bangalore for Homes & Offices | Inspacio";
const description =
  "Looking for trusted interior designers in Bangalore? Inspacio delivers customized interiors, architecture and turnkey execution for homes and commercial spaces.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  // Open Graph title/description are inherited from the fields above and the
  // image from the root layout; a page-level openGraph block would replace it.
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: siteConstants.name,
  legalName: siteConstants.legalName,
  url: SITE_URL,
  image: `${SITE_URL}${siteConstants.ogImage}`,
  email: siteConstants.email,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConstants.address.street,
    addressLocality: siteConstants.address.locality,
    addressRegion: siteConstants.address.region,
    postalCode: siteConstants.address.postalCode,
    addressCountry: siteConstants.address.country,
  },
  areaServed: "Bengaluru, Karnataka",
  founder: { "@type": "Person", name: "Swati Panda" },
  knowsAbout: ["Interior design", "Architecture", "Turnkey interior execution"],
  award: awards.map((a) => `${a.title}: ${a.description}`),
  sameAs: [siteConstants.instagram],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-brand-cream overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <End2EndWrapper className="h-[542px] lg:h-screen">
        <Header />
        <VideoBanner posterBlur={blurFor("/images/banner.jpg")} />
      </End2EndWrapper>
      <CustomContainer>
        <DescriptivePara />
        <StatsStrip />
        <ScrollFadeIn><HomeServices /></ScrollFadeIn>
      </CustomContainer>
      <ScrollFadeIn><FeaturedProject /></ScrollFadeIn>
      <CustomContainer>
        <ScrollFadeIn><LatestProjects /></ScrollFadeIn>
        <ScrollFadeIn><OurStory /></ScrollFadeIn>
        <ScrollFadeIn><Partners /></ScrollFadeIn>
      </CustomContainer>
      <TestimonialV2 />
      <CustomContainer>
        <TextScroll />
        <ScrollFadeIn><Awards /></ScrollFadeIn>
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
