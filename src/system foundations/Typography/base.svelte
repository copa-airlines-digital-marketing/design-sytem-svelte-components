<script lang="ts">
	import type { TypographyVariants } from '../../lib/components/ui/typography/variants';
	import { Root as Base } from '../../lib/components/ui/typography/index';

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
			<Base size={val}>{sample || val}</Base>
		</li>
	{/each}
</ul>
