import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import RadioGroup from './radio-group.svelte';
import RadioItem from './radio-item.svelte';

/** Outer button wrapper rendered by bits-ui RadioGroup.Item. */
const radioItemVariants = tv({
	base: 'group inline-flex cursor-pointer items-center gap-2 outline-none disabled:cursor-not-allowed'
});

/**
 * The 24px circle indicator.
 *
 * All states driven entirely via CSS from the parent `group` (the bits-ui button):
 *   data-state="checked"   → selected fill + visible dot
 *   data-state="unchecked" → white fill + hidden dot
 *   :hover / :focus-visible / :disabled on the parent button
 */
const radioIndicatorVariants = tv({
	base: [
		'relative shrink-0 size-6 rounded-full border transition-colors',

		// Unchecked defaults
		'bg-common-white border-grey-500',
		// Hover (unselected): darken border
		'group-hover:border-primary-ultradark',
		// Focus (unselected): light-blue bg + dark border + ring
		'group-focus-visible:bg-background-lightblue group-focus-visible:border-primary-ultradark',
		// Focus ring (both states)
		'group-focus-visible:ring-2 group-focus-visible:ring-primary-faded',

		// Checked: primary fill + dark border
		'group-data-[state=checked]:bg-primary group-data-[state=checked]:border-primary-ultradark',
		// Checked + hover: keep primary fill
		'group-data-[state=checked]:group-hover:bg-primary',
		// Checked + focus: keep primary fill
		'group-data-[state=checked]:group-focus-visible:bg-primary',

		// Disabled (any state): grey fill + light border
		'group-disabled:bg-grey-100 group-disabled:border-grey-300',

		// Inner dot — always rendered, toggled by opacity
		"after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-2 after:rounded-full after:content-['']",
		// Dot: hidden by default, white when checked
		'after:opacity-0 after:bg-common-white',
		'group-data-[state=checked]:after:opacity-100',
		// Dot: grey when disabled+checked
		'group-disabled:group-data-[state=checked]:after:bg-grey-300'
	].join(' ')
});

const radioGroupVariants = tv({
	base: 'flex flex-col gap-2'
});

type RadioGroupComponentProps = {
	value?: string;
	name?: string;
	disabled?: boolean;
	class?: string | null;
	children: Snippet;
	customcn?: (...inputs: ClassValue[]) => string;
};

type RadioItemComponentProps = {
	value: string;
	label?: string;
	disabled?: boolean;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type RadioGroupProps = RadioGroupComponentProps;
export type RadioItemProps = RadioItemComponentProps;

export { RadioGroup, RadioItem, radioGroupVariants, radioItemVariants, radioIndicatorVariants };
