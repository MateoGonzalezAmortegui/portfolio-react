import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primaryRed: "#CC2D4A",
				Blues: "#06b6d4",
				Gray1: "#D1D5DB",
				Gray2: "#9ca3af",
				Gray3: "#374151",
				Gray4: "#1F2937",
				whites: "#FFFFFF",
				blacks: "#000000",
				purples: "#9333ea",
			},
		},
	},
	plugins: [],
}
export default config
