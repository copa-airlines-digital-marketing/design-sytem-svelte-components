import type { Meta, StoryObj } from '@storybook/svelte';
import AutocompleteStory from './AutocompleteStory.svelte';

const meta = {
	title: 'Components/Autocomplete',
	component: AutocompleteStory,
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
			description: 'Placeholder shown in the input'
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
			description: 'Disables the entire autocomplete'
		},
		optionCount: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
			description: 'Number of options — drag above 4 to see the scroll bar'
		},
		showLeftIcon: {
			control: 'boolean',
			description: 'Show a search icon to the left of the input'
		}
	},
	args: {
		placeholder: 'Buscar destino...',
		label: 'Destino',
		mandatory: false,
		helperText: '',
		error: false,
		disabled: false,
		optionCount: 10,
		showLeftIcon: false
	}
} satisfies Meta<typeof AutocompleteStory>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — full list, type to filter. */
export const Default: Story = {};

/** With left search icon. */
export const WithIcon: Story = {
	args: { showLeftIcon: true }
};

/** With helper text. */
export const WithHelper: Story = {
	args: { helperText: 'Escribe el nombre del aeropuerto o ciudad' }
};

/** Error state. */
export const Error: Story = {
	args: { error: true, helperText: 'Selecciona un destino válido' }
};

/** Mandatory field. */
export const Mandatory: Story = {
	args: { mandatory: true }
};

/** Few options — no scroll. */
export const Short: Story = {
	args: { optionCount: 4 }
};

/** Many options — scrollbar visible. */
export const Long: Story = {
	args: { optionCount: 10 }
};

/** Disabled. */
export const Disabled: Story = {
	args: { disabled: true }
};

/** Empty options list. */
export const Empty: Story = {
	args: { optionCount: 0, label: 'Ciudad', placeholder: 'Sin ciudades disponibles' }
};
