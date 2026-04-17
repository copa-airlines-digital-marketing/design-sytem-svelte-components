import { vi, describe, test, expect } from 'vitest';

vi.mock('./nav-tab.svelte', () => ({ default: {} }));

import { navTabVariants } from './index.js';

describe('navTabVariants', () => {
	test('base classes are always present', () => {
		const cls = navTabVariants();
		expect(cls).toContain('inline-flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('border-b-4');
		expect(cls).toContain('border-transparent');
		expect(cls).toContain('font-body');
	});

	test('primary type applies text-grey-600', () => {
		expect(navTabVariants({ type: 'primary' })).toContain('text-grey-600');
	});

	test('invert type applies text-common-white', () => {
		expect(navTabVariants({ type: 'invert' })).toContain('text-common-white');
	});

	test('active true shows primary-light indicator', () => {
		const cls = navTabVariants({ active: true });
		expect(cls).toContain('border-primary-light');
	});

	test('active false has no indicator by default', () => {
		const cls = navTabVariants({ active: false });
		expect(cls).not.toContain('border-primary-light');
	});

	test('primary + inactive has hover:border-grey-500', () => {
		const cls = navTabVariants({ type: 'primary', active: false });
		expect(cls).toContain('hover:border-grey-500');
	});

	test('invert + inactive has hover:border-common-white', () => {
		const cls = navTabVariants({ type: 'invert', active: false });
		expect(cls).toContain('hover:border-common-white');
	});

	test('active true overrides hover indicator regardless of type', () => {
		const primaryActive = navTabVariants({ type: 'primary', active: true });
		expect(primaryActive).toContain('border-primary-light');
		expect(primaryActive).not.toContain('hover:border-grey-500');

		const invertActive = navTabVariants({ type: 'invert', active: true });
		expect(invertActive).toContain('border-primary-light');
		expect(invertActive).not.toContain('hover:border-common-white');
	});

	test('padding matches Figma spec (px-2 py-3)', () => {
		const cls = navTabVariants();
		expect(cls).toContain('px-2');
		expect(cls).toContain('py-3');
	});

	test('gap between icon and content matches Figma (gap-1)', () => {
		expect(navTabVariants()).toContain('gap-1');
	});
});
