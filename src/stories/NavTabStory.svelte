<script lang="ts">
	import NavTab from '../lib/components/nav-tab/nav-tab.svelte';

	type Props = {
		label?: string;
		subtitle?: string;
		type?: 'primary' | 'invert';
		active?: boolean;
	};

	let { label = 'Nav Tab', subtitle = '', type = 'primary', active = false }: Props = $props();
</script>

<NavTab {type} {active} subtitle={subtitle || undefined}>
	{label}
</NavTab>
