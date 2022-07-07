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
			colors: {
				pizzaRed: {
					300: '#E52C06',
					400: '#CC2705',
					500: '#CC2705',
					600: '#991D04',
				},
			},
		},
	},
	plugins: [],
};
