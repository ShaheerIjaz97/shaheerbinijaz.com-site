/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // "Quiet engineering" palette — cool off-white + cool charcoal + saturated indigo.
        // Deliberately distinct from Hamid's warm-cream+lime stack so the two sites read as
        // different people, not two skins of one template.
        canvas: {
          DEFAULT: "#FAFAF9", // page background, cool near-white
          deep: "#F2F2F0",    // recessed cards
          rule: "rgba(14, 17, 22, 0.10)",
          rule2: "rgba(14, 17, 22, 0.18)",
        },
        ink: {
          DEFAULT: "#0E1116", // primary text on canvas (cool charcoal)
          800: "#1A1E25",
          700: "#2E343E",
          500: "#5B6371",
          400: "#7B8290",
          300: "#A3A8B2",
          200: "#C7CBD2",
          100: "#E5E7EB",
        },
        // Saturated indigo accent — used sparingly. Borrowed feeling: Stripe Press.
        indigo: {
          DEFAULT: "#3A45D3",
          deep:    "#2A33B0",
          dim:     "#5A65E0",
          glow:    "rgba(58, 69, 211, 0.10)",
        },
        // Optional muted secondaries for subtle highlight backgrounds (not used as text)
        sky:  "#E3E9F6",
        sand: "#EDE7DA",
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', "ui-serif", "Georgia", "serif"],
        sans:  ['"Inter Variable"', "system-ui", "sans-serif"],
        mono:  ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Same display scale family as Hamid's but tuned a half-step smaller —
        // editorial design relies on generous whitespace, not maximal type.
        "display-2xl": ["clamp(3.25rem, 8.4vw, 6.75rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-xl":  ["clamp(2.5rem, 6vw, 5rem)",       { lineHeight: "1.02", letterSpacing: "-0.028em" }],
        "display-lg":  ["clamp(2rem, 4.4vw, 3.5rem)",     { lineHeight: "1.08", letterSpacing: "-0.022em" }],
        "display-md":  ["clamp(1.625rem, 3vw, 2.375rem)", { lineHeight: "1.14", letterSpacing: "-0.018em" }],
      },
      maxWidth: {
        container: "1180px",
        prose: "640px",
      },
      backgroundImage: {
        // Faint grid for technical breakouts. Used very sparingly.
        grid: "linear-gradient(rgba(14,17,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,17,22,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "rule-in": "ruleIn 800ms ease-out forwards",
      },
      keyframes: {
        ruleIn: {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
};
