<script lang="ts">
	import { getTypography } from '$lib/components/foundations/typography';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type VariantProps } from 'tailwind-variants';
	import { getGridContainerClasses, getGridItemVariant } from '.';

	const colVariant = getGridItemVariant;

	type Distributions = VariantProps<typeof colVariant>['distributions'];

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		items?: number;
		distributions?: Distributions;
	};

	export let items: $$Props['items'] = 4;
	export let distributions: $$Props['distributions'] = 'full';
</script>

{#if items && items > 0}
	{@const itemsArray = Array(items)
		.fill(1)
		.map((v, i) => i + 1)}
	<div class={cn(getGridContainerClasses(), 'container mx-auto')}>
		{#each itemsArray as i}
			<div
				class={cn(
					colVariant({ distributions }),
					'grid h-60 place-items-center bg-primary-faded',
					getTypography(undefined, 'display')
				)}
			>
				{i}
			</div>
		{/each}
	</div>
{/if}
