import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
				"home-hero-img": "url('/assets/home/desktop/image-hero.jpg')",
			},
    },
  },
} satisfies Config

export default config