import React from "react";
import type { Metadata } from "next";
import { Services } from "@/components/ServicesV2";
import { OurCreativeProcessV2 } from "@/components/OurCreativeProcess";
import { FAQ } from "@/components/FAQ";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import CustomContainer from "@/components/Container/CustomContainer";
import { services } from "@/constants/services";
import { projectsConstants } from "@/constants/projects";
import { blurMapFor } from "@/utils/blur";
import { faqs } from "@/constants/faq";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Interior Design Services in Bangalore | Inspacio",
        description: "Concept design, detailing, on-site execution and sustainable design for homes, offices and commercial spaces. See how Inspacio takes a project from idea to handover.",
        alternates: { canonical: "/services" },
    };
}

export default function ServicesPage() {
    const slugs = Object.values(services).flatMap((s) => [...(s.relatedProjects ?? []), ...(s.sectorProjects ?? [])]);
    const thumbnails = projectsConstants.filter((p) => slugs.includes(p.slug)).map((p) => p.thumbnail);
    const blurMap = blurMapFor(thumbnails);
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    return (
        <div className="flex flex-col gap-28 md:gap-36 bg-brand-cream overflow-x-hidden pt-28">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <CustomContainer>
                <Services blurMap={blurMap} />
                <OurCreativeProcessV2 />
                <WhyChooseUs />
                <FAQ />
            </CustomContainer>
        </div>
    );
};