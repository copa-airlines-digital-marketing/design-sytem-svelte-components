import CMPresets from './tailwind-presets/dist/cmds-tailwind-styles.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [CMPresets],
	theme: {
		extend: {}
	}
};
