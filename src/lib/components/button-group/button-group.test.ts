import { describe, expect, test } from 'vitest';
import { dirname, resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
	buttonGroupChipVariants,
	buttonGroupFrameVariants,
	buttonGroupIndicatorVariants,
	buttonGroupLabelVariants,
	buttonGroupRootVariants
} from './index.js';

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), 'button-group.svelte');
const componentSource = readFileSync(componentPath, 'utf8');

describe('ButtonGroup', () => {
	test('matches the base layout tokens', () => {
		expect(buttonGroupRootVariants()).toContain('max-w-[25rem]');
		expect(buttonGroupRootVariants()).toContain('gap-2');
		expect(buttonGroupLabelVariants()).toContain('text-[#333333]');
		expect(buttonGroupFrameVariants()).toContain('rounded-full');
		expect(buttonGroupFrameVariants()).toContain('relative');
		expect(buttonGroupFrameVariants()).toContain('outline-[#CCCCCB]');
	});

	test('matches idle and active chip styles', () => {
		expect(buttonGroupChipVariants({ size: 'default', active: false })).toContain('h-10');
		expect(buttonGroupChipVariants({ size: 'default', active: false })).toContain('text-[#666666]');
		expect(buttonGroupChipVariants({ size: 'default', active: true })).toContain('text-[#0032A0]');
		expect(buttonGroupIndicatorVariants()).toContain('bg-[#D6E3FF]');
		expect(buttonGroupIndicatorVariants()).toContain('transition-transform');
		expect(buttonGroupIndicatorVariants()).toContain('outline-[#0E68FF]');
	});

	test('uses Bits UI ToggleGroup in single selection mode', () => {
		expect(componentSource).toContain('ToggleGroupPrimitive.Root');
		expect(componentSource).toContain('ToggleGroupPrimitive.Item');
		expect(componentSource).toContain('type="single"');
		expect(componentSource).toContain('bind:value');
		expect(componentSource).toContain('onValueChange={handleValueChange}');
		expect(componentSource).toContain('indicatorTranslatePercent');
		expect(componentSource).toContain('transform: translateX');
	});
});
