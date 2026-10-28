import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import CustomContainer from "@/components/Container/CustomContainer";
import FooterV2 from "@/components/Footer/FooterV2";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found | Inspacio",
};

export default function NotFound() {
  return (
    <div className="bg-brand-cream min-h-screen flex flex-col">
      <End2EndWrapper>
        <Header lightBackground={true} />
      </End2EndWrapper>
      <CustomContainer className="pt-36 pb-24 flex-1">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-brand-tan mb-4">404</p>
          <h1 className="font-heading text-3xl md:text-5xl font-medium text-brand-ink mb-4">We couldn&apos;t find that page</h1>
          <p className="font-body text-lg text-brand-body mb-10">
            The link may be out of date, or the project may have moved. Have a look at our recent work instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/projects" variant="primary" arrow>
              Browse projects
            </Button>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </div>
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
