/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-atkinson-hyperlegible)"],
				header: ["var(--font-inter)"],
				mono: ["var(--font-jetbrains-mono)"]
			}
		}
	},
	plugins: []
};
