import { describe, test, expect } from 'vitest';
import { dividerVariants } from './index.js';

describe('dividerVariants', () => {
	test('base classes are always present', () => {
		const cls = dividerVariants();
		expect(cls).toContain('block');
		expect(cls).toContain('border-0');
		expect(cls).toContain('opacity-50');
	});

	test('solid lineType', () => {
		expect(dividerVariants({ lineType: 'solid' })).toContain('border-solid');
	});

	test('dashed lineType', () => {
		expect(dividerVariants({ lineType: 'dashed' })).toContain('border-dashed');
	});

	test('horizontal orientation adds border-t', () => {
		const cls = dividerVariants({ orientation: 'horizontal' });
		expect(cls).toContain('border-t');
		expect(cls).toContain('w-full');
	});

	test('vertical orientation adds border-l', () => {
		const cls = dividerVariants({ orientation: 'vertical' });
		expect(cls).toContain('border-l');
		expect(cls).toContain('h-full');
	});

	test('light theme uses grey-300', () => {
		expect(dividerVariants({ theme: 'light' })).toContain('border-grey-300');
	});

	test('dark theme uses grey-50', () => {
		expect(dividerVariants({ theme: 'dark' })).toContain('border-grey-50');
	});

	test('opaque true overrides opacity', () => {
		expect(dividerVariants({ opaque: true })).toContain('opacity-100');
	});

	test('spacing true adds vertical margin', () => {
		expect(dividerVariants({ spacing: true })).toContain('my-1');
	});
});
