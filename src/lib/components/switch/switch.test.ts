import { vi, describe, test, expect } from 'vitest';

vi.mock('./switch.svelte', () => ({ default: {} }));

import { switchRootVariants, switchThumbVariants } from './index.js';

describe('switchRootVariants', () => {
	test('has base layout classes', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('relative');
		expect(cls).toContain('h-6');
		expect(cls).toContain('w-12');
		expect(cls).toContain('rounded-full');
	});

	test('has unchecked background class', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('data-[state=unchecked]:bg-grey-300');
	});

	test('has checked background class', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('data-[state=checked]:bg-primary');
	});

	test('has hover states', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('data-[state=unchecked]:hover:bg-grey-200');
		expect(cls).toContain('data-[state=checked]:hover:bg-primary-light');
	});

	test('has active states', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('data-[state=unchecked]:active:bg-primary-ultradark');
		expect(cls).toContain('data-[state=checked]:active:bg-primary-ultradark');
	});

	test('has disabled classes', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('disabled:cursor-not-allowed');
		expect(cls).toContain('disabled:opacity-50');
	});

	test('has focus outline class', () => {
		const cls = switchRootVariants();
		expect(cls).toContain('focus-visible:outline-primary-faded');
	});
});

describe('switchThumbVariants', () => {
	test('has translate classes for each state', () => {
		const cls = switchThumbVariants();
		expect(cls).toContain('data-[state=checked]:translate-x-[25px]');
		expect(cls).toContain('data-[state=unchecked]:translate-x-[1px]');
	});

	test('has shadow class', () => {
		const cls = switchThumbVariants();
		expect(cls).toContain('shadow-[');
	});

	test('has white background', () => {
		const cls = switchThumbVariants();
		expect(cls).toContain('bg-common-white');
	});

	test('has rounded-full class', () => {
		const cls = switchThumbVariants();
		expect(cls).toContain('rounded-full');
	});
});
