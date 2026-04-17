import type { Meta, StoryObj } from '@storybook/svelte';
import InformativeBoxStory from './InformativeBoxStory.svelte';

const meta = {
	title: 'Components/InformativeBox',
	component: InformativeBoxStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'alignment',
				'orientation',
				'iconSize',
				'titleTheme',
				'descriptionTheme',
				'iconName',
				'title',
				'description'
			]
		}
	},
	argTypes: {
		alignment: {
			control: 'radio',
			options: ['left', 'center', 'right'],
			description: 'Aligns all content within the card'
		},
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal'],
			description: 'vertical stacks icon above text; horizontal places icon to the left'
		},
		iconSize: {
			control: 'select',
			options: ['tiny', 'normal', 'big', 'huge'],
			description: 'Size of the icon in the head area'
		},
		titleTheme: {
			control: 'radio',
			options: ['normal', 'invert'],
			description: 'normal = primary color; invert = white — for dark backgrounds'
		},
		descriptionTheme: {
			control: 'radio',
			options: ['normal', 'invert'],
			description: 'normal = grey-600; invert = white — for dark backgrounds'
		},
		iconName: {
			control: 'select',
			options: ['Globe', 'Phone', 'Check'],
			description: 'Icon to display in the head area'
		},
		title: {
			control: 'text',
			description: 'Card title'
		},
		description: {
			control: 'text',
			description: 'Card description text'
		}
	},
	args: {
		alignment: 'left',
		orientation: 'vertical',
		iconSize: 'normal',
		titleTheme: 'normal',
		descriptionTheme: 'normal',
		iconName: 'Globe',
		title: 'Global network',
		description: 'Fly to over 80 destinations across the Americas.'
	}
} satisfies Meta<typeof InformativeBoxStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
	args: { orientation: 'horizontal', iconName: 'Check', title: 'Online check-in' }
};

export const Centered: Story = {
	args: { alignment: 'center', iconSize: 'big' }
};

export const BigIcon: Story = {
	name: 'Big icon',
	args: { iconSize: 'big', iconName: 'Phone', title: 'Contact us' }
};
