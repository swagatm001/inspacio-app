import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import FooterV2 from "@/components/Footer/FooterV2";
import { FAQ } from "@/components/FAQ";
import CustomContainer from "@/components/Container/CustomContainer";
import { GalleryCard } from "@/components/LatestProject/GalleryCard";
import type { I_Project } from "@/components/LatestProject/Gallery";
import { BlurImage } from "@/components/ui/BlurImage";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import BookFreeAppointment from "@/components/BookFreeAppointment/BookFreeAppointment";
import { sectors, sectorBySlug, sectorOf } from "@/constants/sectors";
import { projectsConstants } from "@/constants/projects";
import { blurFor } from "@/utils/blur";
import { breadcrumbJsonLd, localityOf, ORG_ID, absoluteUrl } from "@/utils/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/constants/services";

type Props = { params: { sector: string } };

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sector = sectorBySlug(params.sector);
  if (!sector) return { title: "Not found | Inspacio" };
  const hero = projectsConstants.find((p) => p.slug === sector.heroProject);
  return {
    title: sector.seoTitle,
    description: sector.seoDescription,
    alternates: { canonical: `/spaces/${sector.slug}` },
    openGraph: { title: sector.seoTitle, description: sector.seoDescription, images: hero ? [{ url: hero.thumbnail }] : undefined },
  };
}

export default function SectorPage({ params }: Props) {
  const sector = sectorBySlug(params.sector);
  if (!sector) notFound();

  const projects = projectsConstants.filter((p) => sectorOf(p) === sector.slug).map((p) => ({ ...p, thumbnailBlur: blurFor(p.thumbnail) })) as I_Project[];
  const hero = projectsConstants.find((p) => p.slug === sector.heroProject) ?? projectsConstants.find((p) => sectorOf(p) === sector.slug);
  const others = sectors.filter((s) => s.slug !== sector.slug);
  const localities = Array.from(new Set(projects.map((p) => localityOf(p.address)).filter(Boolean)));
  const stages = ["Conceptualization & Design", "Detailing & Documentation", "Execution & Supervision"].map((k) => services[k]).filter(Boolean);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/spaces/${sector.slug}#service`),
    name: `${sector.name} interior design and architecture`,
    serviceType: `${sector.name} interior design`,
    description: sector.seoDescription,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "Bengaluru" },
    url: absoluteUrl(`/spaces/${sector.slug}`),
  };

  return (
    <div className="bg-brand-cream">
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: sector.name, path: `/spaces/${sector.slug}` }])]} />
      <End2EndWrapper>
        <Header lightBackground={true} />
      </End2EndWrapper>

      <section className="pt-20 px-3 md:px-5">
        <div className="relative h-[56vh] min-h-[420px] max-h-[680px] overflow-hidden rounded-[28px] md:rounded-4xl bg-brand-ink text-white shadow-soft">
          {hero && <BlurImage src={hero.thumbnail} blurDataURL={blurFor(hero.thumbnail)} alt="" fill priority sizes="100vw" className="object-cover" />}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-24 pb-10 md:pb-14">
            <div className="max-w-6xl w-full mx-auto">
              <nav aria-label="Breadcrumb" className="font-body text-sm text-white/80 mb-4">
                <ol className="flex items-center gap-2">
                  <li><Link href="/projects" className="underline-offset-4 hover:underline">Projects</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{sector.name}</li>
                </ol>
              </nav>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light leading-[1.02] text-balance">{sector.name}</h1>
              <p className="font-body mt-3 text-base md:text-xl text-white/85">{sector.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <CustomContainer className="pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow number="" label="What we bring" />
            <p className="font-heading text-3xl md:text-4xl font-light leading-snug text-brand-ink text-balance">{sector.intro}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-2 lg:items-end">
            <p className="font-body text-sm text-brand-muted">Planning a {sector.name.toLowerCase()} project?</p>
            <BookFreeAppointment title="Book a free consultation" size="sm" />
          </div>
        </div>
      </CustomContainer>

      <CustomContainer className="py-10 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl md:text-[44px] leading-[1.05] font-normal text-brand-ink">
            {projects.length === 1 ? "Featured project" : `${projects.length} projects`}
          </h2>
          <Button href="/projects" variant="link" arrow>All projects</Button>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <GalleryCard key={p.slug} project={p} className={projects.length === 1 ? "md:col-span-2 lg:col-span-3 h-96 lg:h-[560px]" : i === 0 && projects.length % 3 === 1 ? "md:col-span-2 lg:col-span-3 h-96 lg:h-[520px]" : "h-80"} />
            ))}
          </div>
        ) : (
          <p className="font-body text-brand-muted">Projects in this sector are being photographed. Ask us about recent work.</p>
        )}
      </CustomContainer>

      <CustomContainer className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionEyebrow number="" label="How we work" />
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-brand-ink leading-tight">
              From concept to handover, one team
            </h2>
            {localities.length > 0 && (
              <p className="font-body text-base text-brand-muted mt-4">
                Recent {sector.name.toLowerCase()} work in {localities.join(", ")}.
              </p>
            )}
          </div>
          <ol className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-brand-sand bg-white p-6">
                <p className="font-body text-xs tabular-nums text-brand-orange mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-heading text-xl font-medium text-brand-ink mb-2">{s.title}</h3>
                <p className="font-body text-sm text-brand-body leading-relaxed">{s.paragraph[0]}</p>
              </li>
            ))}
          </ol>
        </div>
      </CustomContainer>

      <CustomContainer className="py-10">
        <p className="font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-brand-tan mb-5">Other spaces</p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/spaces/${s.slug}`} className="group flex flex-col gap-1 rounded-2xl border border-brand-sand bg-white px-5 py-4 transition hover:border-brand-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50">
                <span className="font-heading text-xl text-brand-ink group-hover:text-brand-brown">{s.name}</span>
                <span className="font-body text-sm text-brand-muted">{s.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CustomContainer>

      <CustomContainer>
        <FAQ />
      </CustomContainer>
      <FooterV2 />
    </div>
  );
}
