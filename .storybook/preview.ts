import '../src/app.css';
import type { Preview } from '@storybook/svelte';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			toc: true
		},
		backgrounds: {
			default: 'white',
			values: [
				{ name: 'white', value: '#ffffff' },
				{ name: 'light grey', value: '#f5f5f5' },
				{ name: 'dark', value: '#0032A0' }
			]
		}
	}
};

export default preview;
