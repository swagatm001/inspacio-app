import { SlidesPerViewCarousel } from "@/components/Carousel";
import { SingleCarouselWithAutoplay } from "@/components/Carousel/SingleCarouselWithAutoplay";
import { ContactForm } from "@/components/Contact";
import { Container } from "@/components/Container";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { homePageContants } from "@/constants/home";
import { playfair } from "@/fonts/playfair";
import { uuidv4 } from "@/utils/uuid4";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  const heroSlides = homePageContants.hero.slides
    .map((slide) => ({ ...slide, id: uuidv4() }))
    .map((slide) => (
      <div key={slide.id} className="h-screen w-full relative">
        <Image
          src={slide.imageUrl}
          alt={slide.altText}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-10 lg:px-32">
          <p
            dangerouslySetInnerHTML={{ __html: slide.tagLine }}
            className={clsx(
              playfair.className,
              "text-4xl lg:text-6xl text-white font-bold leading-normal"
            )}
          ></p>
        </div>
      </div>
    ));

  const servicesSlides = homePageContants.services.slides.map((slide) => (
    <div
      key={uuidv4()}
      className="bg-white h-96 min-w-28 lg:min-w-64 relative overflow-hidden rounded-lg"
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
            "text-white p-6 text-4xl drop-shadow-md font-semibold w-2/3",
            playfair.className
          )}
          dangerouslySetInnerHTML={{ __html: slide.caption }}
        ></p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-20">
      <End2EndWrapper className="h-screen">
        <SingleCarouselWithAutoplay slides={heroSlides} />
      </End2EndWrapper>
      <Container>
        <div className="flex flex-col gap-20">
          <div className="w-full h-96">
            <SlidesPerViewCarousel slides={servicesSlides} />
          </div>
          <Portfolio />
        </div>
        <div className="w-full h-96 relative my-20 rounded-lg overflow-hidden">
          <Image
            src="/kds/main/banner.jpg"
            fill
            alt="Experience Excellent Quality & Timely Delivery with Kreative Dezine Studio"
            className="object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-10 bg-black bg-opacity-40">
            <div className="flex flex-col justify-center items-center text-white text-2xl lg:text-3xl px-10">
              <p className={clsx("text-center")}>
                Experience Excellent Quality & Timely Delivery with
              </p>
              <p>Kreative Dezine Studio</p>
            </div>
            <button
              type="button"
              className="bg-gray-700 text-white rounded-lg px-4 py-2"
            >
              Book a consultation
            </button>
          </div>
        </div>
        <ContactForm />
        <Footer />
      </Container>
    </div>
  );
}
