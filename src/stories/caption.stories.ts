import type { Meta, StoryObj } from '@storybook/svelte';
import CaptionStory from './CaptionStory.svelte';

const meta = {
	title: 'Typography/Caption',
	component: CaptionStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['size', 'variant', 'text']
		}
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['caption-large', 'caption', 'caption-small', 'caption-tiny'],
			description: 'Text size — all are semibold'
		},
		variant: {
			control: 'select',
			options: ['caption', 'caption-secondary', 'caption-invert', 'caption-invert-secondary'],
			description: 'Color variant'
		},
		text: {
			control: 'text',
			description: 'Caption content'
		}
	},
	args: {
		size: 'caption',
		variant: 'caption',
		text: 'Economy · 1 stop · 4h 30m'
	}
} satisfies Meta<typeof CaptionStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = { args: { size: 'caption-large', text: 'Gate B12' } };
export const Small: Story = { args: { size: 'caption-small', text: '12 seats left' } };
export const Tiny: Story = { args: { size: 'caption-tiny', text: 'View details' } };
export const Secondary: Story = { args: { variant: 'caption-secondary' } };
export const Invert: Story = {
	parameters: { backgrounds: { default: 'dark' } },
	args: { variant: 'caption-invert' }
};
