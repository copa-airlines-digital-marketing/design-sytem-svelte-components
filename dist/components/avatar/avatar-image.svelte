<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../index.js';

	type $$Props = AvatarPrimitive.ImageProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let { src, alt, customcn, class: className, ...restProps }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<AvatarPrimitive.Image
	{src}
	{alt}
	class={cn('h-full w-full rounded-full object-cover', className)}
	{...restProps}
/>
