import type { Meta, StoryObj } from '@storybook/svelte';
import RadioStory from './RadioStory.svelte';

const meta = {
	title: 'Components/Radio',
	component: RadioStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['selected', 'disabled', 'showLabels']
		}
	},
	argTypes: {
		selected: {
			control: 'select',
			options: ['a', 'b', 'c', ''],
			description: 'Currently selected value'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables all items in the group'
		},
		showLabels: {
			control: 'boolean',
			description: 'Show text labels next to each radio button'
		}
	},
	args: {
		selected: 'a',
		disabled: false,
		showLabels: true
	}
} satisfies Meta<typeof RadioStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoneSelected: Story = {
	args: { selected: '' }
};

export const NoLabels: Story = {
	args: { showLabels: false }
};

export const DisabledUnselected: Story = {
	args: { disabled: true, selected: '' }
};

export const DisabledWithSelection: Story = {
	args: { disabled: true, selected: 'b' }
};
