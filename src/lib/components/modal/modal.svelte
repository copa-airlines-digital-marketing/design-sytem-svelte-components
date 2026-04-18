<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { cn as defaultCn, flyAndScale } from '../../index.js';
	import { modalOverlayVariants, modalContentVariants, type ModalProps } from './index.js';
	import ModalClose from './modal-close.svelte';
	import ModalActionBar from './modal-action-bar.svelte';

	/* eslint-disable svelte/valid-compile -- wrapper: restProps typed via Props */
	let {
		open = $bindable(false),
		onClose,
		title,
		titleSize = 'default',
		size = 'normal',
		breakpoint = 'default',
		mainActionLabel,
		secondaryActionLabel,
		onMainAction,
		onSecondaryAction,
		showActionBar = true,
		priceLabel,
		priceSubtext,
		class: className,
		customcn,
		children
	}: ModalProps = $props();
	/* eslint-enable svelte/valid-compile */

	const cn = $derived(customcn ?? defaultCn);

	function handleClose() {
		open = false;
		onClose?.();
	}
</script>

<Dialog.Root
	bind:open
	onOpenChange={(v) => {
		if (!v) handleClose();
	}}
>
	<Dialog.Portal>
		<Dialog.Overlay
			class={cn(modalOverlayVariants())}
			transition={flyAndScale}
			transitionConfig={{ duration: 150, y: 0, start: 1 }}
		/>
		<Dialog.Content
			class={cn(modalContentVariants({ size, breakpoint }), className)}
			transition={flyAndScale}
			transitionConfig={{ duration: 200, y: 8, start: 0.97 }}
		>
			<ModalClose {title} {titleSize} onClose={handleClose} />

			<div class="flex-1 overflow-y-auto px-14 pb-4">
				{@render children?.()}
			</div>

			{#if showActionBar}
				<ModalActionBar
					{mainActionLabel}
					{secondaryActionLabel}
					{onMainAction}
					{onSecondaryAction}
					{priceLabel}
					{priceSubtext}
				/>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
