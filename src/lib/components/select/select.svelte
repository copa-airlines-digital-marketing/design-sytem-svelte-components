<script lang="ts">
	import { Select, ScrollArea } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { HelperText } from '../helper-text/index.js';
	import { inputWrapperVariants, fieldBoxVariants, labelVariants } from '../input/index.js';
	import { optionLabelVariants } from '../option/index.js';
	import { selectItemVariants, type SelectProps } from './index.js';
	import KeyboardArrow from '../icon/regular/keyboard-arrow.svelte';

	let {
		value = $bindable(''),
		placeholder = '',
		label,
		mandatory = false,
		helperText,
		error = false,
		disabled = false,
		options = [],
		emptyMessage = 'Sin resultados.',
		name,
		onValueChange,
		leftIcon,
		id,
		class: className,
		customcn
	}: SelectProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	// Track open state for chevron rotation
	let open = $state(false);

	// Generate a stable id so <label for=…> works even when caller doesn't provide one
	const generatedId = `select-${Math.random().toString(36).slice(2, 9)}`;
	const triggerId = $derived(id ?? generatedId);

	// Derived selected label for display in the trigger
	const selectedLabel = $derived(options.find((o) => o.value === value)?.label ?? '');

	// Items array passed to Select.Root for typeahead matching
	const selectItems = $derived(
		options.map((o) => ({ value: o.value, label: o.label, disabled: o.disabled }))
	);
</script>

<!--
	Layout:
	  Select.Root  → no visual wrapper (FloatingLayer is context-only)
	    div          → inputWrapperVariants: label + trigger + helper text stack
	      label      → clicking focuses the trigger button
	      Select.Trigger (button) → the anchor for the floating dropdown
	      HelperText (optional)
	    Select.Portal → teleports content to <body>, avoids clipping
	      Select.Content → floating div positioned 8px below the trigger
	        ScrollArea → same custom scrollbar as OptionList

	Chevron rotates 180° via reactive `open` binding (no CSS selector needed since
	Select.Root directly exposes `bind:open`).

	Content width matches the trigger via `min-width: var(--bits-floating-anchor-width)`.
	The variable is set by bits-ui on the outer positioning wrapper div and cascades
	to the inner content div where our style prop is applied.
-->
<Select.Root
	type="single"
	bind:value
	bind:open
	{name}
	{disabled}
	items={selectItems}
	{onValueChange}
>
	<div class={cn(inputWrapperVariants(), className)}>
		<!-- Label: real <label> so clicking it focuses the trigger button -->
		{#if label}
			<label
				for={triggerId}
				class="inline-flex cursor-pointer items-baseline gap-0.5 overflow-hidden"
			>
				<span class={cn(labelVariants())}>{label}</span>
				{#if mandatory}
					<span class="font-body text-d1 text-system-error" aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}

		<!--
			Trigger = the visible field box.
			`id` ties it to the <label for=…> above.
			bits-ui attaches all ARIA + keyboard handlers automatically.
		-->
		<Select.Trigger id={triggerId} {disabled} class={cn(fieldBoxVariants({ error, disabled }))}>
			{#if leftIcon}
				{@render leftIcon()}
			{/if}

			<!-- Selected value or placeholder -->
			<span
				class="flex-1 truncate text-left font-body text-b {selectedLabel
					? 'text-grey-700'
					: 'text-grey-500'}"
			>
				{selectedLabel || placeholder}
			</span>

			<!-- Chevron: rotates 180° when dropdown is open (down → up) -->
			<span class="shrink-0 transition-transform duration-200" class:rotate-180={open}>
				<KeyboardArrow direction="down" class="size-6 text-grey-400" />
			</span>
		</Select.Trigger>

		<!-- Helper text sits below the trigger, outside the floating anchor -->
		{#if helperText}
			<HelperText text={helperText} type={error ? 'error' : 'regular'} />
		{/if}
	</div>

	<!--
		Portal teleports content to <body> to avoid overflow:hidden clipping.
		Content is anchored to the Trigger and positioned 8px below it (sideOffset=8).
		avoidCollisions=true (default) automatically flips to side="top" when there
		is not enough viewport space below.
	-->
	<Select.Portal>
		<Select.Content
			side="bottom"
			sideOffset={8}
			avoidCollisions={true}
			style="min-width: var(--bits-floating-anchor-width); z-index: 50;"
			class="overflow-hidden rounded border border-grey-300 bg-common-white shadow-[0px_3px_5px_rgba(0,0,0,0.17)]"
		>
			<!--
				ScrollArea replicates the exact OptionList custom scrollbar:
				  track: 15px wide
				  thumb: 7px wide, 6px radius, 8px inset top/bottom, #C1C1C1
				The scrollbar only appears once content exceeds maxHeight (336px = 7 items).
			-->
			<ScrollArea.Root class="relative flex flex-col">
				<ScrollArea.Viewport style="max-height: 336px;">
					{#if options.length === 0}
						<!-- Empty state -->
						<div class="bg-grey-100 p-3">
							<span class="font-body text-b text-grey-500">{emptyMessage}</span>
						</div>
					{:else}
						{#each options as option (option.value)}
							<Select.Item
								value={option.value}
								label={option.label}
								disabled={option.disabled}
								class={cn(selectItemVariants())}
							>
								{#snippet children({ selected })}
									<span class={cn(optionLabelVariants())}>{option.label}</span>

									<!-- Checkmark: visible only for the currently selected item -->
									{#if selected}
										<svg
											viewBox="0 0 24 24"
											class="size-5 shrink-0 fill-current text-primary"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
											/>
										</svg>
									{/if}
								{/snippet}
							</Select.Item>
						{/each}
					{/if}
				</ScrollArea.Viewport>

				<ScrollArea.Scrollbar
					orientation="vertical"
					class="w-[15px] touch-none select-none py-2"
					style="--bits-scroll-area-thumb-width: 7px;"
				>
					<ScrollArea.Thumb class="mx-auto rounded-[6px] bg-[#C1C1C1]" />
				</ScrollArea.Scrollbar>

				<ScrollArea.Corner />
			</ScrollArea.Root>
		</Select.Content>
	</Select.Portal>
</Select.Root>
