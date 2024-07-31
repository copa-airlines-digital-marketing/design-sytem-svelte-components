<script lang="ts">
	import { cn } from '$lib/utils';
	import { type TypographyVariants, typographyVariants } from './root.variants';

	type $$Props = TypographyVariants;

	export let size: $$Props['size'] = 'b';
	export let variant: $$Props['variant'] = 'body';
	export let tag: $$Props['tag'] = 'p';
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn(typographyVariants({ size, variant, className }))}
	{...$$restProps}
>
	<slot />
</svelte:element>
