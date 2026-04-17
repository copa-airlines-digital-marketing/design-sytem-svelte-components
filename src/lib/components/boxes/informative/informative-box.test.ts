import { describe, test, expect } from 'vitest';
import { informativeBoxVariant, InformativeBoxIconVariant } from './index.js';

describe('informativeBoxVariant', () => {
	test('base classes are always present', () => {
		const cls = informativeBoxVariant();
		expect(cls).toContain('grid');
		expect(cls).toContain('rounded-2xl');
		expect(cls).toContain('border-grey-300');
	});

	test('horizontal orientation', () => {
		const cls = informativeBoxVariant({ orientation: 'horizontal' });
		expect(cls).toContain('min-w-106');
	});

	test('vertical orientation', () => {
		const cls = informativeBoxVariant({ orientation: 'vertical' });
		expect(cls).toContain('min-w-67');
	});

	test('left alignment', () => {
		const cls = informativeBoxVariant({ alignment: 'left' });
		expect(cls).toContain('justify-items-start');
		expect(cls).toContain('text-left');
	});

	test('center alignment', () => {
		const cls = informativeBoxVariant({ alignment: 'center' });
		expect(cls).toContain('justify-items-center');
		expect(cls).toContain('text-center');
	});

	test('right alignment', () => {
		const cls = informativeBoxVariant({ alignment: 'right' });
		expect(cls).toContain('text-right');
	});
});

describe('InformativeBoxIconVariant', () => {
	test('base positions icon in head grid area', () => {
		expect(InformativeBoxIconVariant()).toContain('[grid-area:head]');
	});

	test('tiny size', () => {
		expect(InformativeBoxIconVariant({ size: 'tiny' })).toContain('size-10');
	});

	test('normal size', () => {
		expect(InformativeBoxIconVariant({ size: 'normal' })).toContain('size-14');
	});

	test('big size', () => {
		expect(InformativeBoxIconVariant({ size: 'big' })).toContain('size-20');
	});

	test('huge size', () => {
		expect(InformativeBoxIconVariant({ size: 'huge' })).toContain('size-24');
	});
});
