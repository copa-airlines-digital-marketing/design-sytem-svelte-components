<script lang="ts">
	import Counter from '../lib/components/counter/counter.svelte';

	type Props = {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
		error?: boolean;
	};

	let {
		value = $bindable(1),
		min = 0,
		max = 10,
		step = 1,
		disabled = false,
		error = false
	}: Props = $props();
</script>

<div class="flex flex-col gap-3 p-4">
	<Counter bind:value {min} {max} {step} {disabled} {error} />
	<p class="font-body text-d3 text-grey-600">Current value: <strong>{value}</strong></p>
</div>
