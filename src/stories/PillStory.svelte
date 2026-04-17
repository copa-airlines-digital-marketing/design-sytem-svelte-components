<script lang="ts">
	import Pill from '../lib/components/pill/pill.svelte';
	import PillText from '../lib/components/pill/text.svelte';
	import PillIcon from '../lib/components/pill/icon.svelte';
	import Check from '../lib/components/icon/regular/check.svelte';
	import Close from '../lib/components/icon/regular/close.svelte';

	type Theme = 'default' | 'transparent';
	type Thickness = 'default' | 'slim';
	type IconSide = 'none' | 'left' | 'right';

	type Props = {
		text?: string;
		theme?: Theme;
		outline?: boolean;
		thickness?: Thickness;
		iconSide?: IconSide;
		statusClass?: string;
	};

	let {
		text = 'On time',
		theme = 'default',
		outline = false,
		thickness = 'default',
		iconSide = 'none',
		statusClass = ''
	}: Props = $props();
</script>

<Pill {theme} {outline} {thickness} class={statusClass}>
	{#if iconSide === 'left'}
		<PillIcon side="left"><Check /></PillIcon>
	{/if}
	<PillText>{text}</PillText>
	{#if iconSide === 'right'}
		<PillIcon side="right"><Close /></PillIcon>
	{/if}
</Pill>
