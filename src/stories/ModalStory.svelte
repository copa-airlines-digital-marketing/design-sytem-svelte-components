<script lang="ts">
	import Modal from '../lib/components/modal/modal.svelte';
	import { Button } from '../lib/components/button/index.js';

	type Props = {
		open?: boolean;
		title?: string;
		titleSize?: 'default' | '56px' | '40px' | '32px' | '16px';
		size?: 'wide' | 'normal' | 'narrow';
		mainActionLabel?: string;
		secondaryActionLabel?: string;
		showActionBar?: boolean;
		contentText?: string;
	};

	let {
		open = false,
		title = 'Select the type of document',
		titleSize = '32px',
		size = 'normal',
		mainActionLabel = 'Main action',
		secondaryActionLabel = 'Secondary Action',
		showActionBar = true,
		contentText = 'Modal content goes here. Add any components or text inside the modal body.'
	}: Props = $props();

	let isOpen = $state(open);

	$effect(() => {
		isOpen = open;
	});
</script>

<Button onclick={() => (isOpen = true)}>Open Modal</Button>

<Modal
	bind:open={isOpen}
	{title}
	{titleSize}
	{size}
	{mainActionLabel}
	{secondaryActionLabel}
	{showActionBar}
	onMainAction={() => (isOpen = false)}
	onSecondaryAction={() => (isOpen = false)}
>
	<p class="font-body text-b text-grey-800">{contentText}</p>
</Modal>
