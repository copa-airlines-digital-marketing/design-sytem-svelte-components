<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { Body, type HTMLTextElements, type BodyProps } from '../../typography/index.js';

	type $$Props = HTMLAttributes<HTMLElement> &
		BodyProps & {
			tag?: keyof HTMLTextElements;
			children?: Snippet;
		};

	let { tag = 'span', customcn, class: className, children }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<Body {tag} customcn={cn} size="body-small" class={cn('[grid-area:label] flex gap-1', className)}>
	<span> · </span>
	<span>
		{@render children?.()}
	</span>
</Body>
