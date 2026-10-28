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
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#F36730",
          "orange-dark": "#D9552A",
          brown: "#885739",
          tan: "#A6836E",
          ink: "#3D3834",
          sand: "#E0D9C9",
          cream: "#F8F7F3",
          wash: "#F3EEE8",
        },
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
