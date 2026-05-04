<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../index.js';
	import { getTypography, type BodyProps, type HTMLTextElements } from './index.js';

	type Props = BodyProps &
		HTMLAttributes<HTMLElement> & {
			children?: Snippet;
		};

	let {
		tag = 'p',
		size = 'body',
		variant = 'body',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svelte:element this={tag} class={cn(getTypography(size, variant), className)} {...restProps}>
	{@render children?.()}
</svelte:element>
