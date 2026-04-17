import type { Meta, StoryObj } from '@storybook/svelte';
import BodyStory from './BodyStory.svelte';

const meta = {
	title: 'Typography/Body',
	component: BodyStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['size', 'variant', 'text']
		}
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['body-large', 'body', 'body-small'],
			description: 'Text size'
		},
		variant: {
			control: 'select',
			options: ['body', 'body-emphasis', 'body-invert', 'body-invert-emphasis'],
			description: 'Color variant'
		},
		text: {
			control: 'text',
			description: 'Body content'
		}
	},
	args: {
		size: 'body',
		variant: 'body',
		text: 'The quick brown fox jumps over the lazy dog. Book your next flight with Copa Airlines.'
	}
} satisfies Meta<typeof BodyStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = { args: { size: 'body-large' } };
export const Small: Story = { args: { size: 'body-small' } };
export const Emphasis: Story = { args: { variant: 'body-emphasis' } };
export const Invert: Story = {
	parameters: { backgrounds: { default: 'dark' } },
	args: { variant: 'body-invert' }
};
