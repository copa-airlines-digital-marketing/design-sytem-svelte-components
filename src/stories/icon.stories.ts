import type { Meta, StoryObj } from '@storybook/svelte';
import IconStory from './IconStory.svelte';

const allIcons = [
	'Globe',
	'Phone',
	'Carrot',
	'Check',
	'Close',
	'Walk',
	'Camera',
	'History',
	'Time',
	'Ticket',
	'Email',
	'Facebook',
	'Instagram',
	'Tiktok',
	'X',
	'Youtube',
	'Whatsapp'
] as const;

const meta = {
	title: 'Components/Icon',
	component: IconStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['icon', 'size', 'color', 'direction']
		}
	},
	argTypes: {
		icon: {
			control: 'select',
			options: allIcons,
			description: 'Which icon to display'
		},
		size: {
			control: 'text',
			description: 'Tailwind size class applied to the icon (e.g. size-6, size-8)'
		},
		color: {
			control: 'text',
			description: 'Tailwind text/fill color class (e.g. text-primary, text-grey-600)'
		},
		direction: {
			control: 'radio',
			options: ['up', 'down', 'left', 'right'],
			description: 'Rotation direction — only applies to the Carrot icon'
		}
	},
	args: {
		icon: 'Globe',
		size: 'size-8',
		color: 'text-primary',
		direction: 'down'
	}
} satisfies Meta<typeof IconStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CarrotDown: Story = {
	name: 'Carrot — down',
	args: { icon: 'Carrot', direction: 'down' }
};

export const CarrotRight: Story = {
	name: 'Carrot — right',
	args: { icon: 'Carrot', direction: 'right' }
};

export const SocialWhatsapp: Story = {
	name: 'Social — WhatsApp',
	args: { icon: 'Whatsapp', color: 'text-grey-700' }
};

export const SocialFacebook: Story = {
	name: 'Social — Facebook',
	args: { icon: 'Facebook', color: 'text-grey-700' }
};

export const FilledTicket: Story = {
	name: 'Filled — Ticket',
	args: { icon: 'Ticket', color: 'text-primary' }
};
