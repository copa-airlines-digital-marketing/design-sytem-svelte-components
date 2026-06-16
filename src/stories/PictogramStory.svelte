<script lang="ts">
	import type { Component } from 'svelte';
	import AnunciosImportantes from '../lib/components/pictograms/anuncios-importantes.svelte';
	import AvionAterrizando from '../lib/components/pictograms/avion-aterrizando.svelte';
	import AvionDespegando from '../lib/components/pictograms/avion-despegando.svelte';
	import CheckIn from '../lib/components/pictograms/check-in.svelte';
	import Conexion from '../lib/components/pictograms/conexion.svelte';
	import Destinos from '../lib/components/pictograms/destinos.svelte';
	import EstadoDelVuelo from '../lib/components/pictograms/estado-del-vuelo.svelte';
	import PanamaStopover from '../lib/components/pictograms/panama-stopover.svelte';
	import VueloDomestico from '../lib/components/pictograms/vuelo-domestico.svelte';

	type PictogramName =
		| 'AnunciosImportantes'
		| 'AvionAterrizando'
		| 'AvionDespegando'
		| 'CheckIn'
		| 'Conexion'
		| 'Destinos'
		| 'EstadoDelVuelo'
		| 'PanamaStopover'
		| 'VueloDomestico';
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
		AvionAterrizando,
		AvionDespegando,
		CheckIn,
		Conexion,
		Destinos,
		EstadoDelVuelo,
		PanamaStopover,
		VueloDomestico
	};

	const SelectedPictogram = $derived(pictogramMap[pictogram]);
</script>

<div class="flex items-center justify-center p-4">
	<SelectedPictogram {style} class={size} />
</div>
