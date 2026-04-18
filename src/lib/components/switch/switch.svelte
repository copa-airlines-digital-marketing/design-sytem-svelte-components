<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { switchRootVariants, switchThumbVariants, type SwitchProps } from './index.js';

	/* eslint-disable svelte/valid-compile -- wrapper: restProps typed via Props */
	let {
		checked = $bindable(false),
		disabled = false,
		class: className,
		customcn,
		...restProps
	}: SwitchProps = $props();
	/* eslint-enable svelte/valid-compile */

	const cn = $derived(customcn ?? defaultCn);
</script>

<SwitchPrimitive.Root
	bind:checked
	{disabled}
	class={cn(switchRootVariants(), className)}
	{...restProps}
>
	<SwitchPrimitive.Thumb class={switchThumbVariants()} />
</SwitchPrimitive.Root>
