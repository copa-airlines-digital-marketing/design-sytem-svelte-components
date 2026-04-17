import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Input from './input.svelte';

/**
 * Outer wrapper: vertical stack — label → field box → helper text.
 */
const inputWrapperVariants = tv({
	base: 'flex w-full flex-col gap-2 py-2'
});

/**
 * Field box (the visible bordered container around the native input + icons).
 *
 * Border colour is driven by CSS pseudo-classes where possible:
 *   :hover          → primary-light
 *   :focus-within   → primary  (native <input> focus)
 *
 * `error` and `disabled` need explicit variants because CSS cannot
 * detect form-validation state or infer it without JS.
 */
const fieldBoxVariants = tv({
	base: [
		'flex w-full items-center gap-2 rounded border bg-common-white p-3 transition-colors',
		// Interactive states (CSS-driven — no JS needed)
		'hover:border-primary-light',
		'focus-within:border-primary'
	].join(' '),
	variants: {
		error: { true: '', false: '' },
		disabled: { true: '', false: '' }
	},
	compoundVariants: [
		// Default (no error, not disabled)
		{
			error: false,
			disabled: false,
			class: 'border-grey-300'
		},
		// Error state: red border overrides hover + focus
		{
			error: true,
			disabled: false,
			class: [
				'border-system-error',
				'hover:border-system-error',
				'focus-within:border-system-error'
			].join(' ')
		},
		// Disabled state: grey fill, suppress all hover/focus colour changes
		{
			error: false,
			disabled: true,
			class: [
				'border-grey-600 bg-grey-100 cursor-not-allowed',
				'hover:border-grey-600',
				'focus-within:border-grey-600'
			].join(' ')
		},
		// Disabled + error (error still shows disabled visual, not red)
		{
			error: true,
			disabled: true,
			class: [
				'border-grey-600 bg-grey-100 cursor-not-allowed',
				'hover:border-grey-600',
				'focus-within:border-grey-600'
			].join(' ')
		}
	],
	defaultVariants: { error: false, disabled: false }
});

/**
 * Native <input> element.
 * Placeholder colour and disabled cursor are handled by native CSS pseudo-classes.
 */
const inputVariants = tv({
	base: [
		'flex-1 min-w-0 bg-transparent outline-none',
		'font-body text-b text-grey-700',
		'placeholder:text-grey-500',
		'disabled:cursor-not-allowed disabled:text-grey-500'
	].join(' ')
});

/** Upper label text (14px). */
const labelVariants = tv({
	base: 'font-body text-d1 text-grey-700'
});

type InputProps = {
	value?: string;
	placeholder?: string;
	label?: string;
	/** Shows a red `*` next to the label. */
	mandatory?: boolean;
	/** Optional hint / error message — rendered via the HelperText component. */
	helperText?: string;
	/** HTML input type (text, email, password, number, etc.). */
	type?: string;
	/** Switches border + HelperText icon to error-red. */
	error?: boolean;
	disabled?: boolean;
	/** Optional 24×24 icon rendered to the left of the input text. */
	leftIcon?: Snippet;
	/** Optional 24×24 icon rendered to the right of the input text (e.g. chevron for selects). */
	rightIcon?: Snippet;
	id?: string;
	name?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { InputProps };
export { Input, inputWrapperVariants, fieldBoxVariants, inputVariants, labelVariants };
