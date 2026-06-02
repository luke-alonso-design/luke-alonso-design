import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        cream: "var(--color-cream)",
        red: "var(--color-red)",
        dark: "var(--color-dark)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        subtitle: ["var(--font-subtitle)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
