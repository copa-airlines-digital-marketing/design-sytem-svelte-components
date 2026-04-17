import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Slider from './slider.svelte';

/**
 * The Root IS the track in bits-ui v2 (no separate Track component).
 * Track-level styles (h-1, bg-grey-200, rounded-full) live here.
 */
const sliderRootVariants = tv({
	base: 'relative flex h-1 w-full touch-none select-none items-center overflow-visible rounded-full bg-grey-200'
});

/** Kept for documentation and testing; classes are included in sliderRootVariants. */
const sliderTrackVariants = tv({
	base: 'relative h-1 w-full grow overflow-visible rounded-full bg-grey-200'
});

const sliderRangeVariants = tv({
	base: 'absolute h-full rounded-full bg-primary'
});

/**
 * Thumb uses ring-* for the hover/active halo so no children DOM nodes are needed,
 * avoiding bits-ui Snippet type mismatches. Inner dot via after: pseudo-element.
 */
const sliderThumbVariants = tv({
	base: [
		'relative block size-6 cursor-grab rounded-full bg-common-white shadow-md',
		'outline-none focus-visible:outline-none active:cursor-grabbing',
		'disabled:cursor-not-allowed disabled:pointer-events-none',
		// Halo ring — expands on hover / focus / active
		'ring-0 ring-primary-faded/50 transition-shadow duration-150',
		'hover:ring-4 focus-visible:ring-4 active:ring-[9px]',
		// Inner primary dot
		"after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-2 after:rounded-full after:bg-primary after:content-['']"
	].join(' ')
});

/**
 * top-4 (16px) = thumb center (2px) + half-thumb (12px) + 2px gap.
 * This puts the tooltip flush below the thumb regardless of track height.
 */
const sliderTooltipVariants = tv({
	base: 'absolute top-4 -translate-x-1/2 rounded bg-grey-800/70 px-1.5 py-0.5 font-body text-d3 font-medium text-common-white whitespace-nowrap pointer-events-none'
});

const sliderLabelVariants = tv({
	base: 'flex items-center gap-0.5 font-body text-d3 text-grey-700'
});

type SliderComponentProps = {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	label?: string;
	minLabel?: string;
	maxLabel?: string;
	showTooltip?: boolean;
	formatTooltip?: (value: number) => string;
	icon?: Snippet;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type SliderProps = SliderComponentProps;

export {
	Slider,
	sliderRootVariants,
	sliderTrackVariants,
	sliderRangeVariants,
	sliderThumbVariants,
	sliderTooltipVariants,
	sliderLabelVariants
};
