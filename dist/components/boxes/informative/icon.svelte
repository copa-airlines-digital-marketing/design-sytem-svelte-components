<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn as defaultcn } from '../../../index.js';
	import { InformativeBoxIconVariant, type InformativeBoxIconVariants } from './index.js';

	type Props = InformativeBoxIconVariants & {
		children?: Snippet;
	};

	let { size = 'normal', customcn, class: className, children, ...restProps }: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<span class={cn(InformativeBoxIconVariant({ size }), className)} {...restProps}>
	{@render children?.()}
</span>
