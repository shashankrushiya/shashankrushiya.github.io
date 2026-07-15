import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: { DEFAULT: "#12161B", soft: "#383F48" },
        paper: { DEFAULT: "#FAF7F0", panel: "#F1ECE0" },
        line: "#DFD7C6",
        muted: { DEFAULT: "#767E89", light: "#A8AEB7" },
        verified: { DEFAULT: "#28966C", bg: "#DEEFE5" },
        amber: { DEFAULT: "#C17F27", bg: "#F3E6D2" },
        dark: { DEFAULT: "#12161B", panel: "#1B2028", line: "#2B313A" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config 
