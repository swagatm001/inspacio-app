import "./globals.css";
import { End2EndWrapper } from "@/components/End2EndWrapper";
import { Header } from "@/components/Header";
import { helvetica } from "@/fonts/helvetica";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "https://ik.imagekit.io/yc3qb8x6t/kds/main/kds-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <main>
          <div id="modal-portal" />
          <End2EndWrapper>
            <Header />
          </End2EndWrapper>
          {children}
        </main>
      </body>
    </html>
  );
}
