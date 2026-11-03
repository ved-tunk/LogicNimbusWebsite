import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { base: c("bg"), base2: c("bg2"), fg: c("fg"), muted: c("muted"), line: c("line"), volt: c("volt"), dawn: c("dawn") },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { to: { transform: "none" } },
        fade: { to: { opacity: "1" } },
        slide: { to: { transform: "translateX(-50%)" } },
        ping2: { "70%": { boxShadow: "0 0 0 8px transparent" } },
        pulse2: { "0%": { boxShadow: "0 0 0 0 rgb(var(--volt) / .6)" }, "100%": { boxShadow: "0 0 0 22px rgb(var(--volt) / 0)" } },
      },
      animation: {
        rise: "rise 1s cubic-bezier(.2,.8,.2,1) forwards",
        fade: "fade 1s forwards",
        slide: "slide 40s linear infinite",
        ping2: "ping2 2s infinite",
        pulse2: "pulse2 1.4s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
