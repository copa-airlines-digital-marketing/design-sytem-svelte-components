<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { InformativeBoxImageVariant, type InformativeBoxImageVariants } from './index.js';

	type Props = InformativeBoxImageVariants & {
		children?: Snippet;
	};

	let {
		aspect = '1:1',
		size = 'big',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
	const spanProps = $derived(restProps as HTMLAttributes<HTMLSpanElement>);
</script>

<span class={cn(InformativeBoxImageVariant({ aspect, size }), className)} {...spanProps}>
	{@render children?.()}
</span>
