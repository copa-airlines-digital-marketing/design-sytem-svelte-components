<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import { dimmerVariants, type DimmerProps } from './index.js';

	let {
		color = 'grey',
		opacity = '80',
		class: className,
		customcn,
		onclick,
		id,
		style
	}: DimmerProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<div
	{id}
	{style}
	class={cn(
		dimmerVariants({ color, opacity }),
		onclick ? 'pointer-events-auto cursor-pointer' : '',
		className
	)}
	aria-hidden="true"
	{onclick}
></div>
