<script lang="ts">
	import { parseDate, type DateValue } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';
	import DatePicker from '../lib/components/date-picker/date-picker.svelte';
	import DateRangePicker from '../lib/components/date-picker/date-range-picker.svelte';
	import { formatDateValue } from '../lib/components/date-picker/index.js';

	type Props = {
		mode?: 'single' | 'range';
		label?: string;
		mandatory?: boolean;
		helperText?: string;
		error?: boolean;
		disabled?: boolean;
		showInitialValue?: boolean;
		numberOfMonths?: number;
	};

	let {
		mode = 'single',
		label = 'Fecha de viaje',
		mandatory = false,
		helperText = '',
		error = false,
		disabled = false,
		showInitialValue = false,
		numberOfMonths = 2
	}: Props = $props();

	let dateValue = $state<DateValue | undefined>(undefined);
	let rangeValue = $state<DateRange>({ start: undefined, end: undefined });

	$effect(() => {
		dateValue = showInitialValue ? parseDate('2026-06-16') : undefined;
		rangeValue = showInitialValue
			? { start: parseDate('2026-06-16'), end: parseDate('2026-06-24') }
			: { start: undefined, end: undefined };
	});
</script>

<div class="min-h-[34rem] overflow-visible p-6">
	{#if mode === 'single'}
		<div class="w-80 space-y-3">
			<DatePicker
				bind:value={dateValue}
				placeholder="Selecciona fecha"
				{label}
				{mandatory}
				{helperText}
				{error}
				{disabled}
			/>

			<p class="font-body text-d1 text-grey-600">
				Fecha: <strong class="text-primary">{formatDateValue(dateValue)}</strong>
			</p>
		</div>
	{:else}
		<div class="w-full max-w-[24rem] space-y-3">
			<DateRangePicker
				bind:value={rangeValue}
				label="Fechas de vuelo"
				placeholder="Selecciona fechas"
				{mandatory}
				{helperText}
				{error}
				{disabled}
				{numberOfMonths}
			/>

			<p class="font-body text-d1 text-grey-600">
				Rango:
				<strong class="text-primary">
					{formatDateValue(rangeValue.start) || 'Sin ida'} - {formatDateValue(rangeValue.end) ||
						'Sin regreso'}
				</strong>
			</p>
		</div>
	{/if}
</div>
