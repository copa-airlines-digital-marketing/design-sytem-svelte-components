<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { cn } from '../../../index.js';

	type $$Props = CheckboxPrimitive.Props;
	type $$Events = CheckboxPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let checked: $$Props['checked'] = false;
	export { className as class };
</script>

<CheckboxPrimitive.Root
	class={cn(
		'border rounded outline-none ring-primary-faded text-grey-50 bg-grey-50 broder-grey-500 transition-colors focus-visible:bg-background-lightblue data-[state=checked]:bg-primary data-[state=checked]:border-primary  data-[state=checked]:focus-visible:bg-primary hover:border-primary-ultradark focus-visible:ring-2 focus-visible:border-primary-ultradark active:bg-primary-ultradark active:border-primary-ultradark active:ring-2 disabled:cursor-not-allowed disabled:bg-grey-100 disabled:border-grey-300 disabled:ring-0',
		className
	)}
	bind:checked
	{...$$restProps}
	on:click
>
	<CheckboxPrimitive.Indicator
		class={cn('flex size-6 items-center justify-center text-current')}
		let:isChecked
	>
		{#if isChecked}
			<svg viewBox="0 0 16 13" class="fill-current size-4" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 12.9996L0 7.99961L1.4 6.59961L5 10.1996L14.6 0.599609L16 1.99961L5 12.9996Z" />
			</svg>
		{/if}
	</CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
