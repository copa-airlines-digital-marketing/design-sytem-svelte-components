<script lang="ts">
	import type { Component } from 'svelte';
	import AnunciosImportantes from '../lib/components/pictograms/anuncios-importantes.svelte';
	import CheckIn from '../lib/components/pictograms/check-in.svelte';
	import Conexion from '../lib/components/pictograms/conexion.svelte';

	type PictogramName = 'AnunciosImportantes' | 'CheckIn' | 'Conexion';
	type Style = 'background' | 'transparent' | 'monochrome';

	type PictogramProps = { style?: Style; class?: string };

	type Props = {
		pictogram?: PictogramName;
		style?: Style;
		size?: string;
	};

	let { pictogram = 'CheckIn', style = 'background', size = 'size-24' }: Props = $props();

	const pictogramMap: Record<PictogramName, Component<PictogramProps>> = {
		AnunciosImportantes,
		CheckIn,
		Conexion
	};

	const SelectedPictogram = $derived(pictogramMap[pictogram]);
</script>

<div class="flex items-center justify-center p-4">
	<SelectedPictogram {style} class={size} />
</div>
