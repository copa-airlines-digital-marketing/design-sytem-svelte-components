<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import { HelperText } from '../helper-text/index.js';
	import {
		inputWrapperVariants,
		fieldBoxVariants,
		inputVariants,
		labelVariants,
		type InputProps
	} from './index.js';

	let {
		value = $bindable(''),
		placeholder = '',
		label,
		mandatory = false,
		helperText,
		type = 'text',
		error = false,
		disabled = false,
		leftIcon,
		rightIcon,
		id,
		name,
		class: className,
		customcn
	}: InputProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	// Generate a stable id so <label for=…> works even when the caller doesn't provide one.
	const generatedId = `input-${Math.random().toString(36).slice(2, 9)}`;
	const inputId = $derived(id ?? generatedId);
</script>

<!--
	Field box border states are CSS-driven:
	  :hover          → primary-light border  (no JS)
	  :focus-within   → primary border        (no JS, triggers on native input focus)
	  error=true      → system-error border   (prop, CSS can't infer validation state)
	  disabled=true   → grey-100 bg / grey-600 border
-->
<div class={cn(inputWrapperVariants(), className)}>
	<!-- Upper label — real <label> so clicking it focuses the <input> -->
	{#if label}
		<label for={inputId} class="inline-flex cursor-pointer items-baseline gap-0.5 overflow-hidden">
			<span class={cn(labelVariants())}>{label}</span>
			{#if mandatory}
				<span class="font-body text-d1 text-system-error" aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<!-- Field box -->
	<div class={cn(fieldBoxVariants({ error, disabled }))}>
		<!-- Left icon slot: only renders when caller passes a non-undefined snippet -->
		{#if leftIcon}
			{@render leftIcon()}
		{/if}

		<input
			id={inputId}
			{name}
			{type}
			{placeholder}
			{disabled}
			bind:value
			class={cn(inputVariants())}
		/>

		<!-- Right icon slot: only renders when caller passes a non-undefined snippet -->
		{#if rightIcon}
			{@render rightIcon()}
		{/if}
	</div>

	<!-- Helper text (reuses HelperText component) -->
	{#if helperText}
		<HelperText text={helperText} type={error ? 'error' : 'regular'} />
	{/if}
</div>
