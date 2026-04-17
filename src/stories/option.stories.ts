import type { Meta, StoryObj } from '@storybook/svelte';
import OptionStory from './OptionStory.svelte';

const meta = {
	title: 'Components/Option',
	component: OptionStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['count', 'disabled', 'showLeftIcon', 'showRightIcon']
		}
	},
	argTypes: {
		count: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
			description: 'Number of options in the list — drag to see scroll kick in above 4 items'
		},
		disabled: {
			control: 'boolean',
			description: 'Disable all option items'
		},
		showLeftIcon: {
			control: 'boolean',
			description: 'Show left icon on every option'
		},
		showRightIcon: {
			control: 'boolean',
			description: 'Show right icon (checkmark) on every option'
		}
	},
	args: {
		count: 4,
		disabled: false,
		showLeftIcon: false,
		showRightIcon: false
	}
} satisfies Meta<typeof OptionStory>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 4 items — content fits, no scrollbar. */
export const Short: Story = {
	args: { count: 4 }
};

/** 7 items — exceeds 336px maxHeight, scrollbar appears. */
export const Long: Story = {
	args: { count: 7 }
};

/** 0 items — shows the empty state ("Sin resultados."). */
export const Empty: Story = {
	args: { count: 0 }
};

/** Long list with both icons. */
export const LongWithIcons: Story = {
	args: { count: 7, showLeftIcon: true, showRightIcon: true }
};

/** Disabled items. */
export const Disabled: Story = {
	args: { count: 4, disabled: true }
};
