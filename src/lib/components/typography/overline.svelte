<script lang="ts">
	import { cn as defaultcn } from '../../index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type OverlineProps, type HTMLTextElements, getTypographySize } from './index.js';

	export let tag: keyof HTMLTextElements = 'p';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & OverlineProps;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'overline';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svelte:element this={tag} class={cn(getTypographySize(size), className)} {...$$restProps}>
	<slot />
</svelte:element>
