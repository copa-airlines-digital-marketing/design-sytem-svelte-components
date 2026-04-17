<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import {
		sliderRootVariants,
		sliderRangeVariants,
		sliderThumbVariants,
		sliderTooltipVariants,
		sliderLabelVariants,
		type SliderProps
	} from './index.js';

	let {
		value = $bindable(),
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
		label,
		minLabel,
		maxLabel,
		showTooltip = true,
		formatTooltip = (v: number) => String(v),
		icon,
		class: className,
		customcn
	}: SliderProps = $props();

	const cn = $derived(customcn ?? defaultCn);
	const currentValue = $derived(value ?? min);
	const percent = $derived(min >= max ? 0 : ((currentValue - min) / (max - min)) * 100);
</script>

<div class={cn('flex w-full flex-col gap-2', className)}>
	{#if label}
		<div class={cn(sliderLabelVariants())}>
			{#if icon}
				<span class="flex size-6 shrink-0 items-center justify-center">
					{@render icon()}
				</span>
			{/if}
			<span class="font-medium">{label}</span>
			{#if minLabel || maxLabel}
				<span aria-hidden="true">·</span>
				{#if minLabel}<span>{minLabel}</span>{/if}
				{#if minLabel && maxLabel}<span aria-hidden="true">-</span>{/if}
				{#if maxLabel}<span>{maxLabel}</span>{/if}
			{/if}
		</div>
	{/if}

	<!-- overflow-visible lets the tooltip extend below the 4px track without extra padding -->
	<div class="relative w-full overflow-visible">
		{#if showTooltip}
			<span aria-hidden="true" class={cn(sliderTooltipVariants())} style="left: {percent}%">
				{formatTooltip(currentValue)}
			</span>
		{/if}

		<!--
			bits-ui v2 Slider has no Track sub-component.
			The Root <span> IS the track; Range and Thumbs are direct children.
		-->
		<SliderPrimitive.Root
			type="single"
			bind:value
			{min}
			{max}
			{step}
			{disabled}
			class={cn(sliderRootVariants())}
		>
			{#snippet children({ thumbItems })}
				<SliderPrimitive.Range class={cn(sliderRangeVariants())} />

				{#each thumbItems as thumb (thumb.index)}
					<SliderPrimitive.Thumb index={thumb.index} class={cn(sliderThumbVariants())} />
				{/each}
			{/snippet}
		</SliderPrimitive.Root>
	</div>
</div>
