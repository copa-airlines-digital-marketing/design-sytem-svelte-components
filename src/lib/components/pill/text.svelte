<script lang="ts">
	import { onMount } from 'svelte';
	import type { CaptionProps, HTMLTextElements } from '../typography/index.js';
	import { getPillContext, type PillProps } from './index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import Caption from '../typography/caption.svelte';
	import { cn } from '$lib/index.js';

	export let tag: keyof HTMLTextElements = 'span';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & CaptionProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	let thickness: Writable<PillProps['thickness']>;

	onMount(() => {
		thickness = getPillContext();
	});
</script>

<Caption {tag} class={cn(className)} size="caption-small">
	<slot />
</Caption>
