<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';
	import { AccordionTriggerVariant, type AccordionTriggerProps } from './index.js';

	type $$Props = AccordionPrimitive.ContentProps & AccordionTriggerProps;

	let className: $$Props['class'] = undefined;
	export let separator: $$Props['separator-position'] = 'top';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class, separator as 'separator-position' };

	const cn = customcn || defaultcn;
</script>

<AccordionPrimitive.Trigger class={cn(AccordionTriggerVariant({"separator-position": separator}), 'grid p-6 gap-1', className)} {...$$restProps}>
	<slot />
</AccordionPrimitive.Trigger>
