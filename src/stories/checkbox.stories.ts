import type { Meta, StoryObj } from '@storybook/svelte';
import CheckboxStory from './CheckboxStory.svelte';

const meta = {
	title: 'Components/Checkbox',
	component: CheckboxStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['checked', 'disabled', 'label']
		}
	},
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Initial checked state'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables interaction — applies cursor-not-allowed and reduced opacity'
		},
		label: {
			control: 'text',
			description: 'Label text displayed next to the checkbox'
		}
	},
	args: {
		checked: false,
		disabled: false,
		label: 'Accept terms and conditions'
	}
} satisfies Meta<typeof CheckboxStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = {
	name: 'Disabled + Checked',
	args: { checked: true, disabled: true }
};
