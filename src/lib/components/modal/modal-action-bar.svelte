<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import {
		modalActionBarRootVariants,
		modalActionBarDividerVariants,
		modalActionBarActionsVariants,
		type ModalActionBarProps
	} from './index.js';
	import { Button } from '../button/index.js';

	let {
		mainActionLabel,
		secondaryActionLabel,
		onMainAction,
		onSecondaryAction,
		buttonSize = 'default',
		priceLabel,
		priceSubtext,
		class: className,
		customcn
	}: ModalActionBarProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	const hasPrice = $derived(!!priceLabel);
	const hasButtons = $derived(!!(mainActionLabel || secondaryActionLabel));
</script>

{#if hasButtons || hasPrice}
	<div class={cn(modalActionBarRootVariants(), className)}>
		<div class={modalActionBarDividerVariants()}></div>
		<div class={modalActionBarActionsVariants({ align: hasPrice ? 'between' : 'end' })}>
			{#if hasPrice}
				<div class="flex flex-col">
					<span class="font-body font-medium text-b text-grey-800">{priceLabel}</span>
					{#if priceSubtext}
						<span class="font-body text-d1 text-grey-600">{priceSubtext}</span>
					{/if}
				</div>
			{/if}
			<div class="flex items-center gap-2">
				{#if secondaryActionLabel && !hasPrice}
					<Button variant="outline-primary-main" size={buttonSize} onclick={onSecondaryAction}>
						{secondaryActionLabel}
					</Button>
				{/if}
				{#if mainActionLabel}
					<Button variant="solid-primary-main" size={buttonSize} onclick={onMainAction}>
						{mainActionLabel}
					</Button>
				{/if}
			</div>
		</div>
	</div>
{/if}
