import { vi, describe, test, expect } from 'vitest';
import { readFileSync } from 'node:fs';

vi.mock('./switch.svelte', () => ({ default: {} }));

import {
	switchLabelVariants,
	switchRootVariants,
	switchThumbVariants,
	switchWrapperVariants
} from './index.js';

const source = readFileSync('src/lib/components/switch/switch.svelte', 'utf-8');

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

describe('switchWrapperVariants', () => {
	test('lays out optional labels and switch inline', () => {
		const cls = switchWrapperVariants();
		expect(cls).toContain('inline-flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-2');
	});
});

describe('switchLabelVariants', () => {
	test('has clickable label typography and focus styles', () => {
		const cls = switchLabelVariants();
		expect(cls).toContain('font-body');
		expect(cls).toContain('text-b');
		expect(cls).toContain('focus-visible:outline-primary-faded');
	});

	test('marks the selected label with emphasis', () => {
		const cls = switchLabelVariants({ selected: true });
		expect(cls).toContain('font-semibold');
		expect(cls).toContain('text-grey-700');
	});
});

describe('Switch label controls', () => {
	test('off label selects false and on label selects true', () => {
		expect(source).toContain('onclick={() => setChecked(false)}');
		expect(source).toContain('onclick={() => setChecked(true)}');
	});

	test('labels and switch share the same checked-change handler', () => {
		expect(source).toContain('onCheckedChange={setChecked}');
		expect(source).toContain('onCheckedChange?.(nextChecked)');
	});
});
