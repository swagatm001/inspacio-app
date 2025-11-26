import Awards from "@/components/Awards/Awards";
import CustomContainer from "@/components/Container/CustomContainer";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { FAQ } from "@/components/FAQ";
import FooterV2 from "@/components/Footer/FooterV2";
import { LatestProjects } from "@/components/LatestProject";
import { OurCreativeProcessV2 } from "@/components/OurCreativeProcess";
import OurStory from "@/components/OurStory/OurStory";
import { Partners } from "@/components/Partners/Partners";
import { Services } from "@/components/ServicesV2";
import TestimonialV2 from "@/components/Testimonial/TestimonialV2";
import TextScroll from "@/components/TextScroll/TextScroll";
import { Metadata } from "next";
import {VideoBanner}  from "@/components/VideoBanner";
import DescriptivePara from "@/components/DescriptivePara/DescriptivePara";
import {WhyChooseUs} from "@/components/WhyChooseUs";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Residential and Commercial Interior Designers in Bangalore - Kreative Dezine Studio",
  description: "Get high quality residential and commercial interior designs from expertise designers of kreative design studio in Bangalore",
  icons: {
    icon: "https://ik.imagekit.io/yc3qb8x6t/kds/main/kds-logo.png"
  }
};


export default function Home() {

  return (
    <div className="flex flex-col gap-20 bg-[#F8F7F3] overflow-x-hidden">
      <End2EndWrapper className="h-[542px] lg:h-screen">
        <Header />
        <VideoBanner />
      </End2EndWrapper>
      <CustomContainer>
        <DescriptivePara />
        <LatestProjects />
        <Services />
        <Partners />
        <OurStory />
      </CustomContainer>
      <TestimonialV2 />
      <CustomContainer>
        <TextScroll />
        <Awards />
        <OurCreativeProcessV2 />
        <WhyChooseUs />
        <FAQ />
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
