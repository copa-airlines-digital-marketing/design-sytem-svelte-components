import type { Meta, StoryObj } from '@storybook/svelte';
import SelectStory from './SelectStory.svelte';

const meta = {
	title: 'Components/Select',
	component: SelectStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'placeholder',
				'label',
				'mandatory',
				'helperText',
				'error',
				'disabled',
				'optionCount',
				'showLeftIcon'
			]
		}
	},
	argTypes: {
		placeholder: {
			control: 'text',
			description: 'Text shown in the trigger when no value is selected'
		},
		label: {
			control: 'text',
			description: 'Upper label. Leave empty to hide'
		},
		mandatory: {
			control: 'boolean',
			description: 'Shows a red * next to the label'
		},
		helperText: {
			control: 'text',
			description: 'Hint or error message below the field'
		},
		error: {
			control: 'boolean',
			description: 'Switches border + helper icon to error-red'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the entire select'
		},
		optionCount: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
			description: 'Number of options — drag above 4 to see the scroll bar appear'
		},
		showLeftIcon: {
			control: 'boolean',
			description: 'Show a plane icon to the left in the trigger'
		}
	},
	args: {
		placeholder: 'Selecciona una opción',
		label: 'Clase de vuelo',
		mandatory: false,
		helperText: '',
		error: false,
		disabled: false,
		optionCount: 4,
		showLeftIcon: false
	}
} satisfies Meta<typeof SelectStory>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default state — 4 options, no scroll. */
export const Default: Story = {};

/** Long list — 7+ options, custom scrollbar visible. */
export const Long: Story = {
	args: { optionCount: 7 }
};

/** With helper text below the field. */
export const WithHelper: Story = {
	args: { helperText: 'Selecciona la cabina que prefieres' }
};

/** Error state — red border and error icon. */
export const Error: Story = {
	args: { error: true, helperText: 'Debes seleccionar una cabina' }
};

/** Mandatory field — asterisk next to label. */
export const Mandatory: Story = {
	args: { mandatory: true }
};

/** With left icon in the trigger. */
export const WithIcon: Story = {
	args: { showLeftIcon: true }
};

/** Disabled select. */
export const Disabled: Story = {
	args: { disabled: true }
};

/** Empty options list. */
export const Empty: Story = {
	args: { optionCount: 0, label: 'Destino', placeholder: 'No hay destinos disponibles' }
};
