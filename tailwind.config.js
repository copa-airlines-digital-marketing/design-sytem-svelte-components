import CMPresets from './tailwind-presets/dist/cmds-tailwind-styles';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [CMPresets],
	theme: {
		extend: {}
	}
};
