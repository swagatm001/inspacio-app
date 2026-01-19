import { Container } from "@/components/Container";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { Header } from "@/components/Header";
import FooterV2 from "@/components/Footer/FooterV2";
import CustomContainer from "@/components/Container/CustomContainer";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F8F7F3]">
      <End2EndWrapper>
        <Header lightBackground={true}/>
      </End2EndWrapper>
      {children}
      <FooterV2 />
    </div>
  );
}
