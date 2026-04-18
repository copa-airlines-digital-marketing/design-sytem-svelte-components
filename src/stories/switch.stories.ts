import type { Meta, StoryObj } from '@storybook/svelte';
import SwitchStory from './SwitchStory.svelte';

const meta = {
	title: 'Components/Switch',
	component: SwitchStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['checked', 'disabled']
		}
	},
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Whether the switch is on (checked) or off'
		},
		disabled: {
			control: 'boolean',
			description: 'Disables interaction — applies cursor-not-allowed and reduced opacity'
		}
	},
	args: {
		checked: false,
		disabled: false
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
