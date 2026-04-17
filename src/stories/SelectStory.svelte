<script lang="ts">
	import Select from '../lib/components/select/select.svelte';
	import type { SelectOption } from '../lib/components/select/index.js';

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
		placeholder = 'Selecciona una opción',
		label = 'Clase de vuelo',
		mandatory = false,
		helperText = '',
		error = false,
		disabled = false,
		optionCount = 4,
		showLeftIcon = false
	}: Props = $props();

	const allOptions: SelectOption[] = [
		{ value: 'economy', label: 'Economy' },
		{ value: 'business', label: 'Business' },
		{ value: 'first', label: 'First Class' },
		{ value: 'premium', label: 'Premium Economy' },
		{ value: 'flex-eco', label: 'Flex Economy' },
		{ value: 'flex-biz', label: 'Flex Business' },
		{ value: 'last-min', label: 'Last Minute' },
		{ value: 'super-saver', label: 'Super Saver' },
		{ value: 'early-bird', label: 'Early Bird' },
		{ value: 'night-owl', label: 'Night Owl' }
	];

	const options = $derived(allOptions.slice(0, optionCount));

	let value = $state('');
</script>

{#snippet planeIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-400"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011.5 2 1.5 1.5 0 0010 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
		/>
	</svg>
{/snippet}

<div class="flex flex-wrap gap-8 p-6">
	<div class="w-72 space-y-6">
		<p class="font-body text-d1 font-semibold text-grey-700">Select ({optionCount} opciones)</p>

		<!-- Main interactive select -->
		<Select
			bind:value
			{placeholder}
			{label}
			{mandatory}
			{helperText}
			{error}
			{disabled}
			{options}
			leftIcon={showLeftIcon ? planeIcon : undefined}
		/>

		{#if value}
			<p class="font-body text-d1 text-primary">
				Valor seleccionado: <strong>{value}</strong>
			</p>
		{/if}
	</div>

	<!-- Reference: no label, no helper -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 font-semibold text-grey-700">Sin label</p>
		<Select placeholder="Selecciona..." options={allOptions.slice(0, 4)} />
	</div>

	<!-- Reference: empty state -->
	<div class="w-72 space-y-1">
		<p class="font-body text-d1 font-semibold text-grey-700">Sin opciones</p>
		<Select label="Destino" placeholder="No hay destinos" options={[]} />
	</div>
</div>
