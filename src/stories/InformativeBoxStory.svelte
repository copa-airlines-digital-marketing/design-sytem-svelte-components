<script lang="ts">
	import type { Component } from 'svelte';
	import InformativeBoxContainer from '../lib/components/boxes/informative/container.svelte';
	import InformativeBox from '../lib/components/boxes/informative/box.svelte';
	import InformativeBoxIcon from '../lib/components/boxes/informative/icon.svelte';
	import InformativeBoxTitle from '../lib/components/boxes/informative/title.svelte';
	import InformativeBoxDescription from '../lib/components/boxes/informative/description.svelte';
	import Globe from '../lib/components/icon/globe.svelte';
	import Phone from '../lib/components/icon/phone.svelte';
	import Check from '../lib/components/icon/regular/check.svelte';

	type Alignment = 'left' | 'center' | 'right';
	type Orientation = 'horizontal' | 'vertical';
	type IconSize = 'tiny' | 'normal' | 'big' | 'huge';
	type Theme = 'normal' | 'invert';
	type IconName = 'Globe' | 'Phone' | 'Check';

	type IconProps = { class?: string };

	type Props = {
		alignment?: Alignment;
		orientation?: Orientation;
		iconSize?: IconSize;
		titleTheme?: Theme;
		descriptionTheme?: Theme;
		iconName?: IconName;
		title?: string;
		description?: string;
	};

	let {
		alignment = 'left',
		orientation = 'vertical',
		iconSize = 'normal',
		titleTheme = 'normal',
		descriptionTheme = 'normal',
		iconName = 'Globe',
		title = 'Global network',
		description = 'Fly to over 80 destinations across the Americas.'
	}: Props = $props();

	const iconMap: Record<IconName, Component<IconProps>> = { Globe, Phone, Check };
	const SelectedIcon = $derived(iconMap[iconName]);
</script>

<InformativeBoxContainer>
	<InformativeBox {alignment} {orientation}>
		<InformativeBoxIcon size={iconSize}>
			<SelectedIcon class="size-full text-primary" />
		</InformativeBoxIcon>
		<InformativeBoxTitle theme={titleTheme}>{title}</InformativeBoxTitle>
		<InformativeBoxDescription theme={descriptionTheme}>{description}</InformativeBoxDescription>
	</InformativeBox>
</InformativeBoxContainer>
