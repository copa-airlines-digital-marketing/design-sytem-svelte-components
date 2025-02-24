<script lang="ts">
	import { cn } from '$lib/index.js';
	import { type LinkProps, getTypographyVariant } from './index.js';

	type $$Props = LinkProps;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'link';
	export let href: $$Props['href'] = undefined;
	export { className as class };
</script>

<a {href} class={cn(getTypographyVariant(variant), className)} {...$$restProps}>
	<slot />
</a>
