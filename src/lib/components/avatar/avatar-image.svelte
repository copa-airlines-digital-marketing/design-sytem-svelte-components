<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { cn as defaultcn } from '../../index.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type $$Props = AvatarPrimitive.ImageProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let src: $$Props['src'] = undefined;
	export let alt: $$Props['alt'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<AvatarPrimitive.Image
	{src}
	{alt}
	class={cn('h-full w-full rounded-full object-cover', className)}
	{...$$restProps}
/>
