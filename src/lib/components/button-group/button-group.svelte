<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import {
		buttonGroupChipVariants,
		buttonGroupFrameVariants,
		buttonGroupIndicatorVariants,
		buttonGroupLabelVariants,
		buttonGroupRootVariants,
		type ButtonGroupProps
	} from './index.js';

	let {
		value = $bindable(''),
		options = [],
		label = null,
		disabled = false,
		size = 'default',
		loop = true,
		rovingFocus = true,
		orientation = 'horizontal',
		class: className,
		frameClass,
		labelClass,
		chipClass,
		customcn,
		onValueChange,
		...restProps
	}: ButtonGroupProps = $props();

	const cn = $derived(customcn ?? defaultCn);
	const activeIndex = $derived(options.findIndex((option) => option.value === value));
	const activeOption = $derived(options.find((option) => option.value === value));
	const indicatorCount = $derived(Math.max(options.length, 1));
	const indicatorGapTotal = $derived(Math.max(options.length - 1, 0) * 4);
	const indicatorTranslatePercent = $derived(Math.max(activeIndex, 0) * 100);
	const indicatorTranslateGap = $derived(Math.max(activeIndex, 0) * 4);
	const showIndicator = $derived(options.length > 0 && activeIndex >= 0);
	let lastValue = $state(value);

	$effect(() => {
		if (value && value !== lastValue) {
			lastValue = value;
		}
	});

	function handleValueChange(nextValue: string) {
		if (disabled) return;

		if (!nextValue) {
			value = lastValue;
			return;
		}

		value = nextValue;
		lastValue = nextValue;
		onValueChange?.(nextValue);
	}
</script>

<div class={cn(buttonGroupRootVariants(), className)}>
	{#if label}
		<span class={cn(buttonGroupLabelVariants(), labelClass)}>{label}</span>
	{/if}

	<ToggleGroupPrimitive.Root
		type="single"
		{disabled}
		{loop}
		{orientation}
		{rovingFocus}
		bind:value
		onValueChange={handleValueChange}
		class={cn(buttonGroupFrameVariants({ disabled }), frameClass)}
		{...restProps}
	>
		{#if showIndicator}
			<span
				aria-hidden="true"
				class={cn(
					buttonGroupIndicatorVariants({
						disabled: disabled || activeOption?.disabled
					})
				)}
				style={`width: calc((100% - 8px - ${indicatorGapTotal}px) / ${indicatorCount}); transform: translateX(calc(${indicatorTranslatePercent}% + ${indicatorTranslateGap}px));`}
			></span>
		{/if}

		{#each options as option (option.value)}
			<ToggleGroupPrimitive.Item
				value={option.value}
				disabled={disabled || option.disabled}
				aria-label={option.ariaLabel ?? option.label}
				class={cn(
					buttonGroupChipVariants({
						size,
						active: value === option.value,
						disabled: disabled || option.disabled
					}),
					chipClass
				)}
			>
				{#snippet children()}
					<span class="relative z-10 min-w-0 truncate">{option.label}</span>
				{/snippet}
			</ToggleGroupPrimitive.Item>
		{/each}
	</ToggleGroupPrimitive.Root>
</div>
