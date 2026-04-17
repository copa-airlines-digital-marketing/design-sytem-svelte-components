import type { Meta, StoryObj } from '@storybook/svelte';
import OverlineStory from './OverlineStory.svelte';

const meta = {
	title: 'Typography/Overline',
	component: OverlineStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['size', 'text']
		}
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['overline', 'overline-small'],
			description: 'Text size — both are uppercase and medium weight'
		},
		text: {
			control: 'text',
			description: 'Overline content'
		}
	},
	args: {
		size: 'overline',
		text: 'Special offer'
	}
} satisfies Meta<typeof OverlineStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'overline-small', text: 'Category label' } };
