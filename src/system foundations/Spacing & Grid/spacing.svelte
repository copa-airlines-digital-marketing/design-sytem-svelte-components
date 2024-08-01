<script lang="ts">
	import { cn } from '$lib/utils';

	const spacingClasses = 'h-minimal h-tiny h-petit h-normal h-roomy h-spacious h-big h-huge'.split(
		' '
	);
</script>

<ol class="flex flex-wrap items-end justify-items-center gap-grid-gutter">
	{#each spacingClasses as spacing}
		<li class="flex-grow text-center">
			<div class={cn(spacing, 'bg-primary-faded')}></div>
			{spacing.replace('h-', '')}
		</li>
	{/each}
</ol>
