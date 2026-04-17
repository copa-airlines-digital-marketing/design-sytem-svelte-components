import type { Meta, StoryObj } from '@storybook/svelte';
import HeadingStory from './HeadingStory.svelte';

const meta = {
	title: 'Typography/Heading',
	component: HeadingStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['tag', 'variant', 'text']
		}
	},
	argTypes: {
		tag: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			description: 'HTML element rendered — independent of the visual variant'
		},
		variant: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'display-big', 'display', 'display-small', 'display-tiny'],
			description: 'Visual style — controls size, weight and color'
		},
		text: {
			control: 'text',
			description: 'Heading content'
		}
	},
	args: {
		tag: 'h2',
		variant: 'h2',
		text: 'Explore our destinations'
	}
} satisfies Meta<typeof HeadingStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = { args: { tag: 'h1', variant: 'h1', text: 'Page title' } };
export const H2: Story = { args: { tag: 'h2', variant: 'h2', text: 'Section heading' } };
export const H3: Story = { args: { tag: 'h3', variant: 'h3', text: 'Sub-section heading' } };
export const H4: Story = { args: { tag: 'h4', variant: 'h4', text: 'Card title' } };
export const DisplayBig: Story = {
	name: 'Display Big',
	args: { tag: 'h1', variant: 'display-big', text: 'Copa Airlines' }
};
export const Display: Story = {
	args: { tag: 'h2', variant: 'display', text: 'Travel with us' }
};
