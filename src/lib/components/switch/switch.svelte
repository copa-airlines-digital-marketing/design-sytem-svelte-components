<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import {
		switchLabelVariants,
		switchRootVariants,
		switchThumbVariants,
		switchWrapperVariants,
		type SwitchProps
	} from './index.js';

	let {
		checked = $bindable(false),
		disabled = false,
		offLabel,
		onLabel,
		labelClass,
		class: className,
		customcn,
		onCheckedChange,
		...restProps
	}: SwitchProps = $props();

	const cn = $derived(customcn ?? defaultCn);
	const hasLabels = $derived(Boolean(offLabel || onLabel));

	function setChecked(nextChecked: boolean) {
		if (disabled || checked === nextChecked) return;

		checked = nextChecked;
		onCheckedChange?.(nextChecked);
	}
</script>

{#snippet switchControl()}
	<SwitchPrimitive.Root
		{checked}
		{disabled}
		onCheckedChange={setChecked}
		class={cn(switchRootVariants(), className)}
		{...restProps}
	>
		<SwitchPrimitive.Thumb class={switchThumbVariants()} />
	</SwitchPrimitive.Root>
{/snippet}

{#if hasLabels}
	<div class={switchWrapperVariants()}>
		{#if offLabel}
			<button
				type="button"
				{disabled}
				aria-pressed={!checked}
				class={cn(switchLabelVariants({ selected: !checked }), labelClass)}
				onclick={() => setChecked(false)}
			>
				{offLabel}
			</button>
		{/if}

		{@render switchControl()}

		{#if onLabel}
			<button
				type="button"
				{disabled}
				aria-pressed={checked}
				class={cn(switchLabelVariants({ selected: checked }), labelClass)}
				onclick={() => setChecked(true)}
			>
				{onLabel}
			</button>
		{/if}
	</div>
{:else}
	{@render switchControl()}
{/if}
