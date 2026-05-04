<script lang="ts">
	import type { ClassNameValue } from 'tailwind-merge';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../index.js';
	import { getAvatarVariants, type Props } from './index.js';

	/* eslint-disable svelte/valid-compile -- wrapper: restProps typed via Props (Omit<AvatarPrimitive.RootProps, keyof AvatarComponentProps>) */
	let {
		class: className,
		delayMs = 0,
		size = 'normal',
		stroke = true,
		customcn,
		children,
		...restProps
	}: Props = $props();
	/* eslint-enable svelte/valid-compile */

	const cn = $derived(customcn || defaultcn);
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn(getAvatarVariants({ size, stroke, className: className as ClassNameValue }))}
	{...restProps}
>
	{@render children?.()}
</AvatarPrimitive.Root>
