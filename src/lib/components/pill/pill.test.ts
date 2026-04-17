import { vi, describe, test, expect } from 'vitest';

vi.mock('./pill.svelte', () => ({ default: {} }));
vi.mock('./text.svelte', () => ({ default: {} }));
vi.mock('./icon.svelte', () => ({ default: {} }));

import { pillVariants, iconVariants } from './index.js';

describe('pillVariants', () => {
	test('base classes are always present', () => {
		const cls = pillVariants();
		expect(cls).toContain('inline-grid');
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('items-center');
	});

	test('default theme uses bg-primary', () => {
		expect(pillVariants({ theme: 'default' })).toContain('bg-primary');
	});

	test('transparent theme', () => {
		expect(pillVariants({ theme: 'transparent' })).toContain('bg-transparent');
	});

	test('outline adds border-common-white', () => {
		expect(pillVariants({ outline: true })).toContain('border-common-white');
	});

	test('no outline keeps border-transparent', () => {
		expect(pillVariants({ outline: false })).toContain('border-transparent');
	});
});

describe('iconVariants', () => {
	test('base classes are always present', () => {
		const cls = iconVariants();
		expect(cls).toContain('size-4');
	});

	test('left side', () => {
		expect(iconVariants({ side: 'left' })).toContain('col-start-1');
	});

	test('right side', () => {
		expect(iconVariants({ side: 'right' })).toContain('col-start-3');
	});

	test('default side has no explicit col-start', () => {
		const cls = iconVariants({ side: 'default' });
		expect(cls).not.toContain('col-start-1');
		expect(cls).not.toContain('col-start-3');
	});
});
