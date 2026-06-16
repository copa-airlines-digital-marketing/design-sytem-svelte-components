import ButtonGroupStory from './ButtonGroupStory.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
	title: 'Components/Button Group',
	component: ButtonGroupStory,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'select',
			options: ['first', 'second', 'third', 'fourth']
		},
		label: {
			control: 'text'
		},
		showLabel: {
			control: 'boolean'
		},
		disabled: {
			control: 'boolean'
		},
		size: {
			control: 'select',
			options: ['small', 'default', 'large']
		},
		items: {
			control: 'select',
			options: [2, 3, 4]
		}
	},
	args: {
		value: 'second',
		label: 'Label',
		showLabel: true,
		disabled: false,
		size: 'default',
		items: 2
	}
} satisfies Meta<typeof ButtonGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThreeItems: Story = {
	args: {
		items: 3,
		value: 'first'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};
