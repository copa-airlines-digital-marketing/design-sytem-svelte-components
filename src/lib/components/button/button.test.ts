import { vi, describe, test, expect } from 'vitest';

// Mock Svelte component files so vitest doesn't run the Svelte/Tailwind preprocessor
vi.mock('./button.svelte', () => ({ default: {} }));

import { buttonVariants } from './index.js';

describe('buttonVariants', () => {
	test('base classes are always present', () => {
		const cls = buttonVariants();
		expect(cls).toContain('font-body');
		expect(cls).toContain('flex');
		expect(cls).toContain('items-center');
	});

	test('defaults to solid-primary-main variant', () => {
		expect(buttonVariants()).toContain('bg-primary');
		expect(buttonVariants()).toContain('text-common-white');
	});

	test('solid-primary-light variant', () => {
		const cls = buttonVariants({ variant: 'solid-primary-light' });
		expect(cls).toContain('bg-primary-light');
		expect(cls).toContain('text-common-white');
	});

	test('outline-primary-main variant has border-primary', () => {
		const cls = buttonVariants({ variant: 'outline-primary-main' });
		expect(cls).toContain('border-primary');
		expect(cls).toContain('text-primary');
	});

	test('outline-invert variant has white border and hover states', () => {
		const cls = buttonVariants({ variant: 'outline-invert' });
		expect(cls).toContain('text-common-white');
		expect(cls).toContain('border-common-white');
		expect(cls).toContain('hover:bg-common-white');
		expect(cls).toContain('hover:text-primary-light');
	});

	test('transparent-invert variant has no border and white-overlay hover', () => {
		const cls = buttonVariants({ variant: 'transparent-invert' });
		expect(cls).toContain('text-common-white');
		expect(cls).toContain('border-transparent');
		expect(cls).toContain('hover:bg-common-white/10');
		expect(cls).toContain('active:bg-common-white/20');
	});

	test('transparent-primary-main variant', () => {
		const cls = buttonVariants({ variant: 'transparent-primary-main' });
		expect(cls).toContain('text-primary');
		expect(cls).toContain('border-transparent');
	});

	test('link variant', () => {
		const cls = buttonVariants({ variant: 'link' });
		expect(cls).toContain('text-primary');
	});

	test('link-invert variant', () => {
		const cls = buttonVariants({ variant: 'link-invert' });
		expect(cls).toContain('text-grey-50');
	});

	test('slim size', () => {
		const cls = buttonVariants({ size: 'slim' });
		expect(cls).toContain('text-d3');
	});

	test('default size', () => {
		const cls = buttonVariants({ size: 'default' });
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('text-d1');
	});

	test('large size', () => {
		const cls = buttonVariants({ size: 'large' });
		expect(cls).toContain('px-6');
	});

	test('giant size', () => {
		const cls = buttonVariants({ size: 'giant' });
		expect(cls).toContain('px-8');
		expect(cls).toContain('text-2xl');
	});

	test('link size removes border', () => {
		const cls = buttonVariants({ size: 'link' });
		expect(cls).toContain('border-0');
	});
});
