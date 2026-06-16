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
			options: [
				'AnunciosImportantes',
				'AvionAterrizando',
				'AvionDespegando',
				'CheckIn',
				'Conexion',
				'Destinos',
				'EstadoDelVuelo',
				'PanamaStopover',
				'VueloDomestico'
			],
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

export const Destinos: Story = {
	args: { pictogram: 'Destinos' }
};

export const EstadoDelVuelo: Story = {
	args: { pictogram: 'EstadoDelVuelo' }
};

export const PanamaStopover: Story = {
	args: { pictogram: 'PanamaStopover' }
};

export const AvionAterrizando: Story = {
	args: { pictogram: 'AvionAterrizando' }
};

export const AvionDespegando: Story = {
	args: { pictogram: 'AvionDespegando' }
};

export const VueloDomestico: Story = {
	args: { pictogram: 'VueloDomestico' }
};

export const Monochrome: Story = {
	args: { style: 'monochrome' }
};

export const Large: Story = {
	args: { size: 'size-40' }
};
