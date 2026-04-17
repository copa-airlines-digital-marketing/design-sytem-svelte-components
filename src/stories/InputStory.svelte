<script lang="ts">
	import type { Snippet } from 'svelte';
	import Input from '../lib/components/input/input.svelte';

	type Props = {
		value?: string;
		placeholder?: string;
		label?: string;
		mandatory?: boolean;
		helperText?: string;
		type?: string;
		error?: boolean;
		disabled?: boolean;
		showLeftIcon?: boolean;
		showRightIcon?: boolean;
	};

	let {
		value = $bindable(''),
		placeholder = 'Placeholder',
		label = 'Label',
		mandatory = false,
		helperText = '',
		type = 'text',
		error = false,
		disabled = false,
		showLeftIcon = false,
		showRightIcon = false
	}: Props = $props();
</script>

<!--
	Define the icon snippets at the top level, then pass them as prop VALUES
	(leftIcon={showLeftIcon ? searchIcon : undefined}).
	This way, when showLeftIcon=false, the component receives undefined and
	correctly skips the icon slot — no reserved space.
-->

{#snippet searchIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-400"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10 4a6 6 0 100 12A6 6 0 0010 4zM2 10a8 8 0 1114.32 4.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 012 10z"
		/>
	</svg>
{/snippet}

{#snippet chevronIcon()}
	<svg
		viewBox="0 0 24 24"
		class="size-5 shrink-0 fill-current text-grey-400"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
		/>
	</svg>
{/snippet}

<div class="w-72">
	<Input
		bind:value
		{placeholder}
		{label}
		{mandatory}
		{helperText}
		{type}
		{error}
		{disabled}
		leftIcon={showLeftIcon ? searchIcon : undefined}
		rightIcon={showRightIcon ? chevronIcon : undefined}
	/>

	{#if value}
		<p class="mt-2 font-body text-d3 text-grey-500">
			Value: <strong class="text-grey-700">{value}</strong>
		</p>
	{/if}
</div>
