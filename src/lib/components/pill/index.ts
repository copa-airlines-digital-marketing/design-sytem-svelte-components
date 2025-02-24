import { tv } from '$lib/index.js';
import { getContext, setContext } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { writable, type Writable } from 'svelte/store';
import type { VariantProps } from 'tailwind-variants';

type Thickness = 'default' | 'slim';

const PILL_CONTEXT = Symbol('Pill');

const pillVariants = tv({
	base: 'grid gap-1 grid-rows-1 rounded-full py-0.5 px-3 border border-transparent',
	variants: {
		theme: {
			default: 'bg-primary',
			transparent: 'bg-transparent'
		},
		outline: {
			true: 'border-common-white'
		}
	}
});

const iconVariants = tv({
	base: 'col-span-1',
	variants: {
		side: {
			left: 'col-start-1',
			right: 'col-start-3'
		}
	}
});

const setPillContext = (thickness?: Thickness) => {
	const store = writable(thickness);
	setContext(PILL_CONTEXT, thickness);
	return store;
};

const getPillContext = () => {
	return getContext<Writable<Thickness | undefined>>(PILL_CONTEXT);
};

type Theme = VariantProps<typeof pillVariants>['theme'];

type Outline = VariantProps<typeof pillVariants>['outline'];

type PillProps = HTMLAttributes<HTMLDivElement> & {
	theme?: Theme;
	outline?: Outline;
	thickness?: Thickness;
};

export type { PillProps };

export { getPillContext, setPillContext, pillVariants, iconVariants };
