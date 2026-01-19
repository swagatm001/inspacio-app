import "./globals.css";
import { helvetica } from "@/fonts/helvetica";

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
      </body>
    </html>
  );
}
