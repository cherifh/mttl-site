import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Port Horizon" palette — deep ocean navy, a bright teal accent,
        // and a mustard gold that echoes the Mohzain logo's globe/arrow.
        navy: "#0A1F2B",
        ocean: "#061420",
        teal: "#0E7490",
        mint: "#2DD4BF",
        mustard: "#E6A317",
        mustardDeep: "#C2850A",
        sand: "#F7F5F0",
        ink: "#13222B",
        steel: "#5B7682",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
      },
      backgroundImage: {
        "port-gradient":
          "radial-gradient(60% 80% at 15% 15%, rgba(45,212,191,0.18), transparent 60%), radial-gradient(70% 70% at 85% 25%, rgba(255,122,89,0.22), transparent 60%), linear-gradient(135deg, #061420 0%, #0A1F2B 55%, #0E3A46 100%)",
        "mustard-gradient": "linear-gradient(135deg, #E6A317 0%, #C2850A 100%)",
        "mesh-glow":
          "radial-gradient(40% 60% at 20% 30%, rgba(45,212,191,0.25), transparent 70%), radial-gradient(50% 50% at 80% 70%, rgba(255,122,89,0.2), transparent 70%)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "ping-slow": "ping-slow 2.8s cubic-bezier(0,0,0.2,1) infinite",
        "dash-flow": "dash-flow 6s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45,212,191,0.35)",
        "glow-mustard": "0 0 40px -10px rgba(230,163,23,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
