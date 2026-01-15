<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../../index.js';
	import { Trigger } from './index.js';

	type $$Props = AccordionPrimitive.ContentProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<AccordionPrimitive.Header class={cn(className)} {...$$restProps}>
	<slot {Trigger} />
</AccordionPrimitive.Header>
