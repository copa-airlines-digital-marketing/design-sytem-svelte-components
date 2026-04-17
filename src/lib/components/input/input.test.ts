import { vi, describe, test, expect } from 'vitest';

vi.mock('./input.svelte', () => ({ default: {} }));
vi.mock('../helper-text/index.js', () => ({ HelperText: {} }));

import { fieldBoxVariants, inputVariants, labelVariants, inputWrapperVariants } from './index.js';

describe('inputWrapperVariants', () => {
	test('vertical flex column with gap and vertical padding', () => {
		const cls = inputWrapperVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('flex-col');
		expect(cls).toContain('gap-2');
		expect(cls).toContain('py-2');
		expect(cls).toContain('w-full');
	});
});

describe('labelVariants', () => {
	test('14px body font in dark grey', () => {
		const cls = labelVariants();
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-d1');
		expect(cls).toContain('text-grey-700');
	});
});

describe('inputVariants', () => {
	test('fills available width, clears browser outline', () => {
		const cls = inputVariants();
		expect(cls).toContain('flex-1');
		expect(cls).toContain('outline-none');
	});

	test('16px body font in dark grey', () => {
		const cls = inputVariants();
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-b');
		expect(cls).toContain('text-grey-700');
	});

	test('placeholder text is grey-500', () => {
		const cls = inputVariants();
		expect(cls).toContain('placeholder:text-grey-500');
	});

	test('disabled cursor and muted text', () => {
		const cls = inputVariants();
		expect(cls).toContain('disabled:cursor-not-allowed');
		expect(cls).toContain('disabled:text-grey-500');
	});
});

describe('fieldBoxVariants', () => {
	test('base layout: flex row, padded, rounded', () => {
		const cls = fieldBoxVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-2');
		expect(cls).toContain('rounded');
		expect(cls).toContain('p-3');
		expect(cls).toContain('w-full');
	});

	test('idle (default): grey-300 border, white bg', () => {
		const cls = fieldBoxVariants({ error: false, disabled: false });
		expect(cls).toContain('border-grey-300');
		expect(cls).toContain('bg-common-white');
	});

	test('CSS-driven hover and focus-within classes are present', () => {
		const cls = fieldBoxVariants({ error: false, disabled: false });
		expect(cls).toContain('hover:border-primary-light');
		expect(cls).toContain('focus-within:border-primary');
	});

	test('error: red border overrides hover and focus', () => {
		const cls = fieldBoxVariants({ error: true, disabled: false });
		expect(cls).toContain('border-system-error');
		expect(cls).toContain('hover:border-system-error');
		expect(cls).toContain('focus-within:border-system-error');
	});

	test('disabled: grey bg + grey border, suppresses hover/focus colour changes', () => {
		const cls = fieldBoxVariants({ error: false, disabled: true });
		expect(cls).toContain('bg-grey-100');
		expect(cls).toContain('border-grey-600');
		expect(cls).toContain('hover:border-grey-600');
		expect(cls).toContain('focus-within:border-grey-600');
		expect(cls).toContain('cursor-not-allowed');
	});
});
