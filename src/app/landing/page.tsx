import Awards from "@/components/Awards/Awards";
import { Banner } from "@/components/Banner";
import { Boardmembers } from "@/components/BoardMembers/BoardMembers";
import { SlidesPerViewCarousel } from "@/components/Carousel";
import { SingleCarouselWithAutoplay } from "@/components/Carousel/SingleCarouselWithAutoplay";
import { ContactForm } from "@/components/Contact";
import CustomContainer from "@/components/Container/CustomContainer";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { FAQ } from "@/components/FAQ";
import  FooterV2 from "@/components/Footer/FooterV2";
import { LatestProjects } from "@/components/LatestProject";
import { OurCreativeProcessV2 } from "@/components/OurCreativeProcess";
import OurStory from "@/components/OurStory/OurStory";
import { Partners } from "@/components/Partners/Partners";
import { Portfolio } from "@/components/Portfolio";
import ProjectTransformation from "@/components/ProjectTransformation/ProjectTransformation";
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

export const metadata: Metadata = {
  title: "Residential and Commercial Interior Designers in Bangalore - Kreative Dezine Studio",
  description: "Get high quality residential and commercial interior designs from expertise designers of kreative design studio in Bangalore",
  icons: {
    icon: "https://ik.imagekit.io/yc3qb8x6t/kds/main/kds-logo.png"
  }
};


export default function Home() {
  const heroSlides = homePageContants.hero.slides
    .map((slide) => ({ ...slide, id: uuidv4() }))
    .map((slide) => (
      <div key={slide.id} className="h-full w-full relative">
        <Image
          src={slide.imageUrl}
          alt={slide.altText}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 w-full flex items-center px-10 bg-black bg-opacity-10 lg:px-16 justify-between align-center pb-10 pt-10">
          <p
            className={clsx(
              montserrat.className,
              "text-3xl sm:text-4xl lg:text-5xl text-white inline-block"
            )}
          >
            <span>You Dream, we <span className="italic">Create</span></span>
          </p>
          <button className="inline-flex gap-3 items-center align-center border border-[#A4A4A4] rounded-md px-[20px] py-[13px] m-0 text-base/[13px] text-[#3D3834] bg-gradient-to-r from-[#E0D9C9] to-[#F8F7F3]">
                <span className="font-medium">Make Your Dream Come True</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
          </button>
        </div>
      </div>
    ));

  const servicesSlides = homePageContants.services.slides.map((slide) => (
    <div
      key={uuidv4()}
      className="bg-white h-full min-w-28 lg:min-w-64 relative overflow-hidden rounded-lg"
    >
      <Image
        src={slide.imageUrl}
        fill
        alt={slide.altText}
        className="rounded-lg transition duration-[3000ms] hover:scale-150"
      />
      <div className="absolute bottom-0 left-0 rounded-b-lg bg-black bg-opacity-20 w-full">
        <p
          className={clsx(
            "text-white p-2 lg:p-6 text-base lg:text-4xl drop-shadow-md font-semibold w-2/3",
            playfair.className
          )}
          dangerouslySetInnerHTML={{ __html: slide.caption }}
        ></p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-20">
      <End2EndWrapper className="h-[542px] lg:h-screen">
      <SingleCarouselWithAutoplay slides={heroSlides} />
      </End2EndWrapper>
      <CustomContainer>
        <LatestProjects />
        <Services />
        <Partners />
        <OurStory />
        <ProjectTransformation />
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
