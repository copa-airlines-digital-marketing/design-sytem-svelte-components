<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '../../index.js';
	import { getGridContainerClasses, gridContainerVariants, type ContainerProps } from './index.js';

	type $$Props = ContainerProps & {
		layout?: boolean;
		children?: Snippet;
	};

	let { class: className, type = 'default', layout = false, children }: $$Props = $props();
</script>

{#if type === 'grid'}
	<div class={cn(gridContainerVariants({ type }), className)}>
		<div class={cn('col-start-2 col-span-1 row-start-1 ', layout ? getGridContainerClasses() : '')}>
			{@render children?.()}
		</div>
	</div>
{:else}
	<div
		class={cn(gridContainerVariants({ type }), layout ? getGridContainerClasses() : '', className)}
	>
		{@render children?.()}
	</div>
{/if}
