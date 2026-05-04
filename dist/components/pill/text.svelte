<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { CaptionProps, HTMLTextElements } from '../typography/index.js';
	import { getPillContext, type PillBaseProps } from './index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import Caption from '../typography/caption.svelte';
	import { cn as defaultcn } from '../../index.js';

	type $$Props = CaptionProps &
		HTMLAttributes<HTMLDivElement> & {
			tag?: keyof HTMLTextElements;
			children?: Snippet;
		};

	let { tag = 'span', class: className, customcn, children }: $$Props = $props();

	const pillProps: Writable<PillBaseProps> = getPillContext();

	const cn = $derived(customcn || defaultcn);
</script>

<Caption
	{tag}
	class={cn('col-start-2 col-span-1 mb-0', className)}
	size={$pillProps?.thickness === 'slim' ? 'caption-tiny' : 'caption-small'}
	variant={$pillProps?.theme === 'default' ? 'caption-invert' : 'caption'}
>
	{@render children?.()}
</Caption>
