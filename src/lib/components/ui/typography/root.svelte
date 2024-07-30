<script lang="ts">
	import { cn } from '$lib/utils';
	import { type TypographyVariants, typographyVariants } from './variants';

	type $$Props = TypographyVariants;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = undefined;
	export { className as class };
</script>

<p class={cn(typographyVariants({ size, className }))}>
	<slot />
</p>
