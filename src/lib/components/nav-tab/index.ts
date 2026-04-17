import { tv } from '../../index.js';
import type { VariantProps } from 'tailwind-variants';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ClassValue } from 'clsx';
import NavTab from './nav-tab.svelte';

const navTabVariants = tv({
	base: 'inline-flex items-center justify-center gap-1 px-2 py-3 border-b-4 border-transparent font-body transition-colors cursor-pointer outline-none select-none',
	variants: {
		type: {
			primary: 'text-grey-600',
			invert: 'text-common-white'
		},
		active: {
			true: 'border-primary-light',
			false: ''
		}
	},
	compoundVariants: [
		{ type: 'primary', active: false, class: 'hover:border-grey-500' },
		{ type: 'invert', active: false, class: 'hover:border-common-white' }
	],
	defaultVariants: {
		type: 'primary',
		active: false
	}
});

type Type = VariantProps<typeof navTabVariants>['type'];
type Active = VariantProps<typeof navTabVariants>['active'];

type NavTabComponentProps = {
	type?: Type;
	active?: Active;
	subtitle?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
	iconLeft?: Snippet;
	iconRight?: Snippet;
	children: Snippet;
};

export type NavTabProps = NavTabComponentProps &
	Omit<HTMLButtonAttributes, keyof NavTabComponentProps>;

export { NavTab, navTabVariants };
