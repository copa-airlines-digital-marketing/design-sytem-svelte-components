import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { tv } from '../../../index.js';
import AnunciosImportantes from './anuncios-importantes.svelte';
import CheckIn from './check-in.svelte';
import Conexion from './conexion.svelte';

const pictogramVariants = tv({
	variants: {
		style: {
			background: 'fill-primary',
			transparent: 'fill-primary',
			monochrome: 'fill-grey-600'
		}
	}
});

type Pictogram = HTMLAttributes<HTMLElement> & {
	style?: VariantProps<typeof pictogramVariants>['style'];
	customcn?: (...inputs: ClassValue[]) => string;
};

const Tiquetes = {
	Conexion
};

export type { Pictogram };

export { pictogramVariants, AnunciosImportantes, CheckIn, Tiquetes };
