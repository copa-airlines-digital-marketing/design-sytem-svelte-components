<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { type LinkProps, getTypographyVariant } from './index.js';

	type $$Props = LinkProps;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'link';
	export let href: $$Props['href'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<a {href} class={cn(getTypographyVariant(variant), className)} {...$$restProps}>
	<slot />
</a>
