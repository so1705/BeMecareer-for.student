import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#201f1b",
        muted: "#6f675d",
        paper: "#fff8ef",
        coral: "#d66e4b",
        honey: "#f3c75b",
        sage: "#5b8c70",
        iris: "#6f63bf",
        mist: "#f2f4e9",
        skyglass: "#eef4ff",
        lilac: "#f0ecff",
        leaf: "#eaf5df"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(40, 49, 78, 0.12)",
        warm: "0 22px 70px rgba(77, 56, 40, 0.12)",
        lift: "0 22px 80px rgba(42, 61, 115, 0.16)",
        deep: "0 34px 110px rgba(32, 31, 27, 0.22)"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
