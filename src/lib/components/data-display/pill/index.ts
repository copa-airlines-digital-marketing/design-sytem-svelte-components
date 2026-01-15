import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { writable, type Writable } from 'svelte/store';
import { tv } from '../../../index.js';
import { getContext, setContext } from 'svelte';
import Pill from './pill.svelte';
import PillText from './text.svelte';
import PillIcon from './icon.svelte';

type Thickness = 'default' | 'slim';

const PILL_CONTEXT = Symbol('Pill');

const pillVariants = tv({
	base: 'inline-grid gap-1 items-center grid-rows-1 rounded-full py-0.5 px-3 border border-transparent grid-cols-[16px_auto_16px]',
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
	base: 'col-span-1 size-4',
	variants: {
		side: {
			default: '',
			left: 'col-start-1',
			right: 'col-start-3'
		}
	}
});

type Theme = VariantProps<typeof pillVariants>['theme'];

type Outline = VariantProps<typeof pillVariants>['outline'];

type PillBaseProps = {
	theme?: Theme;
	outline?: Outline;
	thickness?: Thickness;
	customcn?: (...inputs: ClassValue[]) => string;
};

type PillProps = HTMLAttributes<HTMLDivElement> & PillBaseProps;

type IconSide = VariantProps<typeof iconVariants>['side'];

type PillIconProps = HTMLAttributes<HTMLSpanElement> & {
	side?: IconSide;
	customcn?: (...inputs: ClassValue[]) => string;
};

const setPillContext = (props: PillBaseProps) => {
	const store = writable(props);
	setContext(PILL_CONTEXT, store);
	return store;
};

const getPillContext = () => {
	return getContext<Writable<PillBaseProps>>(PILL_CONTEXT);
};

export type { PillProps, PillBaseProps, PillIconProps };

export {
	Pill,
	PillText,
	PillText as Text,
	PillIcon,
	PillIcon as Icon,
	getPillContext,
	setPillContext,
	pillVariants,
	iconVariants
};
