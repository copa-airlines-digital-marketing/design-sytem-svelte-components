<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import { cn as defaultcn } from '../../../../index.js';

	type $$Props = AccordionPrimitive.ContentProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<AccordionPrimitive.Content
	class={cn('p-6 transition-all', className)}
	transition={slide}
	transitionConfig={{ duration: 200 }}
	{...$$restProps}
>
	<slot />
</AccordionPrimitive.Content>
