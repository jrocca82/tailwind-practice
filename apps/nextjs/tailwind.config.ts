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
        sans: ["Rubik", ...fontFamily.sans],
        mono: ["Rubik", ...fontFamily.mono],
      },
      colors: {
        'card': '#D7EBBA', // Light green
        'card-foreground': '#472836', // Dark maroon
        'primary': '#EBD494', // Beige
        'primary-foreground': '#472836', // Dark maroon
        'accent': '#9AD2CB' // Teal-ish
      }
    },
  },
} satisfies Config;
