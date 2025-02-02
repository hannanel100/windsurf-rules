import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00DDB3",
          hover: "#00B392",
          light: "rgba(0, 221, 179, 0.1)",
        },
        border: {
          DEFAULT: "#2A2A2A",
          light: "#E5E7EB",
        },
      },
      borderColor: {
        DEFAULT: "#2A2A2A",
      },
    },
  },
  plugins: [],
} satisfies Config;
