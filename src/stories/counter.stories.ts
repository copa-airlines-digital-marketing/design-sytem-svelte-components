import type { Meta, StoryObj } from '@storybook/svelte';
import CounterStory from './CounterStory.svelte';

const meta = {
	title: 'Components/Counter',
	component: CounterStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['value', 'min', 'max', 'step', 'disabled', 'error']
		}
	},
	argTypes: {
		value: {
			control: 'number',
			description: 'Current value (bindable)'
		},
		min: {
			control: 'number',
			description: 'Minimum value'
		},
		max: {
			control: 'number',
			description: 'Maximum value'
		},
		step: {
			control: 'number',
			description: 'Amount added or removed per click'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables both controls and greys out the value'
		},
		error: {
			control: 'boolean',
			description: 'Applies the error color to the increment and decrement controls'
		}
	},
	args: {
		value: 1,
		min: 0,
		max: 10,
		step: 1,
		disabled: false,
		error: false
	}
} satisfies Meta<typeof CounterStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AtMinimum: Story = {
	args: { value: 0, min: 0, max: 10 }
};

export const AtMaximum: Story = {
	args: { value: 10, min: 0, max: 10 }
};

export const StepTwo: Story = {
	name: 'Step 2',
	args: { value: 2, min: 0, max: 10, step: 2 }
};

export const Error: Story = {
	args: { value: 3, error: true }
};

export const Disabled: Story = {
	args: { value: 3, disabled: true }
};
