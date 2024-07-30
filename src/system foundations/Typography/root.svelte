<script lang="ts">
	import { cn } from '$lib/utils';
	import { type TypographyVariants, typographyVariants } from './root.variants';

	type $$Props = TypographyVariants;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'body';
	export let variant: $$Props['variant'] = 'body';
	export { className as class };
</script>

<p class={cn(typographyVariants({ size, variant, className }))}>
	{typographyVariants({ size: size, variant: variant })}
	{variant}
	<slot />
</p>
