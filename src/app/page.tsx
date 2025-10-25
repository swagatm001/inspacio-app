import Awards from "@/components/Awards/Awards";
import { SingleCarouselWithAutoplay } from "@/components/Carousel/SingleCarouselWithAutoplay";
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
import { homePageContants } from "@/constants/home";
import { montserrat } from "@/fonts/montserrat";
import { playfair } from "@/fonts/playfair";
import { uuidv4 } from "@/utils/uuid4";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import {VideoBanner}  from "@/components/VideoBanner";

export const metadata: Metadata = {
  title: "Residential and Commercial Interior Designers in Bangalore - Kreative Dezine Studio",
  description: "Get high quality residential and commercial interior designs from expertise designers of kreative design studio in Bangalore",
  icons: {
    icon: "https://ik.imagekit.io/yc3qb8x6t/kds/main/kds-logo.png"
  }
};


export default function Home() {

  return (
    <div className="flex flex-col gap-20">
      <End2EndWrapper className="h-[542px] lg:h-screen">
        <VideoBanner />
      </End2EndWrapper>
      <CustomContainer>
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
        <FAQ />
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
