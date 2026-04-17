import type { Meta, StoryObj } from '@storybook/svelte';
import GridStory from './GridStory.svelte';

const distributionOptions = ['full', 'half', 'four', 'third', '4 / 8', '8 / 4'];

const meta = {
	title: 'Layout/Grid',
	component: GridStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['col1Distribution', 'col2Distribution', 'showThirdColumn', 'col3Distribution']
		},
		layout: 'fullscreen'
	},
	argTypes: {
		col1Distribution: {
			control: 'select',
			options: distributionOptions,
			description: 'Column span for the first item'
		},
		col2Distribution: {
			control: 'select',
			options: distributionOptions,
			description: 'Column span for the second item'
		},
		showThirdColumn: {
			control: 'boolean',
			description: 'Show a third column'
		},
		col3Distribution: {
			control: 'select',
			options: distributionOptions,
			description: 'Column span for the optional third item'
		}
	},
	args: {
		col1Distribution: 'half',
		col2Distribution: 'half',
		showThirdColumn: false,
		col3Distribution: 'four'
	}
} satisfies Meta<typeof GridStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoEqualColumns: Story = {
	name: 'Two equal columns (half / half)',
	args: { col1Distribution: 'half', col2Distribution: 'half' }
};

export const ThreeColumns: Story = {
	name: 'Three columns',
	args: {
		col1Distribution: 'four',
		col2Distribution: 'four',
		showThirdColumn: true,
		col3Distribution: 'four'
	}
};

export const AsymmetricLayout: Story = {
	name: 'Asymmetric (4/8)',
	args: { col1Distribution: '4 / 8', col2Distribution: '4 / 8' }
};

export const FullWidth: Story = {
	name: 'Full width',
	args: { col1Distribution: 'full', col2Distribution: 'full' }
};
