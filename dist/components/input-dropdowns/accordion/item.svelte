<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'clsx';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = AccordionPrimitive.ItemProps & {
		customcn?: (...inputs: ClassValue[]) => string;
		children?: Snippet;
	};

	let { value = '', customcn, class: className, children, ...restProps }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<AccordionPrimitive.Item {value} class={cn(className)} {...restProps}>
	{@render children?.()}
</AccordionPrimitive.Item>
