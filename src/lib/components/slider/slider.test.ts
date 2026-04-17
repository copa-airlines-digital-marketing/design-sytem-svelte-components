import { vi, describe, test, expect } from 'vitest';

vi.mock('./slider.svelte', () => ({ default: {} }));
vi.mock('bits-ui', () => ({ Slider: {} }));

import {
	sliderRootVariants,
	sliderTrackVariants,
	sliderRangeVariants,
	sliderThumbVariants,
	sliderTooltipVariants,
	sliderLabelVariants
} from './index.js';

describe('sliderRootVariants', () => {
	test('base classes are always present', () => {
		const cls = sliderRootVariants();
		expect(cls).toContain('relative');
		expect(cls).toContain('flex');
		expect(cls).toContain('w-full');
		expect(cls).toContain('items-center');
	});
});

describe('sliderTrackVariants', () => {
	test('renders full-width grey pill track', () => {
		const cls = sliderTrackVariants();
		expect(cls).toContain('h-1');
		expect(cls).toContain('w-full');
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('bg-grey-200');
	});
});

describe('sliderRangeVariants', () => {
	test('renders primary-coloured filled range', () => {
		const cls = sliderRangeVariants();
		expect(cls).toContain('absolute');
		expect(cls).toContain('h-full');
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('bg-primary');
	});
});

describe('sliderThumbVariants', () => {
	test('renders circular white thumb with shadow', () => {
		const cls = sliderThumbVariants();
		expect(cls).toContain('size-6');
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('bg-common-white');
		expect(cls).toContain('shadow-md');
	});

	test('has hover ring for ripple halo effect', () => {
		const cls = sliderThumbVariants();
		expect(cls).toContain('ring-primary-faded/50');
		expect(cls).toContain('hover:ring-4');
	});

	test('has inner dot via after: pseudo-element', () => {
		const cls = sliderThumbVariants();
		expect(cls).toContain('after:bg-primary');
		expect(cls).toContain('after:rounded-full');
	});

	test('has grab cursor', () => {
		const cls = sliderThumbVariants();
		expect(cls).toContain('cursor-grab');
	});
});

describe('sliderTooltipVariants', () => {
	test('is absolutely positioned below the thumb with dark translucent background', () => {
		const cls = sliderTooltipVariants();
		expect(cls).toContain('absolute');
		expect(cls).toContain('top-4');
		expect(cls).toContain('bg-grey-800/70');
		expect(cls).toContain('text-common-white');
		expect(cls).toContain('-translate-x-1/2');
	});
});

describe('sliderLabelVariants', () => {
	test('is a flex row with body font and grey text', () => {
		const cls = sliderLabelVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-grey-700');
	});
});
