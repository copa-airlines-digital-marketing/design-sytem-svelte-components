<script lang="ts">
	import type { HTMLSourceAttributes } from 'svelte/elements';

	type $$Props = HTMLSourceAttributes & {
		screen?: 'sm' | 'md' | 'lg';
	};

	let { screen = 'md', ...restProps }: $$Props = $props();

	const getMediaQuery = (size: $$Props['screen']) => {
		if (size === 'sm') return '(min-width: 600px)';
		if (size === 'md') return '(min-width: 960px)';
		return '(min-width: 1367px)';
	};

	const media = $derived(getMediaQuery(screen));
</script>

<source {media} {...restProps} />
