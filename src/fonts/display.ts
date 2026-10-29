import { Cormorant_Garamond } from "next/font/google";

/** Display face for headings: a high-contrast serif that echoes the wordmark. */
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/** Kept for components that still import the old name. */
export const montserrat = display;
