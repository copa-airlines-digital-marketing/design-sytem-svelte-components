<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import { DateRangePicker as BitsDateRangePicker, Portal as BitsPortal } from 'bits-ui';
	import type { DateRange } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { HelperText } from '../helper-text/index.js';
	import { fieldBoxVariants, inputWrapperVariants, labelVariants } from '../input/index.js';
	import CalendarPanel from './calendar-panel.svelte';
	import {
		datePickerCalendarVariants,
		datePickerPopoverVariants,
		datePickerTriggerIconVariants,
		datePickerTriggerTextVariants,
		formatDateValue,
		type DateRangePickerProps
	} from './index.js';

	let {
		value = $bindable<DateRange>({ start: undefined, end: undefined }),
		placeholder = 'Selecciona fechas',
		rangeSeparator = '-',
		label,
		mandatory = false,
		helperText,
		error = false,
		disabled = false,
		readonly = false,
		required = false,
		locale = 'es-PA',
		calendarLabel = 'Fechas de viaje',
		calendarPlaceholder,
		minValue,
		maxValue,
		isDateDisabled,
		isDateUnavailable,
		onInvalid,
		weekStartsOn = 1,
		weekdayFormat = 'short',
		fixedWeeks = true,
		preventDeselect = false,
		displayOptions,
		startName,
		endName,
		id,
		numberOfMonths = 2,
		pagedNavigation = true,
		closeOnRangeSelect = true,
		minDays,
		maxDays,
		excludeDisabled = false,
		onValueChange,
		onStartValueChange,
		onEndValueChange,
		validate,
		class: className,
		customcn
	}: DateRangePickerProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	let open = $state(false);
	let triggerButton = $state<HTMLButtonElement | null>(null);
	let completedRangeKey = $state('');

	const generatedId = `date-range-${Math.random().toString(36).slice(2, 9)}`;
	const triggerId = $derived(id ?? generatedId);
	const formattedStart = $derived(formatDateValue(value.start, locale, displayOptions));
	const formattedEnd = $derived(formatDateValue(value.end, locale, displayOptions));
	const formattedRange = $derived.by(() => {
		if (formattedStart && formattedEnd) {
			return `${formattedStart} ${rangeSeparator} ${formattedEnd}`;
		}

		return formattedStart || formattedEnd;
	});

	$effect(() => {
		const rangeKey =
			value.start && value.end ? `${value.start.toString()}/${value.end.toString()}` : '';

		if (!rangeKey) {
			completedRangeKey = '';
			return;
		}

		if (rangeKey === completedRangeKey) return;

		completedRangeKey = rangeKey;
		if (closeOnRangeSelect && open) {
			open = false;
		}
	});

	function handleCloseAutoFocus(event: Event) {
		event.preventDefault();
		triggerButton?.focus();
	}
</script>

<BitsDateRangePicker.Root
	bind:value
	bind:open
	placeholder={calendarPlaceholder}
	{locale}
	{calendarLabel}
	{minValue}
	{maxValue}
	{isDateDisabled}
	{isDateUnavailable}
	{onInvalid}
	{weekStartsOn}
	{weekdayFormat}
	{fixedWeeks}
	{preventDeselect}
	{disabled}
	{readonly}
	{required}
	{numberOfMonths}
	{pagedNavigation}
	{closeOnRangeSelect}
	{minDays}
	{maxDays}
	{excludeDisabled}
	{onValueChange}
	{onStartValueChange}
	{onEndValueChange}
	{validate}
>
	<div class={cn(inputWrapperVariants(), className)}>
		{#if label}
			<label
				for={triggerId}
				class="inline-flex cursor-pointer items-baseline gap-0.5 overflow-hidden"
			>
				<span class={cn(labelVariants())}>{label}</span>
				{#if mandatory}
					<span class="font-body text-d1 text-system-error" aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}

		<BitsDateRangePicker.Trigger
			bind:ref={triggerButton}
			id={triggerId}
			type="button"
			{disabled}
			class={cn(
				fieldBoxVariants({ error, disabled }),
				'min-h-[3.25rem] text-left outline-none focus-visible:border-primary',
				open && !error && !disabled && 'border-primary'
			)}
		>
			<svg
				viewBox="0 0 24 24"
				class={cn(datePickerTriggerIconVariants({ disabled }))}
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h1V3a1 1 0 011-1zm12 8H5v9a1 1 0 001 1h12a1 1 0 001-1v-9zM6 6a1 1 0 00-1 1v1h14V7a1 1 0 00-1-1H6z"
				/>
			</svg>

			<span
				class={cn(datePickerTriggerTextVariants({ hasValue: Boolean(formattedRange), disabled }))}
			>
				{formattedRange || placeholder}
			</span>
		</BitsDateRangePicker.Trigger>

		{#if helperText}
			<HelperText text={helperText} type={error ? 'error' : 'regular'} />
		{/if}
	</div>

	{#if startName}
		<BitsDateRangePicker.Input type="start" name={startName} class="hidden" />
	{/if}

	{#if endName}
		<BitsDateRangePicker.Input type="end" name={endName} class="hidden" />
	{/if}

	<BitsPortal>
		<BitsDateRangePicker.Content
			side="bottom"
			sideOffset={8}
			avoidCollisions={true}
			onCloseAutoFocus={handleCloseAutoFocus}
			style="z-index: 50;"
			class={cn(datePickerPopoverVariants({ range: true }))}
		>
			<BitsDateRangePicker.Calendar class={cn(datePickerCalendarVariants())}>
				{#snippet children({ months, weekdays })}
					<CalendarPanel mode="range" {months} {weekdays} {locale} {customcn} />
				{/snippet}
			</BitsDateRangePicker.Calendar>
		</BitsDateRangePicker.Content>
	</BitsPortal>
</BitsDateRangePicker.Root>
