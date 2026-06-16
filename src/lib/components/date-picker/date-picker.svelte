<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import { DatePicker as BitsDatePicker } from 'bits-ui';
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
		type DatePickerProps
	} from './index.js';

	let {
		value = $bindable<DateValue | undefined>(undefined),
		placeholder = 'Selecciona fecha',
		label,
		mandatory = false,
		helperText,
		error = false,
		disabled = false,
		readonly = false,
		required = false,
		locale = 'es-PA',
		calendarLabel = 'Fecha',
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
		name,
		id,
		onValueChange,
		validate,
		closeOnDateSelect = true,
		class: className,
		customcn
	}: DatePickerProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	let open = $state(false);

	const generatedId = `date-picker-${Math.random().toString(36).slice(2, 9)}`;
	const triggerId = $derived(id ?? generatedId);
	const formattedValue = $derived(formatDateValue(value, locale, displayOptions));
</script>

<BitsDatePicker.Root
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
	{onValueChange}
	{validate}
	{closeOnDateSelect}
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

		<BitsDatePicker.Trigger
			id={triggerId}
			{disabled}
			class={cn(
				fieldBoxVariants({ error, disabled }),
				'text-left outline-none focus-visible:border-primary',
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
				class={cn(datePickerTriggerTextVariants({ hasValue: Boolean(formattedValue), disabled }))}
			>
				{formattedValue || placeholder}
			</span>
		</BitsDatePicker.Trigger>

		{#if helperText}
			<HelperText text={helperText} type={error ? 'error' : 'regular'} />
		{/if}
	</div>

	{#if name}
		<BitsDatePicker.Input {name} class="hidden" />
	{/if}

	<BitsDatePicker.Portal>
		<BitsDatePicker.Content
			side="bottom"
			sideOffset={8}
			avoidCollisions={true}
			style="z-index: 50;"
			class={cn(datePickerPopoverVariants())}
		>
			<BitsDatePicker.Calendar class={cn(datePickerCalendarVariants())}>
				{#snippet children({ months, weekdays })}
					<CalendarPanel mode="single" {months} {weekdays} {locale} {customcn} />
				{/snippet}
			</BitsDatePicker.Calendar>
		</BitsDatePicker.Content>
	</BitsDatePicker.Portal>
</BitsDatePicker.Root>
