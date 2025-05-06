<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from './index.js';
	import { cn as basecn } from '../../index.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'solid-primary-main';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export let customcn: $$Props['customcn'] = undefined;
	export { customcn as cn };
	export { className as class };

	let cn = customcn || basecn;
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
