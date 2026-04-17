import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Select from './select.svelte';

/**
 * Individual item inside the Select dropdown.
 *
 * States are driven by bits-ui data-attributes — no JS needed in the variants:
 *   data-[highlighted] → background-lightblue  (keyboard nav / mouse hover)
 *   data-[disabled]    → grey-100 bg, not-allowed cursor
 */
const selectItemVariants = tv({
	base: [
		'flex w-full items-center gap-2 px-3 py-3 cursor-default select-none',
		'outline-none transition-colors',
		'bg-common-white',
		'data-[highlighted]:bg-background-lightblue',
		'data-[disabled]:bg-grey-100 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none'
	].join(' ')
});

type SelectOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

type SelectProps = {
	/** Currently selected value — bindable. */
	value?: string;
	/** Shown in the trigger when nothing is selected. */
	placeholder?: string;
	/** Upper label text. */
	label?: string;
	/** Shows a red `*` next to the label. */
	mandatory?: boolean;
	/** Optional hint / error message rendered via HelperText. */
	helperText?: string;
	/** Switches border + HelperText icon to error-red. */
	error?: boolean;
	disabled?: boolean;
	/** The list of selectable options. */
	options?: SelectOption[];
	/** Message shown when `options` is empty. Default: "Sin resultados." */
	emptyMessage?: string;
	/** HTML name forwarded to the hidden input for form submission. */
	name?: string;
	/** Called whenever the selected value changes. */
	onValueChange?: (value: string) => void;
	/** Optional 24×24 icon rendered to the left of the selected value in the trigger. */
	leftIcon?: Snippet;
	/** Stable id forwarded to the trigger button for `<label for>` association. */
	id?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { SelectOption, SelectProps };
export { Select, selectItemVariants };
