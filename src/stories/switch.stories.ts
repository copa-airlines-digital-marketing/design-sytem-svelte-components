import type { Meta, StoryObj } from '@storybook/svelte';
import SwitchStory from './SwitchStory.svelte';

const meta = {
	title: 'Components/Switch',
	component: SwitchStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['checked', 'disabled', 'offLabel', 'onLabel']
		}
	},
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Whether the switch is on (checked) or off'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables interaction and applies cursor-not-allowed with reduced opacity'
		},
		offLabel: {
			control: 'text',
			description: 'Optional label that sets the switch to off when clicked'
		},
		onLabel: {
			control: 'text',
			description: 'Optional label that sets the switch to on when clicked'
		}
	},
	args: {
		checked: false,
		disabled: false,
		offLabel: 'Off',
		onLabel: 'On'
	}
} satisfies Meta<typeof SwitchStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };
export const DisabledOff: Story = {
	name: 'Disabled (Off)',
	args: { checked: false, disabled: true }
};
export const DisabledOn: Story = { name: 'Disabled (On)', args: { checked: true, disabled: true } };
