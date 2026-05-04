<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn as defaultcn } from '../../../index.js';
	import { getTypographyVariant, type HeadingProps } from '../../typography/index.js';

	type $$Props = HeadingProps & {
		children?: Snippet;
	};

	let { variant = 'h3', customcn, class: className, children }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<span class={cn(getTypographyVariant(variant), 'text-primary [grid-area:title]', className)}>
	{@render children?.()}
</span>
