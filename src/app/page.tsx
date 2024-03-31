import { SlidesPerViewCarousel } from "@/components/Carousel";
import { SingleCarouselWithAutoplay } from "@/components/Carousel/SingleCarouselWithAutoplay";
import { Container } from "@/components/Container";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { Portfolio } from "@/components/Portfolio";
import { homePageContants } from "@/constants/home";
import { uuidv4 } from "@/utils/uuid4";
import Image from "next/image";

export default function Home() {
  const slides = homePageContants.hero.slides
    .map((slide) => ({ ...slide, id: uuidv4() }))
    .map((slide) => (
      <div key={slide.id}>
        <Image src={slide.imageUrl} alt={slide.altText} fill={true} className="object-fit" />
      </div>
    ));

  return (
    <div className="flex flex-col gap-20">
      <End2EndWrapper className="h-screen">
        <SingleCarouselWithAutoplay slides={slides} />
      </End2EndWrapper>
      <Container>
        <div className="flex flex-col gap-20">
          <div className="w-full h-96 px-6">
            <SlidesPerViewCarousel />
          </div>
          <Portfolio />
        </div>
      </Container>
    </div>
  );
}
