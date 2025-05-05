<script lang="ts">
	import { cn } from '../lib/index.js';
	import {
		ContainerItem as Item,
		getGridContainerClasses,
		gridContainerVariants,
		type ContainerProps
	} from './index.js';

	type $$Props = ContainerProps & {
		layout?: boolean;
	};

	let className: $$Props['class'] = undefined;
	export let type: $$Props['type'] = 'default';
	export let layout: $$Props['layout'] = false;
	export { className as class };
</script>

{#if type === 'grid'}
	<div class={cn(gridContainerVariants({ type }), className)}>
		<div class={cn('col-start-2 col-span-1 row-start-1 ', layout ? getGridContainerClasses() : '')}>
			<slot {Item} />
		</div>
	</div>
{:else}
	<div
		class={cn(gridContainerVariants({ type }), layout ? getGridContainerClasses() : '', className)}
	>
		<slot {Item} />
	</div>
{/if}
