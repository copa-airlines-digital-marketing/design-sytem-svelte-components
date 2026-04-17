import type { Meta, StoryObj } from '@storybook/svelte';
import PictureStory from './PictureStory.svelte';

const meta = {
	title: 'Components/Picture',
	component: PictureStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['screen', 'desktopSrc', 'mobileSrc', 'alt']
		},
		layout: 'fullscreen'
	},
	argTypes: {
		screen: {
			control: 'radio',
			options: ['sm', 'md', 'lg'],
			description:
				'Breakpoint at which the desktop source activates (maps to min-width media query)'
		},
		desktopSrc: {
			control: 'text',
			description: 'Image URL shown at the chosen breakpoint and above'
		},
		mobileSrc: {
			control: 'text',
			description: 'Fallback image URL for smaller screens'
		},
		alt: {
			control: 'text',
			description: 'Alt text for the img fallback element'
		}
	},
	args: {
		screen: 'md',
		desktopSrc: 'https://placehold.co/800x400/0032A0/FFFFFF?text=Desktop+800x400',
		mobileSrc: 'https://placehold.co/400x300/0032A0/FFFFFF?text=Mobile+400x300',
		alt: 'Responsive image example'
	}
} satisfies Meta<typeof PictureStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AtSm: Story = { name: 'Activates at sm', args: { screen: 'sm' } };
export const AtLg: Story = { name: 'Activates at lg', args: { screen: 'lg' } };
