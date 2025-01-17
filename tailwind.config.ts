import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { default as TailwindCssAnimate } from "tailwindcss-animate";
import type { PluginAPI } from "tailwindcss/types/config";

const customUtilities = plugin(function ({ addUtilities }: PluginAPI) {
  const newUtilities = {
    ".container-1": {
      "@apply px-6 md:px-24": {},
    },
    ".container-section": {
      "@apply container-1 mt-28 md:mt-40 flex flex-col items-center justify-center":
        {},
    },
    ".section-title": {
      "@apply font-bold text-2xl md:text-4xl text-center": {},
    },
    ".section-description": {
      "@apply mt-4 md:mt-5 font-medium text-dark-active text-base md:text-xl text-center":
        {},
    },
  };

  addUtilities(newUtilities);
});

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "1.75rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "dark-hover": "#959595",
        "dark-active": "#707070",
        darker: "#575757",
      },
      borderRadius: {
        xxl: "calc(var(--radius) * 3)",
        xl: "calc(var(--radius) * 2)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [TailwindCssAnimate, customUtilities],
} satisfies Config;
