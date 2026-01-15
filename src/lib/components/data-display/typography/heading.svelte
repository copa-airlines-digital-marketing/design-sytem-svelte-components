<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { getTypographyVariant, type HeadingProps } from './index.js';

	type $$Props = HeadingProps;

	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h2';
	export let variant: $$Props['variant'] = 'h2';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svelte:element this={tag} class={cn(getTypographyVariant(variant), className)} {...$$restProps}>
	<slot />
</svelte:element>
