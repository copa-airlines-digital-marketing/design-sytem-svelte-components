import { vi, describe, test, expect } from 'vitest';
import { readFileSync } from 'node:fs';

vi.mock('./counter.svelte', () => ({ default: {} }));
vi.mock('bits-ui', () => ({ Button: {} }));

import {
	clampCounterValue,
	counterButtonVariants,
	counterRootVariants,
	counterValueVariants,
	getCounterNextValue
} from './index.js';

const source = readFileSync('src/lib/components/counter/counter.svelte', 'utf-8');

describe('counterRootVariants', () => {
	test('lays out the controls inline with 4px gap', () => {
		const cls = counterRootVariants();
		expect(cls).toContain('inline-flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-1');
	});
});

describe('counterButtonVariants', () => {
	test('uses a 24px layout box with overflow for focus and active artwork', () => {
		const cls = counterButtonVariants();
		expect(cls).toContain('relative');
		expect(cls).toContain('size-6');
		expect(cls).toContain('overflow-visible');
	});

	test('matches idle and hover token colors', () => {
		const cls = counterButtonVariants();
		expect(cls).toContain('text-primary');
		expect(cls).toContain('hover:text-primary-ultradark');
	});

	test('supports error state', () => {
		const cls = counterButtonVariants({ error: true });
		expect(cls).toContain('text-system-error');
		expect(cls).toContain('hover:text-system-error');
	});

	test('supports disabled state', () => {
		const cls = counterButtonVariants();
		expect(cls).toContain('disabled:cursor-not-allowed');
		expect(cls).toContain('disabled:text-grey-300');
	});
});

describe('counterValueVariants', () => {
	test('matches the Figma display width and typography', () => {
		const cls = counterValueVariants();
		expect(cls).toContain('w-[35px]');
		expect(cls).toContain('text-[20px]');
		expect(cls).toContain('leading-[20px]');
		expect(cls).toContain('text-grey-700');
	});

	test('uses disabled text color for the whole disabled counter', () => {
		const cls = counterValueVariants({ disabled: true });
		expect(cls).toContain('text-grey-300');
	});
});

describe('counter value helpers', () => {
	test('clamps value to min and max', () => {
		expect(clampCounterValue(-1, 0, 10)).toBe(0);
		expect(clampCounterValue(11, 0, 10)).toBe(10);
		expect(clampCounterValue(5, 0, 10)).toBe(5);
	});

	test('calculates next value using direction and step', () => {
		expect(getCounterNextValue(5, 'decrement', 2)).toBe(3);
		expect(getCounterNextValue(5, 'increment', 2)).toBe(7);
	});
});

describe('Counter source structure', () => {
	test('uses bits-ui Button primitive for both controls', () => {
		expect(source).toContain('import { Button as ButtonPrimitive } from');
		expect(source.match(/<ButtonPrimitive\.Root/g)?.length).toBe(2);
	});

	test('central value is a non-editable display', () => {
		expect(source).toContain('<span');
		expect(source).not.toContain('<input');
	});

	test('buttons update by decrementing and incrementing', () => {
		expect(source).toContain("updateValue('decrement')");
		expect(source).toContain("updateValue('increment')");
	});

	test('shows focus artwork for the focused control', () => {
		expect(source).toContain('let focusedAction');
		expect(source).toContain("onfocus={() => (focusedAction = 'increment')}");
		expect(source).toContain("onblur={() => clearFocusedAction('increment')}");
		expect(source).toContain("focusedAction === 'increment'");
	});
});
