import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { FAQ } from "@/components/FAQ";
import FooterV2 from "@/components/Footer/FooterV2";
import CustomContainer from "@/components/Container/CustomContainer";

export const metadata: Metadata = {
  title: "Our Story | Inspacio Design Studio, Bangalore",
  description:
    "Meet Swati Panda and the story behind Inspacio, a Bangalore architecture and interior design studio shaping homes, offices and commercial spaces since its founding.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-brand-cream">
      <End2EndWrapper>
        <Header lightBackground={true} />
      </End2EndWrapper>
      <CustomContainer className="pt-28">
        {children}
        <FAQ />
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
