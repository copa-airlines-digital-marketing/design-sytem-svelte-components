<script lang="ts">
	import RadioGroup from '../lib/components/radio/radio-group.svelte';
	import RadioItem from '../lib/components/radio/radio-item.svelte';

	type Props = {
		selected?: string;
		disabled?: boolean;
		showLabels?: boolean;
	};

	let { selected = $bindable('a'), disabled = false, showLabels = true }: Props = $props();
</script>

<RadioGroup bind:value={selected} {disabled}>
	<RadioItem value="a" label={showLabels ? 'Option A' : undefined} {disabled} />
	<RadioItem value="b" label={showLabels ? 'Option B' : undefined} {disabled} />
	<RadioItem value="c" label={showLabels ? 'Option C' : undefined} {disabled} />
</RadioGroup>

<p class="mt-3 font-body text-d3 text-grey-600">Selected: <strong>{selected || '—'}</strong></p>
