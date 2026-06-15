<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../index.js';
	import { getAvatarVariants, type Props } from './index.js';

	let {
		class: className,
		delayMs = 0,
		size = 'normal',
		stroke = true,
		customcn,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn || defaultcn);
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn(getAvatarVariants({ size, stroke, className: cn(className) }))}
	{...restProps}
>
	{@render children?.()}
</AvatarPrimitive.Root>
