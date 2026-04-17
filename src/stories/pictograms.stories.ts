import type { Meta, StoryObj } from '@storybook/svelte';
import PictogramStory from './PictogramStory.svelte';

const meta = {
	title: 'Components/Pictograms',
	component: PictogramStory,
	tags: ['autodocs'],
	parameters: {
		controls: {
			include: ['pictogram', 'style', 'size']
		}
	},
	argTypes: {
		pictogram: {
			control: 'select',
			options: ['AnunciosImportantes', 'CheckIn', 'Conexion'],
			description: 'Which pictogram to display'
		},
		style: {
			control: 'select',
			options: ['background', 'transparent', 'monochrome'],
			description: 'Color treatment — monochrome uses grey-600'
		},
		size: {
			control: 'text',
			description: 'Tailwind size class (e.g. size-24, size-32)'
		}
	},
	args: {
		pictogram: 'CheckIn',
		style: 'background',
		size: 'size-24'
	}
} satisfies Meta<typeof PictogramStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AnunciosImportantes: Story = {
	args: { pictogram: 'AnunciosImportantes' }
};

export const Conexion: Story = {
	args: { pictogram: 'Conexion' }
};

export const Monochrome: Story = {
	args: { style: 'monochrome' }
};

export const Large: Story = {
	args: { size: 'size-40' }
};
