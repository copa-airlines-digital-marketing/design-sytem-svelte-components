<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { InformativeBoxImageVariant, type InformativeBoxImageVariants } from './index.js';

	type $$Props = InformativeBoxImageVariants;

	let className: $$Props['class'] = undefined;
	export let aspect: $$Props['aspect'] = '1:1';
	export let size: $$Props['size'] = 'big';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<span class={cn(InformativeBoxImageVariant({ aspect, size }), className)} {...$$restProps}>
	<slot></slot>
</span>
