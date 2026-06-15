import type { StorybookConfig } from '@storybook/sveltekit';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));
const tailwindPresetsRoot = fileURLToPath(new URL('../tailwind-presets', import.meta.url));

const config: StorybookConfig = {
	stories: ['../src/stories/**/*.stories.@(js|ts)'],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			optimizeDeps: {
				// Pre-bundle heavy deps so Vite doesn't re-transform them on every cold start
				include: [
					'bits-ui',
					'tailwind-variants',
					'clsx',
					'svelte',
					'svelte/store',
					'svelte/motion',
					'svelte/transition',
					'runed',
					'svelte-toolbelt'
				]
			},
			server: {
				fs: {
					allow: [workspaceRoot, tailwindPresetsRoot]
				},
				// Warm up the most-used modules immediately after Vite starts
				warmup: {
					clientFiles: ['../src/stories/*.stories.ts', '../src/stories/*.svelte']
				}
			}
		});
	}
};

export default config;
