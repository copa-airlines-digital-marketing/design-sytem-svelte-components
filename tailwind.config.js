/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [require('./tailwind-presets/index')],
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
};
