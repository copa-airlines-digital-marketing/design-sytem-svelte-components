import type { Preview } from '@storybook/svelte';

import '../src/output.css'

const preview: Preview = {
	parameters: {
    backgrounds: {
      default: 'White',
      values: [
        {
          name: 'White',
          value: '#fff',
        },
        {
          name: 'Dark',
          value: '#001A66',
        },
        {
          name: 'Paper',
          value: '#FCFCFC',
        },
        {
          name: 'Light Blue',
          value: '#EFF5FF',
        },
        {
          name: 'Grey 100',
          value: '#EFEFEE',
        },
        {
          name: 'Grey 75',
          value: '#F9F9F8',
        },
      ],
    },
    docs: {
      toc: true,
    },
    viewport: {
      viewports: {
        'xs': {name: 'Extra Small', styles: { width: '320px', height: '568px'}, type: 'mobile'},
        'sm': {name: 'Small', styles: { width: '600px', height: '1080px'}, type: 'tablet'},
        'md': {name: 'Medium', styles: { width: '960px', height: '540px'}, type: 'desktop'},
        'lg': {name: 'Large', styles: { width: '1367px', height: '768px'}, type: 'desktop'},

      },
      defaultViewport: 'iphone14promax',
    },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
	}
};

export default preview;
