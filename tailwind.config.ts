import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15130f",
          2: "#201c17",
          3: "#2b2620",
        },
        steel: {
          DEFAULT: "#9aa3aa",
          light: "#dfe2e4",
        },
        paper: {
          DEFAULT: "#f3f1ec",
          2: "#e9e6de",
        },
        ember: {
          DEFAULT: "#c8481f",
          dark: "#9e3616",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(200,72,31,.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(200,72,31,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(200,72,31,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.4s infinite",
        marquee: "marquee 90s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
