<script lang="ts">
	import type { Snippet } from 'svelte';
	import { pillVariants, setPillContext, type PillProps } from './index.js';
	import { cn as defaultcn } from '../../index.js';

	type $$Props = PillProps & {
		children?: Snippet;
	};

	let {
		class: className,
		theme = 'default',
		outline = false,
		thickness = 'default',
		customcn,
		children
	}: $$Props = $props();

	const cn = $derived(customcn || defaultcn);

	const store = setPillContext({ theme: 'default', thickness: 'default' });
	$effect(() => {
		store.set({ theme, thickness });
	});
</script>

<div class={cn(pillVariants({ theme, outline }), className)}>
	{@render children?.()}
</div>

<style>
	div {
		grid-template-columns: 16px auto 16px;
	}
</style>
