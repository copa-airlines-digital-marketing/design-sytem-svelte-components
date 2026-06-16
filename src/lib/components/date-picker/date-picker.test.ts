import { parseDate } from '@internationalized/date';
import { describe, expect, test, vi } from 'vitest';
import { readFileSync } from 'node:fs';

vi.mock('./date-picker.svelte', () => ({ default: {} }));
vi.mock('./date-range-picker.svelte', () => ({ default: {} }));

import {
	datePickerDayVariants,
	datePickerHeadCellVariants,
	datePickerNavButtonVariants,
	datePickerPopoverVariants,
	datePickerTriggerIconVariants,
	datePickerTriggerTextVariants,
	dateRangeDayVariants,
	dateRangeDayLabelVariants,
	formatCalendarMonth,
	formatDateValue
} from './index.js';

const rangeSource = readFileSync(
	'src/lib/components/date-picker/date-range-picker.svelte',
	'utf-8'
);

describe('date picker variants', () => {
	test('popover supports single and range widths', () => {
		expect(datePickerPopoverVariants()).toContain('w-[20rem]');
		expect(datePickerPopoverVariants({ range: true })).toContain('md:w-[40rem]');
	});

	test('nav button uses Copa interaction colors', () => {
		const cls = datePickerNavButtonVariants();
		expect(cls).toContain('text-[#0032A0]');
		expect(cls).toContain('hover:bg-[#F1F6FF]');
		expect(cls).toContain('disabled:text-[#B6BBC2]');
	});

	test('trigger input visuals match neutral input states', () => {
		expect(datePickerTriggerIconVariants()).toContain('text-grey-400');
		expect(datePickerTriggerIconVariants({ disabled: true })).toContain('text-grey-500');
		expect(datePickerTriggerTextVariants({ hasValue: true })).toContain('text-grey-700');
		expect(datePickerTriggerTextVariants({ hasValue: false })).toContain('text-grey-500');
		expect(datePickerTriggerTextVariants({ hasValue: true, disabled: true })).toContain(
			'text-grey-500'
		);
	});

	test('weekday labels use the deep Copa blue', () => {
		expect(datePickerHeadCellVariants()).toContain('text-[#0032A0]');
	});

	test('single date day styles selected, today and disabled states', () => {
		const cls = datePickerDayVariants();
		expect(cls).toContain('data-[selected]:bg-[#126BFF]');
		expect(cls).toContain('data-[today]:text-[#0032A0]');
		expect(cls).toContain('data-[disabled]:text-[#B6BBC2]');
	});

	test('range day styles middle and endpoints', () => {
		const cls = dateRangeDayVariants();
		expect(cls).toContain('data-[range-middle]:bg-[#F1F6FF]');
		expect(cls).toContain(
			'data-[selection-start]:bg-[linear-gradient(90deg,rgb(255_255_255)_50%,rgb(241_246_255)_50%)]'
		);
		expect(cls).toContain(
			'data-[selection-end]:bg-[linear-gradient(90deg,rgb(241_246_255)_50%,rgb(255_255_255)_50%)]'
		);
	});

	test('range day label creates the selected blue circle', () => {
		const cls = dateRangeDayLabelVariants();
		expect(cls).toContain('group-data-[selection-start]:bg-[#126BFF]');
		expect(cls).toContain('group-data-[selection-end]:bg-[#126BFF]');
		expect(cls).toContain('group-data-[selection-start]:!text-common-white');
		expect(cls).toContain('group-data-[selection-end]:!text-common-white');
	});
});

describe('date formatting helpers', () => {
	test('formats empty values as an empty string', () => {
		expect(formatDateValue(undefined)).toBe('');
	});

	test('formats date values with the provided locale', () => {
		expect(formatDateValue(parseDate('2026-06-16'), 'en-US')).toBe('Jun 16, 2026');
	});

	test('formats month headings', () => {
		expect(formatCalendarMonth(parseDate('2026-06-16'), 'en-US')).toBe('June 2026');
	});
});

describe('DateRangePicker source structure', () => {
	test('uses one visible range trigger field', () => {
		expect(rangeSource).toContain('triggerButton');
		expect(rangeSource).toContain('<BitsDateRangePicker.Trigger');
		expect(rangeSource).not.toContain('startButton');
		expect(rangeSource).not.toContain('endButton');
	});

	test('uses bits-ui range picker primitives for value, popover and calendar', () => {
		expect(rangeSource).toContain('<BitsDateRangePicker.Root');
		expect(rangeSource).toContain('<BitsPortal');
		expect(rangeSource).toContain('<BitsDateRangePicker.Content');
		expect(rangeSource).toContain('<BitsDateRangePicker.Calendar');
	});
});
