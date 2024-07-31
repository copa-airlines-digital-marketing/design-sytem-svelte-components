<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		sampleText?: string;
		asGrid?: boolean;
	};

	export let sampleText: $$Props['sampleText'] = 'sample';
	export let asGrid: $$Props['asGrid'] = false;

	const text = sampleText || 'change the preview size to inspect its behaviour';
</script>

<div class="h-svh bg-fuchsia-300/45">
	{#if asGrid}
		<div class="container-grid">
			<div class="col-start-2 h-svh bg-backgound-paper">
				{text}
			</div>
		</div>
	{:else}
		<div class="container mx-auto h-svh bg-backgound-paper">
			{text}
		</div>
	{/if}
</div>
