<script lang="ts">
	import Autocomplete from '../lib/components/autocomplete/autocomplete.svelte';
	import type { AutocompleteOption } from '../lib/components/autocomplete/index.js';

	type Props = {
		placeholder?: string;
		label?: string;
		mandatory?: boolean;
		helperText?: string;
		error?: boolean;
		disabled?: boolean;
		optionCount?: number;
		showLeftIcon?: boolean;
	};

	let {
		placeholder = 'Buscar destino...',
		label = 'Destino',
		mandatory = false,
		helperText = '',
		error = false,
		disabled = false,
		optionCount = 10,
		showLeftIcon = false
	}: Props = $props();

	const allOptions: AutocompleteOption[] = [
		{ value: 'bog', label: 'Bogotá (BOG)' },
		{ value: 'mde', label: 'Medellín (MDE)' },
		{ value: 'clo', label: 'Cali (CLO)' },
		{ value: 'baq', label: 'Barranquilla (BAQ)' },
		{ value: 'ctg', label: 'Cartagena (CTG)' },
		{ value: 'bun', label: 'Bucaramanga (BUN)' },
		{ value: 'pei', label: 'Pereira (PEI)' },
		{ value: 'aoh', label: 'Armenia (AOH)' },
		{ value: 'mzl', label: 'Manizales (MZL)' },
		{ value: 'pto', label: 'Santa Marta (SMR)' }
	];

	const options = $derived(allOptions.slice(0, optionCount));

	let value = $state('');
</script>

{#snippet searchIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-400"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
		/>
	</svg>
{/snippet}

<div class="flex flex-wrap gap-8 p-6">
	<!-- Main interactive autocomplete -->
	<div class="w-72 space-y-6">
		<p class="font-body text-d1 font-semibold text-grey-700">
			Autocomplete ({optionCount} opciones)
		</p>

		<Autocomplete
			bind:value
			{placeholder}
			{label}
			{mandatory}
			{helperText}
			{error}
			{disabled}
			{options}
			leftIcon={showLeftIcon ? searchIcon : undefined}
		/>

		{#if value}
			<p class="font-body text-d1 text-primary">
				Seleccionado: <strong>{value}</strong>
			</p>
		{/if}
	</div>

	<!-- Reference: no label -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 font-semibold text-grey-700">Sin label</p>
		<Autocomplete placeholder="Escribe para buscar..." options={allOptions.slice(0, 5)} />
	</div>

	<!-- Reference: empty state -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 font-semibold text-grey-700">Sin opciones</p>
		<Autocomplete label="Ciudad" placeholder="No hay ciudades" options={[]} />
	</div>
</div>
