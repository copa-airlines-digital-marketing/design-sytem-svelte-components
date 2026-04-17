import type { Meta, StoryObj } from '@storybook/svelte';
import AvatarStory from './AvatarStory.svelte';

const meta = {
	title: 'Components/Avatar',
	component: AvatarStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['size', 'stroke', 'src', 'alt', 'fallbackText']
		}
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['tiny', 'petit', 'normal', 'big', 'huge'],
			description: 'Controls the diameter and fallback font size'
		},
		stroke: {
			control: 'boolean',
			description: 'Adds a primary-ultralight border ring around the avatar'
		},
		src: {
			control: 'text',
			description: 'Image URL — leave empty to show the fallback'
		},
		alt: {
			control: 'text',
			description: 'Alt text for the image'
		},
		fallbackText: {
			control: 'text',
			description: 'Text shown when the image is loading or fails (e.g. initials)'
		}
	},
	args: {
		size: 'normal',
		stroke: true,
		src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo',
		alt: 'User avatar',
		fallbackText: 'AB'
	}
} satisfies Meta<typeof AvatarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tiny: Story = { args: { size: 'tiny' } };
export const Petit: Story = { args: { size: 'petit' } };
export const Big: Story = { args: { size: 'big' } };
export const Huge: Story = { args: { size: 'huge' } };

export const WithoutStroke: Story = {
	name: 'Without stroke',
	args: { stroke: false }
};

export const FallbackOnly: Story = {
	name: 'Fallback (no image)',
	args: { src: '', fallbackText: 'JD' }
};
