<script lang="ts">
	import { Combobox, ScrollArea } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { HelperText } from '../helper-text/index.js';
	import {
		inputWrapperVariants,
		fieldBoxVariants,
		labelVariants,
		inputVariants
	} from '../input/index.js';
	import { optionLabelVariants } from '../option/index.js';
	import { autocompleteItemVariants, type AutocompleteProps } from './index.js';
	import KeyboardArrow from '../icon/regular/keyboard-arrow.svelte';
	import Close from '../icon/regular/close.svelte';

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
	}: AutocompleteProps = $props();

	const cn = $derived(customcn ?? defaultCn);

	// Text the user has typed. Updated via oninput; cleared when an item is selected.
	// bits-ui.Combobox.Root.inputValue is NOT $bindable so we track it ourselves.
	let searchText = $state('');
	let open = $state(false);
	let inputRef = $state<HTMLInputElement | null>(null);

	// Used as `customAnchor` on Combobox.Content so the dropdown positions relative to
	// the full field box div (including its p-3 padding + border), not just the inner
	// native <input> that Combobox.Input anchors to by default.
	let fieldBoxEl = $state<HTMLDivElement | null>(null);

	const generatedId = `autocomplete-${Math.random().toString(36).slice(2, 9)}`;
	const inputId = $derived(id ?? generatedId);

	// Full items array for bits-ui typeahead + label lookup after selection
	const selectItems = $derived(
		options.map((o) => ({ value: o.value, label: o.label, disabled: o.disabled }))
	);

	// Filter options in real-time as the user types
	const filteredOptions = $derived.by(() => {
		const q = searchText.trim().toLowerCase();
		if (!q) return options;
		return options.filter((o) => o.label.toLowerCase().includes(q));
	});

	// Show the clear (✕) button only when an item is actually selected
	const showClear = $derived(!disabled && value !== '');

	// Keep bits-ui's internal inputValue in sync with our searchText via oninput
	function handleInput(e: Event) {
		searchText = (e.currentTarget as HTMLInputElement).value;
	}

	// When an item is selected, clear the filter text so the next open shows all options
	function handleValueChange(newValue: string) {
		searchText = '';
		onValueChange?.(newValue);
	}

	// Clear button: deselect + empty the native input + re-trigger bits-ui's oninput
	// (dispatching 'input' makes bits-ui set its internal inputValue to '' and open the
	// dropdown so the user sees all options immediately after clearing)
	function clearSelection() {
		value = '';
		searchText = '';
		if (inputRef) {
			inputRef.value = '';
			inputRef.dispatchEvent(new InputEvent('input', { bubbles: true }));
			inputRef.focus();
		}
	}
</script>

<!--
	Autocomplete = Combobox from bits-ui + same visual shell as Input / Select.

	Key differences from Select:
	  • Combobox.Input renders a native <input> (not a <button>) — the user
	    types to filter options in real-time.
	  • Combobox.Input is also the FloatingLayer.Anchor, so the dropdown is
	    positioned relative to the input element.
	    `min-width: var(--bits-floating-anchor-width)` keeps the dropdown ≈ input width.
	  • searchText is tracked via oninput (inputValue on Combobox.Root is not $bindable).
	  • When an item is selected, bits-ui sets the input's value to the item label
	    (via mergedProps); our handleValueChange clears searchText so the next open
	    shows all options.
	  • The ✕ clear button appears when a value is selected; otherwise the chevron shows.
-->
<Combobox.Root
	type="single"
	bind:value
	bind:open
	{name}
	{disabled}
	items={selectItems}
	onValueChange={handleValueChange}
>
	<div class={cn(inputWrapperVariants(), className)}>
		{#if label}
			<label
				for={inputId}
				class="inline-flex cursor-pointer items-baseline gap-0.5 overflow-hidden"
			>
				<span class={cn(labelVariants())}>{label}</span>
				{#if mandatory}
					<span class="font-body text-d1 text-system-error" aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}

		<div bind:this={fieldBoxEl} class={cn(fieldBoxVariants({ error, disabled }))}>
			{#if leftIcon}
				{@render leftIcon()}
			{/if}

			<!--
				Combobox.Input renders a native <input> AND becomes the
				FloatingLayer.Anchor (positions the dropdown).
				- bind:ref lets us imperatively clear the input from clearSelection()
				- oninput updates searchText for real-time filtering; bits-ui merges
				  both its own oninput handler and ours via mergeProps
			-->
			<Combobox.Input
				id={inputId}
				{placeholder}
				{disabled}
				bind:ref={inputRef}
				oninput={handleInput}
				class={cn(inputVariants())}
			/>

			<!-- Chevron (closed) / Clear button (when a value is selected) -->
			{#if showClear}
				<button
					type="button"
					onclick={clearSelection}
					{disabled}
					class="shrink-0 text-grey-400 transition-colors hover:text-grey-700"
					aria-label="Limpiar selección"
				>
					<Close class="size-5" />
				</button>
			{:else}
				<span
					class="shrink-0 transition-transform duration-200"
					class:rotate-180={open}
					aria-hidden="true"
				>
					<KeyboardArrow direction="down" class="size-6 text-grey-400" />
				</span>
			{/if}
		</div>

		{#if helperText}
			<HelperText text={helperText} type={error ? 'error' : 'regular'} />
		{/if}
	</div>

	<Combobox.Portal>
		<Combobox.Content
			side="bottom"
			sideOffset={8}
			avoidCollisions={true}
			customAnchor={fieldBoxEl}
			style="min-width: var(--bits-floating-anchor-width); z-index: 50;"
			class="overflow-hidden rounded border border-grey-300 bg-common-white shadow-[0px_3px_5px_rgba(0,0,0,0.17)]"
		>
			<ScrollArea.Root class="relative flex flex-col">
				<ScrollArea.Viewport style="max-height: 336px;">
					{#if filteredOptions.length === 0}
						<div class="bg-grey-100 p-3">
							<span class="font-body text-b text-grey-500">{emptyMessage}</span>
						</div>
					{:else}
						{#each filteredOptions as option (option.value)}
							<Combobox.Item
								value={option.value}
								label={option.label}
								disabled={option.disabled}
								class={cn(autocompleteItemVariants())}
							>
								{#snippet children({ selected })}
									<span class={cn(optionLabelVariants())}>{option.label}</span>

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
							</Combobox.Item>
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
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
