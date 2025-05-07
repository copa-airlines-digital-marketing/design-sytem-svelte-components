<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { InformativeBoxIconVariant, InformativeBoxIconVariants } from './index.js';

	type $$Props = InformativeBoxIconVariants;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'normal';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<span class={cn(InformativeBoxIconVariant({ size }), className)} {...$$restProps}>
	<slot></slot>
</span>
