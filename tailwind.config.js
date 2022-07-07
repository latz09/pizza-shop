/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				logo: ['Mouse Memoirs', 'sans-serif'],
				base: ['Roboto Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
