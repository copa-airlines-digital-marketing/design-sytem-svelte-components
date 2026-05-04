<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { Caption, type HTMLTextElements, type CaptionProps } from '../../typography/index.js';

	type $$Props = HTMLAttributes<HTMLElement> &
		CaptionProps & {
			tag?: keyof HTMLTextElements;
			children?: Snippet;
		};

	let { tag = 'span', customcn, class: className, children }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<Caption
	{tag}
	customcn={cn}
	size="caption-tiny"
	class={cn('[grid-area:cta] text-primary', className)}
>
	{@render children?.()}
</Caption>
