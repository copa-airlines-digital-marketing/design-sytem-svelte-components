<script lang="ts">
	import Switch from '../lib/components/switch/switch.svelte';

	type Props = {
		checked?: boolean;
		disabled?: boolean;
		offLabel?: string;
		onLabel?: string;
	};

	let { checked = false, disabled = false, offLabel, onLabel }: Props = $props();
</script>

<Switch bind:checked {disabled} {offLabel} {onLabel} />
