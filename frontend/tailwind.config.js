/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Reused the mockup's Tailwind design tokens for the product frontend.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#000000", 70: "#4A4A4A", 40: "#8A8A8A" },
        line: "#E4E4E4",
        surface: { DEFAULT: "#FFFFFF", alt: "#F7F7F7" },
        orange: "#EF7C00",
        blue: "#003D7C",
        alert: "#B3261E",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Georgia", "serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "12px", btn: "10px", pill: "999px" },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
