<script lang="ts">
	import { onMount } from 'svelte';
	import { Text, Icon, pillVariants, setPillContext, type PillProps } from './index.js';
	import { cn } from '$lib/index.js';

	type $$Props = PillProps;

	let className: $$Props['class'] = undefined;
	export let theme: $$Props['theme'] = 'default';
	export let outline: $$Props['outline'] = false;
	export let thickness: $$Props['thickness'] = 'default';
	export { className as class };

	setPillContext({ theme, thickness });
</script>

<div class={cn(pillVariants({ theme, outline }), className)}>
	<slot {Text} {Icon} />
</div>

<style>
	div {
		grid-template-columns: 16px auto 16px;
	}
</style>
