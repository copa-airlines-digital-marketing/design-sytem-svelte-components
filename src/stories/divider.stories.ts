import type { Meta, StoryObj } from '@storybook/svelte';
import Divider from '../lib/components/divider/divider.svelte';

const meta = {
	title: 'Components/Divider',
	component: Divider,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['lineType', 'opaque', 'orientation', 'spacing', 'theme']
		}
	},
	argTypes: {
		lineType: {
			control: 'radio',
			options: ['solid', 'dashed'],
			description: 'Line style'
		},
		opaque: {
			control: 'boolean',
			description: 'false renders at 50% opacity; true is fully opaque'
		},
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Direction of the divider line'
		},
		spacing: {
			control: 'boolean',
			description: 'Adds my-1 vertical margin when true'
		},
		theme: {
			control: 'radio',
			options: ['light', 'dark'],
			description: 'light uses grey-300; dark uses grey-50'
		}
	},
	args: {
		lineType: 'solid',
		opaque: false,
		orientation: 'horizontal',
		spacing: true,
		theme: 'light'
	}
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dashed: Story = {
	args: { lineType: 'dashed' }
};

export const Opaque: Story = {
	args: { opaque: true }
};

export const Dark: Story = {
	parameters: {
		backgrounds: { default: 'dark' }
	},
	args: { theme: 'dark', opaque: true }
};
