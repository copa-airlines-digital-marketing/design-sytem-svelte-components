<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import {
		clampCounterValue,
		counterButtonVariants,
		counterRootVariants,
		counterValueVariants,
		getCounterNextValue,
		type CounterProps
	} from './index.js';

	type CounterAction = 'decrement' | 'increment';

	let {
		value = $bindable(0),
		min = 0,
		max = Number.POSITIVE_INFINITY,
		step = 1,
		disabled = false,
		error = false,
		ariaLabel = 'Counter',
		decrementAriaLabel = 'Decrease value',
		incrementAriaLabel = 'Increase value',
		formatValue = (v: number) => String(v),
		onValueChange,
		class: className,
		buttonClass,
		valueClass,
		customcn,
		...restProps
	}: CounterProps = $props();

	const cn = $derived(customcn ?? defaultCn);
	const currentValue = $derived(clampCounterValue(value, min, max));
	const decrementDisabled = $derived(disabled || currentValue <= min);
	const incrementDisabled = $derived(disabled || currentValue >= max);

	function setValue(nextValue: number) {
		if (disabled) return;

		const clampedValue = clampCounterValue(nextValue, min, max);
		if (clampedValue === value) return;

		value = clampedValue;
		onValueChange?.(clampedValue);
	}

	function updateValue(direction: CounterAction) {
		setValue(getCounterNextValue(currentValue, direction, step));
	}
</script>

{#snippet counterIcon(action: CounterAction)}
	<svg
		viewBox="0 0 28 28"
		class="pointer-events-none absolute -inset-0.5 size-7 fill-current"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g class="group-focus-visible:hidden group-active:hidden">
			{#if action === 'decrement'}
				<g transform="translate(2 2)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM16.6667 11.3333H7.33333V12.6667H16.6667V11.3333Z"
					/>
				</g>
			{:else}
				<g transform="translate(2 2)">
					<path
						d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12.667 7.33301V11.333H16.667V12.667H12.667V16.667H11.333V12.667H7.33301V11.333H11.333V7.33301H12.667Z"
					/>
				</g>
			{/if}
		</g>

		<g class="hidden group-focus-visible:block group-active:hidden">
			<rect
				x="1"
				y="1"
				width="26"
				height="26"
				rx="13"
				class="fill-none stroke-primary-faded"
				stroke-width="2"
				stroke-linejoin="bevel"
			/>
			<path
				d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2Z"
				fill="currentColor"
			/>
			<path
				d="M14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5Z"
				class="fill-background-lightblue"
			/>
			{#if action === 'decrement'}
				<rect x="9.33325" y="13.3333" width="9.33333" height="1.33333" fill="currentColor" />
			{:else}
				<path
					d="M14.667 9.33301V13.333H18.667V14.667H14.667V18.667H13.333V14.667H9.33301V13.333H13.333V9.33301H14.667Z"
					fill="currentColor"
				/>
			{/if}
		</g>

		<g class="hidden group-active:block">
			<rect
				x="1"
				y="1"
				width="26"
				height="26"
				rx="13"
				class="fill-none stroke-primary-faded"
				stroke-width="2"
				stroke-linejoin="bevel"
			/>
			<path
				d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2Z"
				fill="currentColor"
			/>
			{#if action === 'decrement'}
				<rect x="9.33325" y="13.3333" width="9.33333" height="1.33333" class="fill-common-white" />
			{:else}
				<path
					d="M14.667 9.33301V13.333H18.667V14.667H14.667V18.667H13.333V14.667H9.33301V13.333H13.333V9.33301H14.667Z"
					class="fill-common-white"
				/>
			{/if}
		</g>
	</svg>
{/snippet}

<div
	role="group"
	aria-label={ariaLabel}
	class={cn(counterRootVariants(), className)}
	{...restProps}
>
	<ButtonPrimitive.Root
		type="button"
		disabled={decrementDisabled}
		aria-label={decrementAriaLabel}
		class={cn(counterButtonVariants({ error }), buttonClass)}
		onclick={() => updateValue('decrement')}
	>
		{@render counterIcon('decrement')}
	</ButtonPrimitive.Root>

	<span
		class={cn(counterValueVariants({ disabled }), valueClass)}
		aria-live="polite"
		aria-atomic="true"
	>
		{formatValue(currentValue)}
	</span>

	<ButtonPrimitive.Root
		type="button"
		disabled={incrementDisabled}
		aria-label={incrementAriaLabel}
		class={cn(counterButtonVariants({ error }), buttonClass)}
		onclick={() => updateValue('increment')}
	>
		{@render counterIcon('increment')}
	</ButtonPrimitive.Root>
</div>
