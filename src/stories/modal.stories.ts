import type { Meta, StoryObj } from '@storybook/svelte';
import ModalStory from './ModalStory.svelte';

const meta = {
	title: 'Components/Modal',
	component: ModalStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'title',
				'titleSize',
				'size',
				'mainActionLabel',
				'secondaryActionLabel',
				'showActionBar',
				'contentText'
			]
		}
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Modal heading displayed in the close bar'
		},
		titleSize: {
			control: { type: 'select' },
			options: ['default', '56px', '40px', '32px', '16px'],
			description: 'Size of the title text (maps to heading scale)'
		},
		size: {
			control: { type: 'select' },
			options: ['wide', 'normal', 'narrow'],
			description: 'Controls the max-width of the modal panel'
		},
		mainActionLabel: {
			control: 'text',
			description: 'Label for the primary (solid) action button'
		},
		secondaryActionLabel: {
			control: 'text',
			description: 'Label for the secondary (outline) action button'
		},
		showActionBar: {
			control: 'boolean',
			description: 'Show or hide the action bar footer'
		},
		contentText: {
			control: 'text',
			description: 'Body text shown inside the scrollable content area'
		}
	},
	args: {
		title: 'Select the type of document',
		titleSize: '32px',
		size: 'normal',
		mainActionLabel: 'Main action',
		secondaryActionLabel: 'Secondary Action',
		showActionBar: true,
		contentText: 'Modal content goes here. Add any components or text inside the modal body.'
	}
} satisfies Meta<typeof ModalStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Wide: Story = {
	args: { size: 'wide', title: 'Wide modal' }
};

export const Narrow: Story = {
	args: { size: 'narrow', title: 'Narrow modal' }
};

export const NoTitle: Story = {
	name: 'No Title',
	args: { title: '', titleSize: 'default' }
};

export const NoActionBar: Story = {
	name: 'No Action Bar',
	args: { showActionBar: false }
};

export const SingleAction: Story = {
	name: 'Single Action',
	args: { secondaryActionLabel: '' }
};
