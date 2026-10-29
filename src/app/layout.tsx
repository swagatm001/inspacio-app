import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { helvetica } from "@/fonts/helvetica";
import { display } from "@/fonts/display";
import { satoshi } from "@/fonts/satoshi";
import { SITE_URL, siteConstants } from "@/constants/site";
import { FloatingActions } from "@/components/ContactActions/FloatingActions";
import { MobileActionBar } from "@/components/ContactActions/MobileActionBar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Interior Designers in Bangalore | Inspacio",
  description:
    "Inspacio is a Bangalore-based architecture and interior design studio delivering homes, offices and commercial spaces from concept to turnkey execution.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConstants.name,
    images: [
      {
        url: siteConstants.ogImage,
        width: 1200,
        height: 630,
        alt: "An interior designed by Inspacio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(helvetica.className, display.variable, satoshi.variable)}>
        {/* Bottom padding keeps the last content clear of the mobile action bar */}
        <main className="pb-[72px] lg:pb-0">
          <div id="modal-portal" />
          {children}
        </main>
        <FloatingActions />
        <MobileActionBar />
      </body>
    </html>
  );
}
