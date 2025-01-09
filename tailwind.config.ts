import type { Config } from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		backgroundImage: {
			"bg-img": "url('/images/bg-img.jpg')",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			keyframes: {
				appear: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				slide: {
					from: {
						transform: "translateX(100%)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				translate: {
					from: {
						transform: "translateY(20%)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
			animation: {
				appear: "appear 1s ease-in-out",
				slide: "slide 750ms ease-in-out",
				translate: "translate 2s ease-in-out forwards",
			},
		},
	},
	plugins: [],
} satisfies Config
