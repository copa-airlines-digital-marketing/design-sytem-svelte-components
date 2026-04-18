<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import {
		modalCloseRootVariants,
		modalCloseTitleVariants,
		modalCloseBtnVariants,
		type ModalCloseProps
	} from './index.js';

	let {
		title,
		titleSize = 'default',
		onClose,
		class: className,
		customcn
	}: ModalCloseProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<div class={cn(modalCloseRootVariants({ titleSize }), className)}>
	{#if title}
		<span class={modalCloseTitleVariants({ titleSize })}>{title}</span>
	{/if}
	<Dialog.Close class={modalCloseBtnVariants()} onclick={onClose}>
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M27.0015 10.4997L20.0015 17.6663L13.0015 10.4997L10.5015 12.9997L17.6681 19.9997L10.5015 26.9997L13.0015 29.4997L20.0015 22.333L27.0015 29.4997L29.5015 26.9997L22.3348 19.9997L29.5015 12.9997L27.0015 10.4997Z"
				fill="currentColor"
			/>
		</svg>
		<span class="sr-only">Close</span>
	</Dialog.Close>
</div>
