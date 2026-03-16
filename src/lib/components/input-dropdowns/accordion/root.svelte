<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ClassValue } from 'clsx';
	import { Accordion } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		customcn?: (...inputs: ClassValue[]) => string;
		children?: Snippet;
	};

	let { class: className, customcn, children }: $$Props = $props();

	const cn = $derived(customcn || defaultcn);
</script>

<Accordion.Root type="single" class={cn('space-y-2', className)}>
	{@render children?.()}
</Accordion.Root>
