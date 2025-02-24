<script lang="ts">
	import { cn } from '$lib/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getTypography, type BodyProps, type HTMLTextElements } from './index.js';

	export let tag: keyof HTMLTextElements = 'p';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & BodyProps;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'body';
	export let variant: $$Props['variant'] = 'body';
	export { className as class };
</script>

<svelte:element this={tag} class={cn(getTypography(size, variant), className)} {...$$restProps}>
	<slot />
</svelte:element>
