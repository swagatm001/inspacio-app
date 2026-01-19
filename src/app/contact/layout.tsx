import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { Header } from "@/components/Header"
import CustomContainer from "@/components/Container/CustomContainer";
import FooterV2 from "@/components/Footer/FooterV2";

export const metadata: Metadata = {
  title: "Contact Interior Designers in Bangalore | Inspacio Studio",
  description: "Visit Inspacio at Shivaji Nagar, Bengaluru. Call or email us for home interiors, office interiors, architecture and turnkey execution.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F8F7F3]"> 
      <End2EndWrapper>
        <Header lightBackground={true}/>
      </End2EndWrapper>
      <CustomContainer className="pt-20">
      <div>{children}</div>
    </CustomContainer>
    <FooterV2 />
    </div>
  );
}
