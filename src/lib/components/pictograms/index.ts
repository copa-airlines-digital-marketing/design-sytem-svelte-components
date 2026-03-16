import type { ClassValue } from 'clsx';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassNameValue } from 'tailwind-merge';
import { tv } from '../../index.js';

type ClassInput = ClassValue | ClassNameValue | null | undefined;
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

type Pictogam = HTMLAttributes<HTMLElement> & {
	style?: VariantProps<typeof pictogramVariants>['style'];
	customcn?: (...inputs: ClassInput[]) => string;
};

const Tiquetes = {
	Conexion
};

export type { Pictogam };

export { pictogramVariants, AnunciosImportantes, CheckIn, Conexion, Tiquetes };
