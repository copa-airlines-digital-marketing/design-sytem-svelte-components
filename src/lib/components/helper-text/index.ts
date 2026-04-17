import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import HelperText from './helper-text.svelte';

/** Outer wrapper: horizontal flex, 4px gap. */
const helperTextVariants = tv({
	base: 'inline-flex items-center gap-1 overflow-hidden'
});

/**
 * Icon (12×12 px circle with "i" or "!" fill).
 * Color driven by `type`; size is always 12 px.
 */
const helperIconVariants = tv({
	base: 'shrink-0 size-3',
	variants: {
		type: {
			regular: 'text-grey-400',
			error: 'text-system-error'
		}
	},
	defaultVariants: { type: 'regular' }
});

/**
 * Text label.
 * `size`  → typography token
 * `color` → text color
 */
const helperLabelVariants = tv({
	base: '',
	variants: {
		size: {
			default: 'font-body text-b',
			small: 'font-body text-d3'
		},
		color: {
			default: 'text-grey-600',
			inverted: 'text-common-white'
		}
	},
	defaultVariants: { size: 'default', color: 'default' }
});

type HelperType = 'regular' | 'error';
type HelperSize = 'default' | 'small';
type HelperColor = 'default' | 'inverted';

type HelperTextProps = {
	text: string;
	type?: HelperType;
	size?: HelperSize;
	color?: HelperColor;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { HelperTextProps, HelperType, HelperSize, HelperColor };
export { HelperText, helperTextVariants, helperIconVariants, helperLabelVariants };
