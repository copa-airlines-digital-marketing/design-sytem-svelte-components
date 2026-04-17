<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import { navTabVariants, type NavTabProps } from './index.js';

	let {
		class: className,
		type = 'primary',
		active = false,
		subtitle,
		iconLeft,
		iconRight,
		customcn,
		children,
		...restProps
	}: NavTabProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<button
	class={cn(navTabVariants({ type, active }), className)}
	role="tab"
	aria-selected={active}
	{...restProps}
>
	{#if iconLeft}
		<span class="relative size-6 shrink-0">
			{@render iconLeft()}
		</span>
	{/if}

	<span class="flex flex-col items-center justify-center gap-1">
		{#if subtitle}
			<span class="text-center font-body text-d3">{subtitle}</span>
		{/if}
		<span class="text-center font-body text-d1">
			{@render children()}
		</span>
	</span>

	{#if iconRight}
		<span class="relative size-6 shrink-0">
			{@render iconRight()}
		</span>
	{/if}
</button>
