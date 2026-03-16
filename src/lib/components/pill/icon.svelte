<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn as defaultcn } from '../../index.js';
	import type { Writable } from 'svelte/store';
	import { getPillContext, iconVariants, type PillBaseProps, type PillIconProps } from './index.js';

	type $$Props = PillIconProps & {
		children?: Snippet;
	};

	const pillProps: Writable<PillBaseProps> = getPillContext();

	let { class: className, side = 'default', customcn, children }: $$Props = $props();

	const cn = $derived(customcn || defaultcn);
</script>

<span
	class={cn(
		iconVariants({ side }),
		$pillProps.theme === 'default' ? 'fill-common-white' : 'fill-grey-600',
		className
	)}
>
	{@render children?.()}
</span>
