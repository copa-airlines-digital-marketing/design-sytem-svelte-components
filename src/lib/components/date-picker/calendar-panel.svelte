<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import { DatePicker as BitsDatePicker, DateRangePicker as BitsDateRangePicker } from 'bits-ui';
	import type { DateRange, Month } from 'bits-ui';
	import type { ClassValue } from 'clsx';
	import { cn as defaultCn } from '../../index.js';
	import KeyboardArrow from '../icon/regular/keyboard-arrow.svelte';
	import {
		datePickerCalendarVariants,
		datePickerCellVariants,
		datePickerDayVariants,
		datePickerGridRowVariants,
		datePickerGridVariants,
		datePickerHeadCellVariants,
		datePickerHeaderVariants,
		datePickerHeadingVariants,
		datePickerMonthsVariants,
		datePickerMonthTitleVariants,
		datePickerNavButtonVariants,
		dateRangeDayVariants,
		dateRangeDayLabelVariants,
		formatCalendarMonth
	} from './index.js';

	type CalendarMode = 'single' | 'range';

	type Props = {
		mode?: CalendarMode;
		months: Month<DateValue>[];
		weekdays: string[];
		locale?: string;
		customcn?: (...inputs: ClassValue[]) => string;
		highlightedRange?: DateRange;
	};

	let {
		mode = 'single',
		months,
		weekdays,
		locale = 'es-PA',
		customcn,
		highlightedRange
	}: Props = $props();

	const cn = $derived(customcn ?? defaultCn);
	const isRange = $derived(mode === 'range');

	function isDateInHighlightedRange(date: DateValue) {
		if (!highlightedRange?.start || !highlightedRange?.end) return false;

		const dateKey = date.toString();
		const startKey = highlightedRange.start.toString();
		const endKey = highlightedRange.end.toString();
		const [rangeStart, rangeEnd] = startKey <= endKey ? [startKey, endKey] : [endKey, startKey];

		return dateKey >= rangeStart && dateKey <= rangeEnd;
	}
</script>

{#if isRange}
	<BitsDateRangePicker.Header class={cn(datePickerHeaderVariants())}>
		<BitsDateRangePicker.PrevButton
			class={cn(datePickerNavButtonVariants())}
			aria-label="Mes anterior"
		>
			<KeyboardArrow direction="left" class="size-5" />
		</BitsDateRangePicker.PrevButton>

		<div class={cn(datePickerMonthsVariants({ range: true }))}>
			{#each months as month (month.value.toString())}
				<div class={cn(datePickerMonthTitleVariants())}>
					{formatCalendarMonth(month.value, locale)}
				</div>
			{/each}
		</div>

		<BitsDateRangePicker.Heading class="sr-only" />

		<BitsDateRangePicker.NextButton
			class={cn(datePickerNavButtonVariants())}
			aria-label="Mes siguiente"
		>
			<KeyboardArrow direction="right" class="size-5" />
		</BitsDateRangePicker.NextButton>
	</BitsDateRangePicker.Header>

	<div class={cn(datePickerMonthsVariants({ range: true }))}>
		{#each months as month (month.value.toString())}
			<div>
				<BitsDateRangePicker.Grid class={cn(datePickerGridVariants())}>
					<BitsDateRangePicker.GridHead>
						<BitsDateRangePicker.GridRow class={cn(datePickerGridRowVariants())}>
							{#each weekdays as day}
								<BitsDateRangePicker.HeadCell class={cn(datePickerHeadCellVariants())}>
									{day}
								</BitsDateRangePicker.HeadCell>
							{/each}
						</BitsDateRangePicker.GridRow>
					</BitsDateRangePicker.GridHead>

					<BitsDateRangePicker.GridBody>
						{#each month.weeks as weekDates}
							<BitsDateRangePicker.GridRow class={cn(datePickerGridRowVariants())}>
								{#each weekDates as date (date.toString())}
									<BitsDateRangePicker.Cell
										{date}
										month={month.value}
										class={cn(datePickerCellVariants())}
									>
										<BitsDateRangePicker.Day
											data-highlighted-range={isDateInHighlightedRange(date) ? '' : undefined}
											class={cn(dateRangeDayVariants())}
										>
											{#snippet children({ day })}
												<span class={cn(dateRangeDayLabelVariants())}>{day}</span>
											{/snippet}
										</BitsDateRangePicker.Day>
									</BitsDateRangePicker.Cell>
								{/each}
							</BitsDateRangePicker.GridRow>
						{/each}
					</BitsDateRangePicker.GridBody>
				</BitsDateRangePicker.Grid>
			</div>
		{/each}
	</div>
{:else}
	<BitsDatePicker.Header class={cn(datePickerHeaderVariants())}>
		<BitsDatePicker.PrevButton class={cn(datePickerNavButtonVariants())} aria-label="Mes anterior">
			<KeyboardArrow direction="left" class="size-5" />
		</BitsDatePicker.PrevButton>

		<BitsDatePicker.Heading class={cn(datePickerHeadingVariants())} />

		<BitsDatePicker.NextButton class={cn(datePickerNavButtonVariants())} aria-label="Mes siguiente">
			<KeyboardArrow direction="right" class="size-5" />
		</BitsDatePicker.NextButton>
	</BitsDatePicker.Header>

	<div class={cn(datePickerMonthsVariants({ range: false }))}>
		{#each months as month (month.value.toString())}
			<BitsDatePicker.Grid class={cn(datePickerGridVariants())}>
				<BitsDatePicker.GridHead>
					<BitsDatePicker.GridRow class={cn(datePickerGridRowVariants())}>
						{#each weekdays as day}
							<BitsDatePicker.HeadCell class={cn(datePickerHeadCellVariants())}>
								{day}
							</BitsDatePicker.HeadCell>
						{/each}
					</BitsDatePicker.GridRow>
				</BitsDatePicker.GridHead>

				<BitsDatePicker.GridBody>
					{#each month.weeks as weekDates}
						<BitsDatePicker.GridRow class={cn(datePickerGridRowVariants())}>
							{#each weekDates as date (date.toString())}
								<BitsDatePicker.Cell
									{date}
									month={month.value}
									class={cn(datePickerCellVariants())}
								>
									<BitsDatePicker.Day class={cn(datePickerDayVariants())} />
								</BitsDatePicker.Cell>
							{/each}
						</BitsDatePicker.GridRow>
					{/each}
				</BitsDatePicker.GridBody>
			</BitsDatePicker.Grid>
		{/each}
	</div>
{/if}
