import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Option from './option.svelte';
import OptionList from './option-list.svelte';

/**
 * Individual dropdown option row.
 *
 * States are CSS-driven — no JS required:
 *   :hover         → background-lightblue
 *   :focus-visible → background-lightblue + 2px inset primary ring
 *   disabled attr  → grey-100 bg, not-allowed cursor
 */
const optionVariants = tv({
	base: [
		'flex w-full items-center gap-2 p-3 text-left transition-colors',
		'bg-common-white',
		'hover:bg-background-lightblue',
		'focus-visible:bg-background-lightblue',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
		'disabled:bg-grey-100 disabled:cursor-not-allowed disabled:pointer-events-none'
	].join(' ')
});

/** The label text inside an option. */
const optionLabelVariants = tv({
	base: 'flex-1 font-body text-b text-grey-700'
});

/**
 * Floating container for the option list.
 * Uses bits-ui ScrollArea so scroll only appears when items exceed maxHeight.
 */
const optionListVariants = tv({
	base: [
		'relative flex flex-col rounded overflow-hidden bg-common-white',
		'shadow-[0px_3px_5px_rgba(0,0,0,0.17)]'
	].join(' '),
	variants: {
		empty: {
			true: 'border border-grey-600',
			false: 'border border-grey-300'
		}
	},
	defaultVariants: { empty: false }
});

type OptionProps = {
	label: string;
	/** Optional 24×24 icon slot rendered to the left of the label. */
	leftIcon?: Snippet;
	/** Optional 24×24 icon slot rendered to the right of the label (e.g. checkmark for selected). */
	rightIcon?: Snippet;
	disabled?: boolean;
	onclick?: () => void;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

type OptionListProps = {
	children?: Snippet;
	/** Show empty-state message when no items match. */
	empty?: boolean;
	/** Message shown in empty state. Default: "Sin resultados." */
	emptyMessage?: string;
	/** Max height before scrolling kicks in (px). Default: 324. */
	maxHeight?: number;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { OptionProps, OptionListProps };
export { Option, OptionList, optionVariants, optionLabelVariants, optionListVariants };
