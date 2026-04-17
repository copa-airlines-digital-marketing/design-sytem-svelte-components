import { describe, test, expect } from 'vitest';
import { getTypography, getTypographySize, getTypographyVariant } from './index.js';

describe('getTypographyVariant — heading variants use font-heading', () => {
	test('h1', () => {
		const cls = getTypographyVariant('h1');
		expect(cls).toContain('font-heading');
		expect(cls).toContain('text-primary');
	});

	test('h2', () => {
		const cls = getTypographyVariant('h2');
		expect(cls).toContain('font-heading');
		expect(cls).toContain('text-primary-dark');
	});

	test('h3', () => {
		expect(getTypographyVariant('h3')).toContain('font-heading');
	});

	test('display-big', () => {
		expect(getTypographyVariant('display-big')).toContain('text-u6');
	});

	test('display-small', () => {
		expect(getTypographyVariant('display-small')).toContain('font-normal');
	});
});

describe('getTypographyVariant — body variants use font-body', () => {
	test('body default', () => {
		const cls = getTypographyVariant('body');
		expect(cls).toContain('text-grey-600');
	});

	test('body-emphasis', () => {
		expect(getTypographyVariant('body-emphasis')).toContain('text-grey-700');
	});

	test('body-invert', () => {
		expect(getTypographyVariant('body-invert')).toContain('text-grey-200');
	});

	test('link has hover:underline', () => {
		expect(getTypographyVariant('link')).toContain('hover:underline');
	});

	test('link-invert has underline', () => {
		expect(getTypographyVariant('link-invert')).toContain('underline');
	});
});

describe('getTypographyVariant — caption variants', () => {
	test('caption', () => {
		expect(getTypographyVariant('caption')).toContain('text-grey-700');
	});

	test('caption-secondary', () => {
		expect(getTypographyVariant('caption-secondary')).toContain('text-grey-600');
	});

	test('caption-invert', () => {
		expect(getTypographyVariant('caption-invert')).toContain('text-common-white');
	});
});

describe('getTypographySize', () => {
	test('u6 is the largest', () => {
		expect(getTypographySize('u6')).toContain('text-u6');
	});

	test('d3 is the smallest', () => {
		expect(getTypographySize('d3')).toContain('text-d3');
	});

	test('d2 is semibold', () => {
		expect(getTypographySize('d2')).toContain('font-semibold');
	});

	test('overline is uppercase', () => {
		expect(getTypographySize('overline')).toContain('uppercase');
	});
});

describe('getTypography — base classes', () => {
	test('always includes font-body', () => {
		expect(getTypography()).toContain('font-body');
	});

	test('always includes font-normal', () => {
		expect(getTypography()).toContain('font-normal');
	});
});
