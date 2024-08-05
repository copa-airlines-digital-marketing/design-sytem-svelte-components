<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { getAvatarVariants, type Props } from '.';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let delayMs: $$Props['delayMs'] = 0;
	export let size: $$Props['size'] = 'normal';
	export let stroke: $$Props['stroke'] = true;
	export { className as class };
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn(getAvatarVariants({ size, stroke, className }))}
	{...$$restProps}
>
	<slot />
</AvatarPrimitive.Root>
