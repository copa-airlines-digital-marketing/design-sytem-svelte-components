import type { Meta, StoryObj } from '@storybook/svelte';
import InputStory from './InputStory.svelte';

const meta = {
	title: 'Components/Input',
	component: InputStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'value',
				'placeholder',
				'label',
				'mandatory',
				'helperText',
				'type',
				'error',
				'disabled',
				'showLeftIcon',
				'showRightIcon'
			]
		}
	},
	argTypes: {
		value: { control: 'text', description: 'Bindable input value' },
		placeholder: { control: 'text', description: 'Placeholder text' },
		label: { control: 'text', description: 'Upper label' },
		mandatory: { control: 'boolean', description: 'Show red * asterisk' },
		helperText: { control: 'text', description: 'Helper text below the field' },
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
			description: 'HTML input type'
		},
		error: { control: 'boolean', description: 'Error state — red border + red helper icon' },
		disabled: { control: 'boolean', description: 'Disabled state' },
		showLeftIcon: { control: 'boolean', description: 'Show search icon on the left' },
		showRightIcon: { control: 'boolean', description: 'Show chevron icon on the right' }
	},
	args: {
		value: '',
		placeholder: 'Placeholder',
		label: 'Label',
		mandatory: false,
		helperText: 'Helper Text',
		type: 'text',
		error: false,
		disabled: false,
		showLeftIcon: false,
		showRightIcon: false
	}
} satisfies Meta<typeof InputStory>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default idle state with label and helper text. */
export const Default: Story = {};

/** Mandatory field — shows red asterisk next to label. */
export const Mandatory: Story = {
	args: { mandatory: true }
};

/** Error state — red border, error icon in helper text. */
export const Error: Story = {
	args: { error: true, mandatory: true, helperText: 'This field is required' }
};

/** Disabled state — grey background, not interactive. */
export const Disabled: Story = {
	args: { disabled: true, value: 'Existing value', mandatory: true }
};

/** No label, no helper text — minimal variant. */
export const Minimal: Story = {
	args: { label: '', helperText: '' }
};

/** With left icon (search). */
export const WithLeftIcon: Story = {
	args: { showLeftIcon: true, placeholder: 'Search...' }
};

/** With right icon (chevron — as used for select). */
export const WithRightIcon: Story = {
	args: { showRightIcon: true }
};

/** Both icons. */
export const WithBothIcons: Story = {
	args: { showLeftIcon: true, showRightIcon: true, placeholder: 'Search...' }
};

/** Password type input. */
export const Password: Story = {
	args: { type: 'password', placeholder: '••••••••', label: 'Password', mandatory: true }
};
