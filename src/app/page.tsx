import type { Metadata } from "next";
import Awards from "@/components/Awards/Awards";
import CustomContainer from "@/components/Container/CustomContainer";
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
import { SectorsSection } from "@/components/Sectors/SectorsSection";
import { blurFor } from "@/utils/blur";
import { Header } from "@/components/Header";

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


export default function Home() {
  return (
    <div className="flex flex-col gap-28 md:gap-36 bg-brand-cream overflow-x-hidden">
      <Header lightBackground />
      <div className="pt-20 px-3 md:px-5">
        <div className="relative h-[520px] lg:h-[calc(100vh-6.5rem)] min-h-[520px] rounded-[28px] md:rounded-4xl overflow-hidden shadow-soft">
          <VideoBanner posterBlur={blurFor("/images/banner.jpg")} />
        </div>
      </div>
      <CustomContainer>
        <DescriptivePara />
        <StatsStrip />
        <ScrollFadeIn><HomeServices /></ScrollFadeIn>
      </CustomContainer>
      <ScrollFadeIn><FeaturedProject /></ScrollFadeIn>
      <CustomContainer>
        <ScrollFadeIn><LatestProjects /></ScrollFadeIn>
        <ScrollFadeIn><SectorsSection number="04" /></ScrollFadeIn>
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
