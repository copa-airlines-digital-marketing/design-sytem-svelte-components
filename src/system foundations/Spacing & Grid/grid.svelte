<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	const colVariant = tv({
		base: '',
		variants: {
			distributions: {
				full: 'col-span-full',
				half: 'col-span-6',
				four: 'col-span-4',
				third: 'col-span-3',
				'4 / 8': 'odd:col-span-4 even:col-span-8',
				'8 / 4': 'odd:col-span-8 even:col-span-4'
			}
		}
	});

	type Distributions = VariantProps<typeof colVariant>['distributions'];

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		items?: number;
		distributions?: Distributions;
	};

	export let items: $$Props['items'] = 4;
	export let distributions: $$Props['distributions'] = 'full';

	const itemsArray = Array(items).map((v, i) => i + 1);
</script>

<div class="container mx-auto grid grid-cols-12 gap-grid-gutter">
	{#each itemsArray as i}
		<div class={cn(colVariant({ distributions }), 'h-60 bg-primary-faded')}>
			col-{i}
		</div>
	{/each}
</div>
