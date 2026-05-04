<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn as defaultcn } from '../../../index.js';
	import { informativeBoxVariant, type InformativeBoxVariants } from './index.js';

	type $$Props = InformativeBoxVariants & {
		children?: Snippet;
	};

	let {
		class: className,
		alignment = 'left',
		orientation = 'vertical',
		customcn,
		children
	}: $$Props = $props();

	const cn = $derived(customcn || defaultcn);
</script>

<div class={cn(informativeBoxVariant({ alignment, orientation }), className)}>
	{@render children?.()}
</div>
