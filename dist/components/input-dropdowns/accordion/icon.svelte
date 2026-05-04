<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ClassValue } from 'clsx';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = HTMLAttributes<HTMLSpanElement> & {
		customcn?: (...inputs: ClassValue[]) => string;
		children?: Snippet;
	};

	let { customcn, class: className, children, ...restProps }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<span class={cn('[grid-area:icon] block size-6', className)} {...restProps}>
	{@render children?.()}
</span>
