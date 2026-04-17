<script lang="ts">
	import Checkbox from '../lib/components/checkbox/checkbox.svelte';

	type Props = {
		checked?: boolean;
		disabled?: boolean;
		label?: string;
	};

	let {
		checked = false,
		disabled = false,
		label = 'Accept terms and conditions'
	}: Props = $props();
</script>

<label
	class="flex items-center gap-2 cursor-pointer"
	class:opacity-50={disabled}
	class:cursor-not-allowed={disabled}
>
	<Checkbox {checked} {disabled} />
	{label}
</label>
