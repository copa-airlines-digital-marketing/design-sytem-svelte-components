import type { Meta, StoryObj } from '@storybook/svelte';
import SliderStory from './SliderStory.svelte';

const meta = {
	title: 'Components/Slider',
	component: SliderStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'value',
				'min',
				'max',
				'step',
				'disabled',
				'label',
				'minLabel',
				'maxLabel',
				'showTooltip',
				'formattedValue'
			]
		}
	},
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
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
			description: 'Step increment'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the slider'
		},
		label: {
			control: 'text',
			description: 'Label text shown in the bottom bar'
		},
		minLabel: {
			control: 'text',
			description: 'Minimum range label shown in the bottom bar'
		},
		maxLabel: {
			control: 'text',
			description: 'Maximum range label shown in the bottom bar'
		},
		showTooltip: {
			control: 'boolean',
			description: 'Whether to show the floating value tooltip above the thumb'
		},
		formattedValue: {
			control: 'text',
			description: 'Override tooltip text (leave empty to show raw number)'
		}
	},
	args: {
		value: 30,
		min: 0,
		max: 100,
		step: 1,
		disabled: false,
		label: '',
		minLabel: '',
		maxLabel: '',
		showTooltip: true,
		formattedValue: ''
	}
} satisfies Meta<typeof SliderStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: { label: 'Price', minLabel: '0 USD', maxLabel: '5,000 USD', value: 30 }
};

export const FormattedTooltip: Story = {
	args: {
		value: 1500,
		min: 0,
		max: 5000,
		step: 100,
		label: 'Price',
		minLabel: '0 USD',
		maxLabel: '5,000 USD',
		formattedValue: '1,500 USD'
	}
};

export const AtMinimum: Story = {
	args: { value: 0 }
};

export const AtMaximum: Story = {
	args: { value: 100 }
};

export const NoTooltip: Story = {
	args: { showTooltip: false }
};

export const Disabled: Story = {
	args: { disabled: true, value: 40 }
};

export const Steps: Story = {
	args: { step: 10, value: 50, label: 'Stops', minLabel: '0', maxLabel: '10' }
};
