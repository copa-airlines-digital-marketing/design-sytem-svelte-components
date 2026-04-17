<script lang="ts">
	import Slider from '../lib/components/slider/slider.svelte';

	type Props = {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
		label?: string;
		minLabel?: string;
		maxLabel?: string;
		showTooltip?: boolean;
		formattedValue?: string;
	};

	let {
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
		label = '',
		minLabel = '',
		maxLabel = '',
		showTooltip = true,
		formattedValue = ''
	}: Props = $props();

	const formatTooltip = $derived(
		formattedValue ? (_v: number) => formattedValue : (v: number) => String(v)
	);
</script>

<div class="w-64 p-4">
	<Slider
		bind:value
		{min}
		{max}
		{step}
		{disabled}
		label={label || undefined}
		minLabel={minLabel || undefined}
		maxLabel={maxLabel || undefined}
		{showTooltip}
		{formatTooltip}
	/>
	<p class="mt-3 font-body text-d3 text-grey-600">Current value: <strong>{value}</strong></p>
</div>
