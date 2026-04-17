import { tv } from '../../index.js';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import Dimmer from './dimmer.svelte';

const dimmerVariants = tv({
	base: 'fixed inset-0 pointer-events-none',
	variants: {
		color: {
			grey: '',
			white: ''
		},
		opacity: {
			'60': '',
			'80': ''
		}
	},
	compoundVariants: [
		{ color: 'grey', opacity: '60', class: 'bg-grey-800/60' },
		{ color: 'grey', opacity: '80', class: 'bg-grey-800/80' },
		{ color: 'white', opacity: '60', class: 'bg-common-white/60' },
		{ color: 'white', opacity: '80', class: 'bg-common-white/80' }
	],
	defaultVariants: {
		color: 'grey',
		opacity: '80'
	}
});

type DimmerColor = VariantProps<typeof dimmerVariants>['color'];
type DimmerOpacity = VariantProps<typeof dimmerVariants>['opacity'];

export type DimmerProps = {
	color?: DimmerColor;
	opacity?: DimmerOpacity;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
	/** Called when the dimmer is clicked (e.g. to dismiss a modal). */
	onclick?: ((event: MouseEvent & { currentTarget: HTMLDivElement }) => void) | null;
	id?: string;
	style?: string;
};

export { Dimmer, dimmerVariants };
