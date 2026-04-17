<script lang="ts">
	import Option from '../lib/components/option/option.svelte';
	import OptionList from '../lib/components/option/option-list.svelte';

	type Props = {
		count?: number;
		disabled?: boolean;
		showLeftIcon?: boolean;
		showRightIcon?: boolean;
	};

	let {
		count = 4,
		disabled = false,
		showLeftIcon = false,
		showRightIcon = false
	}: Props = $props();

	const allItems = [
		'Economy',
		'Business',
		'First Class',
		'Premium Economy',
		'Flex Economy',
		'Flex Business',
		'Last Minute',
		'Super Saver',
		'Early Bird',
		'Night Owl'
	];

	const items = $derived(allItems.slice(0, count));
</script>

{#snippet starIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-400"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
		/>
	</svg>
{/snippet}

{#snippet checkIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-700"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
		/>
	</svg>
{/snippet}

<div class="flex flex-wrap gap-8 p-4">
	<!-- Interactive list — change `count` to see scroll behaviour -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 text-grey-500">
			{count} item{count === 1 ? '' : 's'}
			{#if count > 4}
				<span class="text-primary-light">(scroll visible)</span>
			{/if}
		</p>
		{#if count === 0}
			<OptionList empty />
		{:else}
			<OptionList>
				{#each items as item}
					<Option
						label={item}
						{disabled}
						leftIcon={showLeftIcon ? starIcon : undefined}
						rightIcon={showRightIcon ? checkIcon : undefined}
					/>
				{/each}
			</OptionList>
		{/if}
	</div>

	<!-- Empty state (always shown for reference) -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 text-grey-500">Empty state</p>
		<OptionList empty />
	</div>
</div>
