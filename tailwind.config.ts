import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        // Values live in globals.css as RGB triplets so the palette can be changed in one place.
        brand: {
          orange: "rgb(var(--c-orange) / <alpha-value>)",
          "orange-dark": "rgb(var(--c-orange-dark) / <alpha-value>)",
          brown: "rgb(var(--c-brown) / <alpha-value>)",
          tan: "rgb(var(--c-tan) / <alpha-value>)",
          ink: "rgb(var(--c-ink) / <alpha-value>)",
          body: "rgb(var(--c-body) / <alpha-value>)",
          muted: "rgb(var(--c-muted) / <alpha-value>)",
          faint: "rgb(var(--c-faint) / <alpha-value>)",
          sand: "rgb(var(--c-sand) / <alpha-value>)",
          cream: "rgb(var(--c-cream) / <alpha-value>)",
          wash: "rgb(var(--c-wash) / <alpha-value>)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgb(26 20 17 / 0.35)",
        lift: "0 30px 70px -30px rgb(26 20 17 / 0.45)",
        glow: "0 14px 34px -12px rgb(232 120 58 / 0.55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brown-texture-pattern": "url('/images/testimonial-background.jpg')",
        "white-texture-pattern": "url('/images/join-our-club.jpg')",
        "contact-us-texture-pattern": "url('/images/contact-us-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
