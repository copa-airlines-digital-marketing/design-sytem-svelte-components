<script lang="ts">
	import Container from '../lib/components/grid/container.svelte';
	import ContainerItem from '../lib/components/grid/item.svelte';

	type Distribution = 'full' | 'half' | 'four' | 'third' | '4 / 8' | '8 / 4';

	type Props = {
		col1Distribution?: Distribution;
		col2Distribution?: Distribution;
		showThirdColumn?: boolean;
		col3Distribution?: Distribution;
	};

	let {
		col1Distribution = 'half',
		col2Distribution = 'half',
		showThirdColumn = false,
		col3Distribution = 'four'
	}: Props = $props();
</script>

<Container layout class="gap-4">
	<ContainerItem
		distribution={col1Distribution}
		class="bg-primary h-24 rounded-xl flex items-center justify-center"
	>
		<span class="text-common-white font-body font-semibold">Col 1 · {col1Distribution}</span>
	</ContainerItem>
	<ContainerItem
		distribution={col2Distribution}
		class="bg-primary-light h-24 rounded-xl flex items-center justify-center"
	>
		<span class="text-common-white font-body font-semibold">Col 2 · {col2Distribution}</span>
	</ContainerItem>
	{#if showThirdColumn}
		<ContainerItem
			distribution={col3Distribution}
			class="bg-secondary h-24 rounded-xl flex items-center justify-center"
		>
			<span class="text-common-white font-body font-semibold">Col 3 · {col3Distribution}</span>
		</ContainerItem>
	{/if}
</Container>
