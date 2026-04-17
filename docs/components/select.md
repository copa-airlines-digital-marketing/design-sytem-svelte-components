# Select

A fully accessible single-select dropdown built on top of **bits-ui `Select`** and the project's **`Input`** and **`OptionList`** visual patterns.

---

## Status

`done`

---

## Import

```svelte
<script>
	import Select from '$lib/components/select/select.svelte';
	import type { SelectOption } from '$lib/components/select/index.js';
</script>
```

---

## Props

| Prop            | Type                  | Default             | Description                                                         |
| --------------- | --------------------- | ------------------- | ------------------------------------------------------------------- |
| `value`         | `string` (bindable)   | `''`                | Currently selected value                                            |
| `placeholder`   | `string`              | `''`                | Text shown in trigger when nothing is selected                      |
| `label`         | `string`              | —                   | Upper label text. Omit to hide                                      |
| `mandatory`     | `boolean`             | `false`             | Shows a red `*` next to the label                                   |
| `helperText`    | `string`              | —                   | Hint or error message below the field                               |
| `error`         | `boolean`             | `false`             | Switches border + helper icon to error-red                          |
| `disabled`      | `boolean`             | `false`             | Disables all interactions                                           |
| `options`       | `SelectOption[]`      | `[]`                | The list of selectable options                                      |
| `emptyMessage`  | `string`              | `'Sin resultados.'` | Message shown when `options` is empty                               |
| `name`          | `string`              | —                   | Forwarded to the hidden `<input>` for forms                         |
| `onValueChange` | `(v: string) => void` | —                   | Called when the selected value changes                              |
| `leftIcon`      | `Snippet`             | —                   | Optional 24×24 icon to the left of the selected text in the trigger |
| `id`            | `string`              | auto-generated      | Ties the trigger button to the `<label for>`                        |
| `class`         | `string`              | —                   | Extra CSS classes on the outer wrapper                              |

### `SelectOption`

```typescript
type SelectOption = {
	value: string;
	label: string;
	disabled?: boolean;
};
```

---

## Basic usage

```svelte
<script>
	import Select from '$lib/components/select/select.svelte';

	let cabin = $state('');
	const cabins = [
		{ value: 'economy', label: 'Economy' },
		{ value: 'business', label: 'Business' },
		{ value: 'first', label: 'First Class' }
	];
</script>

<Select
	bind:value={cabin}
	label="Clase de vuelo"
	placeholder="Selecciona una cabina"
	options={cabins}
/>
```

---

## With helper text and error

```svelte
<Select
	bind:value={cabin}
	label="Clase de vuelo"
	mandatory
	helperText="Selecciona la cabina que prefieres"
	options={cabins}
/>

<!-- Error state -->
<Select
	bind:value={cabin}
	label="Clase de vuelo"
	error
	helperText="Debes seleccionar una cabina"
	options={cabins}
/>
```

---

## With left icon

```svelte
{#snippet planeIcon()}
	<svg viewBox="0 0 24 24" class="size-5 fill-current text-grey-400">...</svg>
{/snippet}

<Select bind:value={cabin} label="Clase de vuelo" options={cabins} leftIcon={planeIcon} />
```

---

## Anatomy

```
Select.Root (no visual wrapper — FloatingLayer context only)
  ├── div.inputWrapperVariants        ← vertical stack
  │     ├── <label for="…">          ← clicking focuses the trigger
  │     ├── Select.Trigger (button)  ← the visible field box + floating anchor
  │     │     ├── [leftIcon?]
  │     │     ├── span               ← selected label or placeholder
  │     │     └── svg (chevron)      ← rotates 180° when open
  │     └── HelperText?
  └── Select.Portal                  ← teleports content to <body>
        └── Select.Content           ← floating div, 8px below trigger
              └── ScrollArea.Root
                    ├── ScrollArea.Viewport (max-height: 336px)
                    │     └── Select.Item (×N)
                    │           ├── label span
                    │           └── checkmark svg (selected item only)
                    ├── ScrollArea.Scrollbar (custom 15px/7px scrollbar)
                    └── ScrollArea.Corner
```

---

## Behaviour

| Scenario                    | Result                                                                      |
| --------------------------- | --------------------------------------------------------------------------- |
| Viewport has space below    | Dropdown opens **below** the trigger, 8px gap                               |
| Viewport has no space below | Dropdown flips and opens **above** the trigger, 8px gap (`avoidCollisions`) |
| ≤ 4 items                   | Content fits within 192px, no scrollbar                                     |
| 5–7+ items                  | Content exceeds 336px max-height, custom scrollbar appears                  |
| > 7 items                   | Scrollbar always visible with 7-item viewport                               |
| `disabled`                  | Trigger greyed out, pointer-events none, keyboard locked                    |

---

## Design tokens used

| Token                                   | Usage                                       |
| --------------------------------------- | ------------------------------------------- |
| `border-grey-300`                       | Default trigger and dropdown border         |
| `border-primary-light`                  | Trigger hover border                        |
| `border-primary`                        | Trigger focus-within border                 |
| `border-system-error`                   | Error state border                          |
| `bg-grey-100`                           | Disabled trigger background / empty state   |
| `bg-background-lightblue`               | Highlighted item background                 |
| `text-grey-700`                         | Selected text, label, chevron               |
| `text-grey-500`                         | Placeholder text                            |
| `text-primary`                          | Checkmark icon (selected item)              |
| `shadow-[0px_3px_5px_rgba(0,0,0,0.17)]` | Dropdown shadow                             |
| `#C1C1C1`                               | Scrollbar thumb colour (matches OptionList) |
