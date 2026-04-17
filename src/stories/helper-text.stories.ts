import type { Meta, StoryObj } from '@storybook/svelte';
import HelperText from '../lib/components/helper-text/helper-text.svelte';

const meta = {
	title: 'Components/HelperText',
	component: HelperText,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['text', 'type', 'size', 'color']
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#1a1a2e' }
			]
		}
	},
	argTypes: {
		text: {
			control: 'text',
			description: 'Label text'
		},
		type: {
			control: 'inline-radio',
			options: ['regular', 'error'],
			description: 'Icon color and semantic meaning'
		},
		size: {
			control: 'inline-radio',
			options: ['default', 'small'],
			description: 'Text size — 14px (default) or 12px (small)'
		},
		color: {
			control: 'inline-radio',
			options: ['default', 'inverted'],
			description: 'Text color — grey-600 (default) or white (inverted)'
		}
	},
	args: {
		text: 'Helper Text',
		type: 'regular',
		size: 'default',
		color: 'default'
	}
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularDefault: Story = {};

export const RegularSmall: Story = {
	args: { size: 'small' }
};

export const ErrorDefault: Story = {
	args: { type: 'error' }
};

export const ErrorSmall: Story = {
	args: { type: 'error', size: 'small' }
};

export const RegularInverted: Story = {
	args: { color: 'inverted' },
	parameters: { backgrounds: { default: 'dark' } }
};

export const ErrorInverted: Story = {
	args: { type: 'error', color: 'inverted' },
	parameters: { backgrounds: { default: 'dark' } }
};
