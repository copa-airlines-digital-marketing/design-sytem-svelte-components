import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Autocomplete from './autocomplete.svelte';

/**
 * Individual item inside the Autocomplete dropdown.
 * Reuses the same styling logic as selectItemVariants.
 *
 * State is driven by bits-ui data-attributes:
 *   data-[highlighted] → background-lightblue  (keyboard nav / mouse hover)
 *   data-[disabled]    → grey-100 bg, not-allowed cursor
 */
const autocompleteItemVariants = tv({
	base: [
		'flex w-full items-center gap-2 px-3 py-3 cursor-default select-none',
		'outline-none transition-colors',
		'bg-common-white',
		'data-[highlighted]:bg-background-lightblue',
		'data-[disabled]:bg-grey-100 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none'
	].join(' ')
});

type AutocompleteOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

type AutocompleteProps = {
	/** Currently selected value — bindable. */
	value?: string;
	/** Placeholder shown in the input when empty. */
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
	/** Full list of options. Filtered in real-time as the user types. */
	options?: AutocompleteOption[];
	/** Message shown when no options match the current search. Default: "Sin resultados." */
	emptyMessage?: string;
	/** HTML name forwarded to the hidden input for form submission. */
	name?: string;
	/** Called whenever the selected value changes. */
	onValueChange?: (value: string) => void;
	/** Optional 24×24 icon rendered to the left of the text input. */
	leftIcon?: Snippet;
	/** Stable id forwarded to the input for `<label for>` association. */
	id?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { AutocompleteOption, AutocompleteProps };
export { Autocomplete, autocompleteItemVariants };
