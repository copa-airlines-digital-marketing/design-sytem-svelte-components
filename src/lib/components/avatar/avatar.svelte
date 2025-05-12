<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../index.js';
	import { getAvatarVariants, Image, Fallback, type Props } from './index.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let delayMs: $$Props['delayMs'] = 0;
	export let size: $$Props['size'] = 'normal';
	export let stroke: $$Props['stroke'] = true;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn(getAvatarVariants({ size, stroke, className }))}
	{...$$restProps}
>
	<slot {Image} {Fallback} />
</AvatarPrimitive.Root>
