import type { Meta, StoryObj } from '@storybook/svelte';
import AccordionStory from './AccordionStory.svelte';

const meta = {
	title: 'Components/Accordion',
	component: AccordionStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: [
				'separatorPosition',
				'item1Title',
				'item1Content',
				'item2Title',
				'item2Content',
				'item3Title',
				'item3Content'
			]
		}
	},
	argTypes: {
		separatorPosition: {
			control: 'radio',
			options: ['top', 'bottom'],
			description: 'Where the grey-200 border appears on each trigger row'
		},
		item1Title: { control: 'text', description: 'Title of item 1' },
		item1Content: { control: 'text', description: 'Content of item 1' },
		item2Title: { control: 'text', description: 'Title of item 2' },
		item2Content: { control: 'text', description: 'Content of item 2' },
		item3Title: { control: 'text', description: 'Title of item 3' },
		item3Content: { control: 'text', description: 'Content of item 3' }
	},
	args: {
		separatorPosition: 'top',
		item1Title: 'What documents do I need?',
		item1Content: 'You will need a valid passport and your booking confirmation.',
		item2Title: 'Can I change my flight?',
		item2Content: 'Yes, changes are allowed up to 24 hours before departure.',
		item3Title: 'How do I check in online?',
		item3Content: 'Online check-in opens 24 hours before your scheduled departure.'
	}
} satisfies Meta<typeof AccordionStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SeparatorBottom: Story = {
	name: 'Separator at bottom',
	args: { separatorPosition: 'bottom' }
};
