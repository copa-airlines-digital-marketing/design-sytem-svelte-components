<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLinkAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../index.js';
	import { type LinkProps, getTypographyVariant } from './index.js';

	type Props = LinkProps & {
		children?: Snippet;
	};

	let {
		variant = 'link',
		href,
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<a {href} class={cn(getTypographyVariant(variant), className)} {...restProps}>
	{@render children?.()}
</a>
