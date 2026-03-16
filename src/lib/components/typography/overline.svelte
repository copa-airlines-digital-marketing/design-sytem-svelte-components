<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../index.js';
	import { type OverlineProps, type HTMLTextElements, getTypographySize } from './index.js';

	type Props = OverlineProps &
		HTMLAttributes<HTMLElement> & {
			children?: Snippet;
		};

	let {
		tag = 'p',
		size = 'overline',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svelte:element this={tag} class={cn(getTypographySize(size), className)} {...restProps}>
	{@render children?.()}
</svelte:element>
