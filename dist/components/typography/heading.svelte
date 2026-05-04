<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../index.js';
	import { getTypographyVariant, type HeadingProps } from './index.js';

	type Props = HeadingProps &
		HTMLAttributes<HTMLElement> & {
			children?: Snippet;
		};

	let {
		tag = 'h2',
		variant = 'h2',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svelte:element this={tag} class={cn(getTypographyVariant(variant), className)} {...restProps}>
	{@render children?.()}
</svelte:element>
