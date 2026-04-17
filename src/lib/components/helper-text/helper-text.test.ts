import { vi, describe, test, expect } from 'vitest';

vi.mock('./helper-text.svelte', () => ({ default: {} }));

import { helperTextVariants, helperIconVariants, helperLabelVariants } from './index.js';

describe('helperTextVariants', () => {
	test('is an inline flex row with 4px gap', () => {
		const cls = helperTextVariants();
		expect(cls).toContain('inline-flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-1');
	});
});

describe('helperIconVariants', () => {
	test('base: 12×12 shrink-0', () => {
		const cls = helperIconVariants();
		expect(cls).toContain('size-3');
		expect(cls).toContain('shrink-0');
	});

	test('regular (default): grey-400 icon', () => {
		const cls = helperIconVariants({ type: 'regular' });
		expect(cls).toContain('text-grey-400');
	});

	test('error: error-red icon', () => {
		const cls = helperIconVariants({ type: 'error' });
		expect(cls).toContain('text-system-error');
	});
});

describe('helperLabelVariants', () => {
	test('default size: 14px body text', () => {
		const cls = helperLabelVariants({ size: 'default' });
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-b');
	});

	test('small size: 12px detail text', () => {
		const cls = helperLabelVariants({ size: 'small' });
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-d3');
	});

	test('default color: grey-600 text', () => {
		const cls = helperLabelVariants({ color: 'default' });
		expect(cls).toContain('text-grey-600');
	});

	test('inverted color: white text', () => {
		const cls = helperLabelVariants({ color: 'inverted' });
		expect(cls).toContain('text-common-white');
	});

	test('all 4 combinations resolve without throwing', () => {
		const combos = [
			{ size: 'default', color: 'default' },
			{ size: 'default', color: 'inverted' },
			{ size: 'small', color: 'default' },
			{ size: 'small', color: 'inverted' }
		] as const;
		combos.forEach((args) => {
			expect(() => helperLabelVariants(args)).not.toThrow();
		});
	});
});
