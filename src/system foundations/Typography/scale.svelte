<script lang="ts">
	import type { TypographyVariants } from './root.variants';
	import { Root as Text } from './index';

	export let sample: undefined | string = undefined;

	const values: Array<TypographyVariants['size']> = [
		'u6',
		'u5',
		'u4',
		'u3',
		'u2',
		'u1',
		'b',
		'd1',
		'd2',
		'd3'
	];
</script>

<ul>
	{#each values as val}
		<li class="my-grid-gutter">
			<Text tag="p" size={val}>{sample ? `${val} - ${sample}` : val}</Text>
		</li>
	{/each}
</ul>
