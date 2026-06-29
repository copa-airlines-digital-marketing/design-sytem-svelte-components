<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Props, buttonVariants } from './index.js';
	import { cn as basecn } from '../../index.js';

	/* eslint-disable svelte/valid-compile -- wrapper: restProps typed via Props (Omit<HTMLButtonAttributes, keyof ButtonComponentProps>) */
	let {
		class: className,
		variant = 'solid-primary-main',
		size = 'default',
		customcn,
		href,
		children,
		...restProps
	}: Props = $props();
	/* eslint-enable svelte/valid-compile */

	const cn = $derived(customcn ?? basecn);
	const anchorRestProps = $derived(restProps as any);
</script>

{#if href}
	<a
		class={cn(buttonVariants({ variant, size, className: className ?? '' }))}
		{href}
		{...anchorRestProps}
	>
		{@render children?.()}
	</a>
{:else}
	<ButtonPrimitive.Root
		class={cn(buttonVariants({ variant, size, className: className ?? '' }))}
		type="button"
		{...restProps}
	>
		{@render children?.()}
	</ButtonPrimitive.Root>
{/if}
