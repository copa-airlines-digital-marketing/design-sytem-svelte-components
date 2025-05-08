<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../index.js';
	import { Header, Content } from './index.js';

	type $$Props = AccordionPrimitive.ItemProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;

	const children = {
		Header,
		Content
	};
</script>

<AccordionPrimitive.Item {value} class={cn(className)} {...$$restProps}>
	<slot {...children} />
</AccordionPrimitive.Item>
