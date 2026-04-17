<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { radioGroupVariants, type RadioGroupProps } from './index.js';

	let {
		value = $bindable(''),
		name,
		disabled = false,
		class: className,
		children,
		customcn
	}: RadioGroupProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<RadioGroupPrimitive.Root bind:value {name} {disabled} class={cn(radioGroupVariants(), className)}>
	{@render children()}
</RadioGroupPrimitive.Root>
