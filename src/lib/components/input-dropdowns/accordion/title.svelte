<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { getTypographyVariant, type HeadingProps } from '../../typography/index.js';

	type $$Props = HeadingProps;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'h3';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<span class={cn(getTypographyVariant(variant), 'text-primary [grid-area:title]', className)}>
	<slot />
</span>
