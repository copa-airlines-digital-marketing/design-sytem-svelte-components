import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const isTest = !!process.env.VITEST;

export default defineConfig({
	// Tailwind's Vite plugin uses a CSS Proxy that is incompatible with happy-dom.
	// Tests only check class name strings produced by tv(), so CSS processing is not needed.
	plugins: [...(isTest ? [] : [tailwindcss()]), sveltekit()],
	server: {
		fs: {
			allow: ['./tailwind-presets/']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'happy-dom',
		setupFiles: ['src/test-setup.ts']
	}
});
