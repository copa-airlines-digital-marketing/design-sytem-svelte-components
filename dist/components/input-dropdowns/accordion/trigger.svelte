<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';
	import { AccordionTriggerVariant, type AccordionTriggerProps } from './index.js';
	import { Carrot } from '../../icon/index.js';

	type Props = AccordionPrimitive.TriggerProps &
		AccordionTriggerProps & {
			children?: Snippet;
		};

	let {
		'separator-position': separator = 'top',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<AccordionPrimitive.Trigger
	class={cn(
		AccordionTriggerVariant({ 'separator-position': separator }),
		"grid w-full items-center border-grey-200 p-6 gap-1 [grid-template-areas:'icon_title_label_cta_carrot'] grid-cols-[auto_auto_1fr_auto_auto]",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<Carrot class="[grid-area:carrot] text-primary" />
</AccordionPrimitive.Trigger>
