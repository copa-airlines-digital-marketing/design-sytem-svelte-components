<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../index.js';
	import type { ClassValue } from 'clsx';

	type $$Props = AvatarPrimitive.FallbackProps & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<AvatarPrimitive.Fallback
	class={cn('grid size-full place-content-center rounded-full bg-primary-ultralight', className)}
	{...$$restProps}
>
	<slot />
</AvatarPrimitive.Fallback>
