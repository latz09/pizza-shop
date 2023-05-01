/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},

		colors: {
			// primary: '#FF1D46',
			primary: '#9A1618',
			secondary: '#588C17',
			dark: '#450001',
			light: '#FFE3E3',
			white: '#FFFFFF',
			black: '#000000',
		},
		fontFamily: {
			tinos: ['Tinos', 'serif'],
			mulish: ['Mulish', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
		},
	},
	plugins: [],
};
