<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { radioItemVariants, radioIndicatorVariants, type RadioItemProps } from './index.js';

	let { value, label, disabled = false, class: className, customcn }: RadioItemProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<!--
	bits-ui RadioGroup.Item renders <button data-state="checked|unchecked">.
	The indicator uses group-data-[state=checked]: selectors — no children snippet needed.
-->
<RadioGroupPrimitive.Item {value} {disabled} class={cn(radioItemVariants(), className)}>
	{#snippet children()}
		<span class={cn(radioIndicatorVariants())}></span>
		{#if label}
			<span class="font-body text-b text-grey-700 group-disabled:text-grey-300">
				{label}
			</span>
		{/if}
	{/snippet}
</RadioGroupPrimitive.Item>
