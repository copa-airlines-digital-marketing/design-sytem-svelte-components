import type { Meta, StoryObj } from '@storybook/svelte';
import NavTabStory from './NavTabStory.svelte';

const meta = {
	title: 'Components/NavTab',
	component: NavTabStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['label', 'subtitle', 'type', 'active']
		}
	},
	argTypes: {
		label: {
			control: 'text',
			description: 'Tab label text'
		},
		subtitle: {
			control: 'text',
			description: 'Optional small text above the label'
		},
		type: {
			control: 'select',
			options: ['primary', 'invert'],
			description: 'Color scheme — primary for light backgrounds, invert for dark'
		},
		active: {
			control: 'boolean',
			description: 'Whether this tab is currently selected (shows the coloured indicator)'
		}
	},
	args: {
		label: 'Nav Tab',
		subtitle: '',
		type: 'primary',
		active: false
	}
} satisfies Meta<typeof NavTabStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
	args: { active: true }
};

export const WithSubtitle: Story = {
	args: { subtitle: 'Subtitle', active: false }
};

export const ActiveWithSubtitle: Story = {
	args: { subtitle: 'Subtitle', active: true }
};

export const InvertIdle: Story = {
	args: { type: 'invert', active: false },
	parameters: { backgrounds: { default: 'dark' } }
};

export const InvertActive: Story = {
	args: { type: 'invert', active: true },
	parameters: { backgrounds: { default: 'dark' } }
};
