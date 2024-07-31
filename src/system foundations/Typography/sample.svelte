<script lang="ts">
	import { getTypography, type Typography } from '.';

	export let sampleText: undefined | string = undefined;

	export let samples: Array<Typography>;
</script>

<ul class="items-baseline gap-grid-gutter md:flex">
	{#each samples as sample}
		{@const { size, variant, className } = sample}
		<li class="my-grid-gutter">
			<p class={getTypography(size, variant, className)}>
				{sampleText ||
					`${size ? '' + size : ''}${size && variant ? ', ' : ''}${variant ? '' + variant : ''}`}
			</p>
		</li>
	{/each}
</ul>
