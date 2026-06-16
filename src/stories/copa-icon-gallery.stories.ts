import type { Meta, StoryObj } from '@storybook/svelte';
import CopaIconGallery from './CopaIconGallery.svelte';

const meta = {
	title: 'Components/Icon/Copa',
	component: CopaIconGallery,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof CopaIconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {};
