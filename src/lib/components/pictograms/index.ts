import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue, VariantProps } from 'tailwind-variants';
import { tv } from '../../index.js';
import AnunciosImportantes from './anuncios-importantes.svelte';
import CheckIn from './check-in.svelte';

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
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { Pictogam };

export { pictogramVariants, AnunciosImportantes, CheckIn };
