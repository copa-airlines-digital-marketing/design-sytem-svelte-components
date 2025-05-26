<script lang="ts">
	import type { CaptionProps, HTMLTextElements } from '../typography/index.js';
	import { getPillContext, type PillBaseProps } from './index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import Caption from '../typography/caption.svelte';
	import { cn as defaultcn } from '../../../lib/index.js';

	export let tag: keyof HTMLTextElements = 'span';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & CaptionProps;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const pillProps: Writable<PillBaseProps> = getPillContext();

	const cn = customcn || defaultcn;
</script>

<Caption
	{tag}
	class={cn('col-start-2 col-span-1 mb-0', className)}
	size={$pillProps?.thickness === 'slim' ? 'caption-tiny' : 'caption-small'}
	variant={$pillProps?.theme === 'default' ? 'caption-invert' : 'caption'}
>
	<slot />
</Caption>
