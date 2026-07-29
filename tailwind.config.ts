import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ... biarkan colors yang sudah ada
        "bg-primary": "#FAFAF7",
        "bg-secondary": "#F4F3EE",
        "bg-card": "#FFFFFF",
        "bg-dark": "#0A0E1F",
        "bg-dark-2": "#131830",
        "text-primary": "#0A0E1F",
        "text-secondary": "#4A5071",
        "text-muted": "#8B92A8",
        "text-on-dark": "#FAFAF7",
        "brand-navy": "#1A2B6B",
        "brand-blue": "#2B4FBF",
        "accent-electric": "#4F8EF7",
        "accent-pop": "#FF6B35",
        "accent-success": "#10B981",
        "border-light": "rgba(10, 14, 31, 0.08)",
        "border-dark": "rgba(250, 250, 247, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.9rem", { lineHeight: "1.6" }],
        meta: ["0.7rem", { lineHeight: "1.5", letterSpacing: "0.2em" }],
        "meta-sm": ["0.65rem", { lineHeight: "1.5", letterSpacing: "0.15em" }],
      },
      spacing: {
        section: "clamp(80px, 10vw, 120px)",
      },
      maxWidth: {
        wide: "1400px",
        content: "1200px",
        narrow: "900px",
        editorial: "800px",
      },
      // ✨ TAMBAHAN BARU
      aspectRatio: {
        portfolio: "1920 / 1000",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        xs: "4px",
      },
      keyframes: {
        pulse: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
        "float-bounce": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "load-bar": { "0%": { width: "0%" }, "100%": { width: "100%" } },
      },
      animation: {
        pulse: "pulse 2s infinite",
        "float-bounce": "float-bounce 3s ease-in-out infinite",
        "load-bar": "load-bar 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;