import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@acme/tailwind-config/web";

export default {
  content: [...baseConfig.content, "../../packages/ui/**/*.{ts,tsx}"],
  presets: [baseConfig],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        serif: ["Lora", ...fontFamily.serif],
        mono: ["Tangerine", ...fontFamily.mono]
      },
      colors: {
        'primary': '#9966CC',
        'secondary': '#76E0D5',
        'accent': '#FFAB96',
        "white": "#FFF3DE"
      }
    },
  },
} satisfies Config;
