import { vi, describe, test, expect } from 'vitest';

vi.mock('./option.svelte', () => ({ default: {} }));
vi.mock('./option-list.svelte', () => ({ default: {} }));
vi.mock('bits-ui', () => ({
	ScrollArea: { Root: {}, Viewport: {}, Scrollbar: {}, Thumb: {}, Corner: {} }
}));

import { optionVariants, optionLabelVariants, optionListVariants } from './index.js';

describe('optionVariants', () => {
	test('flex row, padded, full width', () => {
		const cls = optionVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('w-full');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-2');
		expect(cls).toContain('p-3');
		expect(cls).toContain('text-left');
	});

	test('idle: white background', () => {
		const cls = optionVariants();
		expect(cls).toContain('bg-common-white');
	});

	test('hover: lightblue background (CSS-driven)', () => {
		const cls = optionVariants();
		expect(cls).toContain('hover:bg-background-lightblue');
	});

	test('focus-visible: lightblue bg + inset primary ring (CSS-driven)', () => {
		const cls = optionVariants();
		expect(cls).toContain('focus-visible:bg-background-lightblue');
		expect(cls).toContain('focus-visible:ring-2');
		expect(cls).toContain('focus-visible:ring-inset');
		expect(cls).toContain('focus-visible:ring-primary');
		expect(cls).toContain('focus-visible:outline-none');
	});

	test('disabled: grey bg + not-allowed cursor', () => {
		const cls = optionVariants();
		expect(cls).toContain('disabled:bg-grey-100');
		expect(cls).toContain('disabled:cursor-not-allowed');
	});
});

describe('optionLabelVariants', () => {
	test('stretches to fill space, 16px body font', () => {
		const cls = optionLabelVariants();
		expect(cls).toContain('flex-1');
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-b');
		expect(cls).toContain('text-grey-700');
	});
});

describe('optionListVariants', () => {
	test('base: rounded, white bg, drop shadow', () => {
		const cls = optionListVariants();
		expect(cls).toContain('rounded');
		expect(cls).toContain('bg-common-white');
		expect(cls).toContain('shadow-[0px_3px_5px_rgba(0,0,0,0.17)]');
	});

	test('normal state: grey-300 border', () => {
		const cls = optionListVariants({ empty: false });
		expect(cls).toContain('border-grey-300');
	});

	test('empty state: grey-600 border', () => {
		const cls = optionListVariants({ empty: true });
		expect(cls).toContain('border-grey-600');
	});
});
