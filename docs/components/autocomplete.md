# Autocomplete

A filterable single-select field built on top of **bits-ui `Combobox`**. Visually identical to `Select`, but the trigger is a native `<input>` that filters options in real-time as the user types.

---

## Status

`done`

---

## Import

```svelte
<script>
	import Autocomplete from '$lib/components/autocomplete/autocomplete.svelte';
	import type { AutocompleteOption } from '$lib/components/autocomplete/index.js';
</script>
```

---

## Props

| Prop            | Type                   | Default             | Description                                  |
| --------------- | ---------------------- | ------------------- | -------------------------------------------- |
| `value`         | `string` (bindable)    | `''`                | Currently selected value                     |
| `placeholder`   | `string`               | `''`                | Input placeholder when empty                 |
| `label`         | `string`               | —                   | Upper label text. Omit to hide               |
| `mandatory`     | `boolean`              | `false`             | Shows a red `*` next to the label            |
| `helperText`    | `string`               | —                   | Hint or error message below the field        |
| `error`         | `boolean`              | `false`             | Switches border + helper icon to error-red   |
| `disabled`      | `boolean`              | `false`             | Disables all interactions                    |
| `options`       | `AutocompleteOption[]` | `[]`                | Full list of options                         |
| `emptyMessage`  | `string`               | `'Sin resultados.'` | Message shown when no options match          |
| `name`          | `string`               | —                   | Forwarded to the hidden `<input>` for forms  |
| `onValueChange` | `(v: string) => void`  | —                   | Called when the selected value changes       |
| `leftIcon`      | `Snippet`              | —                   | Optional 24×24 icon to the left of the input |
| `id`            | `string`               | auto-generated      | Ties the input to the `<label for>`          |
| `class`         | `string`               | —                   | Extra CSS classes on the outer wrapper       |

### `AutocompleteOption`

```typescript
type AutocompleteOption = {
	value: string;
	label: string;
	disabled?: boolean;
};
```

---

## Basic usage

```svelte
<script>
	import Autocomplete from '$lib/components/autocomplete/autocomplete.svelte';

	let city = $state('');
	const cities = [
		{ value: 'bog', label: 'Bogotá (BOG)' },
		{ value: 'mde', label: 'Medellín (MDE)' },
		{ value: 'clo', label: 'Cali (CLO)' }
	];
</script>

<Autocomplete bind:value={city} label="Destino" placeholder="Buscar ciudad..." options={cities} />
```

---

## With left icon

```svelte
{#snippet searchIcon()}
	<svg viewBox="0 0 24 24" class="size-5 fill-current text-grey-400">...</svg>
{/snippet}

<Autocomplete
	bind:value={city}
	label="Destino"
	placeholder="Buscar ciudad..."
	options={cities}
	leftIcon={searchIcon}
/>
```

---

## Anatomy

```
Combobox.Root (no visual wrapper — FloatingLayer context only)
  ├── div.inputWrapperVariants
  │     ├── <label for="…">
  │     ├── div.fieldBoxVariants         ← visible field box
  │     │     ├── [leftIcon?]
  │     │     ├── Combobox.Input          ← native <input> + FloatingLayer.Anchor
  │     │     └── ✕ clear button OR ⌄ chevron
  │     └── HelperText?
  └── Combobox.Portal
        └── Combobox.Content             ← floating div, 8px below the input
              └── ScrollArea.Root
                    ├── ScrollArea.Viewport (max-height: 336px)
                    │     └── Combobox.Item (×N)  — filtered in real-time
                    ├── ScrollArea.Scrollbar (custom 15px/7px scrollbar)
                    └── ScrollArea.Corner
```

---

## Behaviour

| Scenario                          | Result                                                              |
| --------------------------------- | ------------------------------------------------------------------- |
| User types                        | Options filter in real-time (case-insensitive substring match)      |
| No matches                        | Empty-state message shown (`emptyMessage`)                          |
| User selects an item              | Input shows the item label, `value` updates, filter clears          |
| Dropdown re-opens after selection | All options shown (filter was cleared on selection)                 |
| User clicks ✕                     | Value deselected, input cleared, dropdown opens showing all options |
| Chevron ⌄                         | Shown when no value is selected; rotates 180° when open             |
| Viewport has no space below       | Dropdown flips above (`avoidCollisions`)                            |
| 5–7+ items                        | Custom scrollbar appears (same geometry as OptionList)              |
| `disabled`                        | Field greyed out, pointer-events none, keyboard locked              |

---

## Difference from Select

|                   | `Select`      | `Autocomplete`                  |
| ----------------- | ------------- | ------------------------------- |
| Trigger           | `<button>`    | `<input>`                       |
| Filtering         | No            | Yes — real-time substring match |
| Keyboard open     | Space / Enter | Any character                   |
| Clear button      | No            | Yes (when a value is selected)  |
| bits-ui primitive | `Select`      | `Combobox`                      |

---

## Design tokens used

Same as `Select` — see [`docs/components/select.md`](./select.md).
