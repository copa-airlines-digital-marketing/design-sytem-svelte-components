import CMPresets from './tailwind-presets/src/index';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [CMPresets],
	theme: {
		extend: {}
	}
};
