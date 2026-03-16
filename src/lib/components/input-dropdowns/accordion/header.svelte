<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'clsx';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = AccordionPrimitive.HeaderProps & {
		customcn?: (...inputs: ClassValue[]) => string;
		children?: Snippet;
	};

	let { customcn, class: className, children, ...restProps }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<AccordionPrimitive.Header class={cn(className)} {...restProps}>
	{@render children?.()}
</AccordionPrimitive.Header>
