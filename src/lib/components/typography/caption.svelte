<script lang="ts">
	import { cn } from '../../index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getTypography, type CaptionProps, type HTMLTextElements } from './index.js';

	export let tag: keyof HTMLTextElements = 'p';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & CaptionProps;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'caption';
	export let variant: $$Props['variant'] = 'caption';
	export { className as class };
</script>

<svelte:element this={tag} class={cn(getTypography(size, variant), className)} {...$$restProps}>
	<slot />
</svelte:element>
