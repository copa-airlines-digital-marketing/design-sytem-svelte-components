<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import { optionVariants, optionLabelVariants, type OptionProps } from './index.js';

	let {
		label,
		leftIcon,
		rightIcon,
		disabled = false,
		onclick,
		class: className,
		customcn
	}: OptionProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<!--
	States are entirely CSS-driven:
	  :hover         → background-lightblue
	  :focus-visible → background-lightblue + 2px inset primary ring (keyboard nav)
	  disabled attr  → grey-100 bg, not-allowed cursor
-->
<button type="button" {disabled} {onclick} class={cn(optionVariants(), className)}>
	{#if leftIcon}
		{@render leftIcon()}
	{/if}

	<span class={cn(optionLabelVariants())}>{label}</span>

	{#if rightIcon}
		{@render rightIcon()}
	{/if}
</button>
