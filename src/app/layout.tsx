import "./globals.css";
import { helvetica } from "@/fonts/helvetica";
import Link from "next/link";
import Image from "next/image";

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
          {children}
        </main>
        {/* Floating Instagram Icon */}
        <Link
          href="https://www.instagram.com/inspaciodesignstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 bg-[#885739] p-2 rounded-full drop-shadow-lg"
        >
          <Image
            src="/images/instagram-white.svg"
            alt="Instagram"
            width={26}
            height={26}
            className="drop-shadow-lg"
          />
        </Link>
      </body>
    </html>
  );
}
