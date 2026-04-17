import type { Meta, StoryObj } from '@storybook/svelte';
import LinkStory from './LinkStory.svelte';

const meta = {
	title: 'Typography/Link',
	component: LinkStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['variant', 'href', 'text']
		}
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['link', 'link-invert', 'link-secondary'],
			description: 'Color variant'
		},
		href: {
			control: 'text',
			description: 'Link destination'
		},
		text: {
			control: 'text',
			description: 'Link label'
		}
	},
	args: {
		variant: 'link',
		href: '#',
		text: 'View all destinations'
	}
} satisfies Meta<typeof LinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: 'link-secondary', text: 'Sign in' } };
export const Invert: Story = {
	parameters: { backgrounds: { default: 'dark' } },
	args: { variant: 'link-invert', text: 'Learn more' }
};
