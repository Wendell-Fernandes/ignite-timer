/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'green-dark': '#015f43',
			green: '#00875F',
			'green-light': '#00B37E',
			'red-dark': '#CC2937',
			red: '#F03847',
			coal: '#09090A',
			gray1: '#121214',
			gray2: '#202024',
			gray3: '#29292E',
			gray4: '#7C7C8A',
			gray5: '#7C7C8A',
			gray6: '#C4C4CC',
			gray7: '#E1E1E6',
			white: '#ffffff',
			transparent: 'transparent'
		},
		fontFamily: {
			Roboto: ['Roboto', 'sans-serif'],
			'Roboto-mono': ['Roboto Mono', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
}
