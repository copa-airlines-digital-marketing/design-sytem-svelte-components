import type { Meta, StoryObj } from '@storybook/svelte';
import PillStory from './PillStory.svelte';

const meta = {
	title: 'Components/Pill',
	component: PillStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['text', 'theme', 'outline', 'thickness', 'iconSide', 'statusClass']
		}
	},
	argTypes: {
		text: {
			control: 'text',
			description: 'Label text inside the pill'
		},
		theme: {
			control: 'radio',
			options: ['default', 'transparent'],
			description: 'default fills with primary color; transparent has no background'
		},
		outline: {
			control: 'boolean',
			description: 'Adds a common-white border'
		},
		thickness: {
			control: 'radio',
			options: ['default', 'slim'],
			description: 'Controls the caption font size inside the pill'
		},
		iconSide: {
			control: 'select',
			options: ['none', 'left', 'right'],
			description: 'Position of the icon slot'
		},
		statusClass: {
			control: 'text',
			description: 'Tailwind class to override the background color (e.g. bg-system-success)'
		}
	},
	args: {
		text: 'On time',
		theme: 'default',
		outline: false,
		thickness: 'default',
		iconSide: 'none',
		statusClass: ''
	}
} satisfies Meta<typeof PillStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
	args: { text: 'On time', statusClass: 'bg-system-success', iconSide: 'left' }
};

export const Warning: Story = {
	args: { text: 'Delayed', statusClass: 'bg-system-warning', iconSide: 'none' }
};

export const Error: Story = {
	args: { text: 'Cancelled', statusClass: 'bg-system-error', iconSide: 'right' }
};

export const Transparent: Story = {
	args: { theme: 'transparent', text: 'Economy', outline: true }
};

export const Slim: Story = {
	args: { thickness: 'slim', text: 'New' }
};

export const WithLeftIcon: Story = {
	name: 'With left icon',
	args: { iconSide: 'left', text: 'Confirmed' }
};

export const WithRightIcon: Story = {
	name: 'With right icon',
	args: { iconSide: 'right', text: 'Gate B12' }
};
