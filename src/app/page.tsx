import { Banner } from "@/components/Banner";
import { Boardmembers } from "@/components/BoardMembers/BoardMembers";
import { SlidesPerViewCarousel } from "@/components/Carousel";
import { SingleCarouselWithAutoplay } from "@/components/Carousel/SingleCarouselWithAutoplay";
import { ContactForm } from "@/components/Contact";
import { Container } from "@/components/Container";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { OurCreativeProcess } from "@/components/OurCreativeProcess";
import { Partners } from "@/components/Partners/Partners";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { homePageContants } from "@/constants/home";
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
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-10 bg-black bg-opacity-30 lg:px-32">
          <p
            className={clsx(
              playfair.className,
              "text-3xl sm:text-4xl lg:text-6xl text-white leading-normal"
            )}
          >
            <span>Concept to Creation</span>
            <br />
            <span className="lg:text-7xl font-bold">Designing Timeless</span>
            <br />
            <span>Spaces</span>
          </p>
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
      <Container>
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="w-full h-[180px] lg:h-[414px]">
            <SlidesPerViewCarousel slides={servicesSlides} />
          </div>
          <Portfolio />
        </div>
        <Banner />
        <Services />
        <Partners />
        <OurCreativeProcess />
        <Boardmembers />
        <ContactForm />
        <FAQ />
        <Footer />
      </Container>
    </div>
  );
}
