<script lang="ts">
	import Switch from '../lib/components/switch/switch.svelte';

	type Props = {
		checked?: boolean;
		disabled?: boolean;
	};

	let { checked = false, disabled = false }: Props = $props();
</script>

<Switch bind:checked {disabled} />
