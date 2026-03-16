<script lang="ts">
	import { cn } from '../../index.js';
	import { gridItemVariant, type ContainerItemProps } from './index.js';

	/* eslint-disable svelte/valid-compile -- wrapper: rest typed via ContainerItemProps (Omit<HTMLAttributes<HTMLDivElement>, keyof ItemComponentProps>) */
	let { class: className, distribution = 'full', children, ...rest }: ContainerItemProps = $props();
	/* eslint-enable svelte/valid-compile */
</script>

<div class={cn(gridItemVariant({ distribution }), className)} {...rest}>
	{@render children?.()}
</div>
