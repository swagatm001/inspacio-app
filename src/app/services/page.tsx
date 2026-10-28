import React from "react";
import type { Metadata } from "next";
import { Services } from "@/components/ServicesV2";
import { OurCreativeProcessV2 } from "@/components/OurCreativeProcess";
import { FAQ } from "@/components/FAQ";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import CustomContainer from "@/components/Container/CustomContainer";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Interior Design Services in Bangalore | Inspacio",
        description: "Concept design, detailing, on-site execution and sustainable design for homes, offices and commercial spaces. See how Inspacio takes a project from idea to handover.",
        alternates: { canonical: "/services" },
    };
}

export default function ServicesPage() {

    return (
        <div className="flex flex-col gap-20 bg-[#F8F7F3] overflow-x-hidden pt-28">
            <CustomContainer>
                <Services />
                <OurCreativeProcessV2 />
                <WhyChooseUs />
                <FAQ />
            </CustomContainer>
        </div>
    );
};