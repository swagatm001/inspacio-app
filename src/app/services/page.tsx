import React from "react";
import type { Metadata } from "next";
import { Services } from "@/components/ServicesV2";
import { OurCreativeProcessV2 } from "@/components/OurCreativeProcess";
import { FAQ } from "@/components/FAQ";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import CustomContainer from "@/components/Container/CustomContainer";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Interior Design Projects in Bangalore | Inspacio Portfolio",
        description: "Explore Inspacio’s interior design projects in Bangalore, featuring residential, commercial, architecture and turnkey project execution. View our portfolio.",
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