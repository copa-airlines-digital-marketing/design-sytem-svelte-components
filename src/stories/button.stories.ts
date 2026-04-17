import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonStory from './ButtonStory.svelte';

const meta = {
	title: 'Components/Button',
	component: ButtonStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['label', 'variant', 'size', 'disabled']
		}
	},
	argTypes: {
		label: {
			control: 'text',
			description: 'Button label text'
		},
		variant: {
			control: 'select',
			options: [
				'solid-primary-main',
				'solid-primary-light',
				'outline-primary-main',
				'outline-invert',
				'transparent-primary-main',
				'link',
				'link-invert'
			],
			description: 'Visual style of the button'
		},
		size: {
			control: 'select',
			options: ['slim', 'default', 'large', 'giant', 'fancy-big', 'fancy-small', 'link'],
			description: 'Button size — controls padding, font size and icon space'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state — applies cursor-not-allowed and greyed styles'
		}
	},
	args: {
		label: 'Book now',
		variant: 'solid-primary-main',
		size: 'default',
		disabled: false
	}
} satisfies Meta<typeof ButtonStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SolidPrimaryLight: Story = {
	name: 'Solid Primary Light',
	args: { variant: 'solid-primary-light', label: 'Learn more' }
};

export const Outline: Story = {
	args: { variant: 'outline-primary-main', label: 'Learn more' }
};

export const Transparent: Story = {
	args: { variant: 'transparent-primary-main', label: 'See details' }
};

export const LinkVariant: Story = {
	name: 'Link',
	args: { variant: 'link', size: 'link', label: 'View all flights' }
};

export const Large: Story = {
	args: { size: 'large', label: 'Continue' }
};

export const Slim: Story = {
	args: { size: 'slim', label: 'Select' }
};

export const Disabled: Story = {
	args: { disabled: true, label: 'Unavailable' }
};
