import type { Meta, StoryObj } from '@storybook/svelte';
import DatePickerStory from './DatePickerStory.svelte';

const meta = {
	title: 'Components/Date Picker',
	component: DatePickerStory,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		controls: {
			include: [
				'mode',
				'label',
				'mandatory',
				'helperText',
				'error',
				'disabled',
				'showInitialValue',
				'numberOfMonths'
			]
		}
	},
	argTypes: {
		mode: {
			control: 'select',
			options: ['single', 'range'],
			description: 'Single date picker or date range picker'
		},
		label: { control: 'text', description: 'Upper label for single date picker' },
		mandatory: { control: 'boolean', description: 'Shows required asterisk' },
		helperText: { control: 'text', description: 'Helper or error message below the field' },
		error: { control: 'boolean', description: 'Error state' },
		disabled: { control: 'boolean', description: 'Disabled state' },
		showInitialValue: { control: 'boolean', description: 'Starts with a selected date/range' },
		numberOfMonths: {
			control: { type: 'range', min: 1, max: 2, step: 1 },
			description: 'Months shown in range calendar'
		}
	},
	args: {
		mode: 'single',
		label: 'Fecha de viaje',
		mandatory: false,
		helperText: '',
		error: false,
		disabled: false,
		showInitialValue: false,
		numberOfMonths: 2
	}
} satisfies Meta<typeof DatePickerStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {};

export const WithValue: Story = {
	args: { showInitialValue: true }
};

export const DateRangePicker: Story = {
	args: {
		mode: 'range',
		helperText: 'Selecciona ida y regreso'
	}
};

export const DateRangeWithValue: Story = {
	args: {
		mode: 'range',
		showInitialValue: true
	}
};

export const Error: Story = {
	args: {
		mandatory: true,
		error: true,
		helperText: 'Debes seleccionar una fecha'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		showInitialValue: true
	}
};
