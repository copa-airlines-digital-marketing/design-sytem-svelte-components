import type { Meta, StoryObj } from '@storybook/svelte';
import DimmerStory from './DimmerStory.svelte';

const meta = {
	title: 'Components/Dimmer',
	component: DimmerStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['color', 'opacity']
		}
	},
	argTypes: {
		color: {
			control: 'select',
			options: ['grey', 'white'],
			description: 'Background color of the overlay'
		},
		opacity: {
			control: 'select',
			options: ['60', '80'],
			description: 'Overlay opacity — 60% (soft) or 80% (strong)'
		}
	},
	args: {
		color: 'grey',
		opacity: '80'
	}
} satisfies Meta<typeof DimmerStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreyStrong: Story = {
	args: { color: 'grey', opacity: '80' }
};

export const GreySoft: Story = {
	args: { color: 'grey', opacity: '60' }
};

export const WhiteStrong: Story = {
	args: { color: 'white', opacity: '80' }
};

export const WhiteSoft: Story = {
	args: { color: 'white', opacity: '60' }
};
