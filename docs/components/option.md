# Option

Two components that together form the dropdown option layer used inside Select and similar composed fields.

- **`Option`** — a single selectable row with label and optional left/right icon slots.
- **`OptionList`** — the floating scrollable container powered by `bits-ui ScrollArea`. Shows a custom scrollbar when items exceed `maxHeight`; shows a localised empty-state message when there are no results.

States are entirely CSS-driven — no JS required.

---

## Import

```ts
import { Option, OptionList } from '$lib/components/option';
```

---

## `Option` props

| Prop        | Type         | Default  | Description                                                       |
| ----------- | ------------ | -------- | ----------------------------------------------------------------- |
| `label`     | `string`     | required | The display text for this option.                                 |
| `leftIcon`  | `Snippet`    | —        | 24×24 icon slot on the left (e.g. category icon).                 |
| `rightIcon` | `Snippet`    | —        | 24×24 icon slot on the right (e.g. checkmark for selected state). |
| `disabled`  | `boolean`    | `false`  | Disables the option — grey background, not clickable.             |
| `onclick`   | `() => void` | —        | Click handler.                                                    |
| `class`     | `string`     | —        | Extra classes on the root `<button>`.                             |

## `OptionList` props

| Prop           | Type      | Default             | Description                                                                   |
| -------------- | --------- | ------------------- | ----------------------------------------------------------------------------- |
| `children`     | `Snippet` | —                   | The `Option` items to render.                                                 |
| `empty`        | `boolean` | `false`             | Shows the empty-state message instead of items; changes border to `grey-600`. |
| `emptyMessage` | `string`  | `'Sin resultados.'` | Text shown when `empty={true}`.                                               |
| `maxHeight`    | `number`  | `324`               | Max height in px before the list scrolls.                                     |
| `class`        | `string`  | —                   | Extra classes on the root container.                                          |

---

## Usage

### Basic list

```svelte
<OptionList>
	<Option label="Economy" onclick={() => select('Economy')} />
	<Option label="Business" onclick={() => select('Business')} />
	<Option label="First Class" onclick={() => select('First Class')} />
</OptionList>
```

### With icons

```svelte
<OptionList>
	{#each options as opt}
		<Option label={opt.label} onclick={() => select(opt)}>
			{#snippet leftIcon()}
				<CategoryIcon class="size-5 text-grey-400" />
			{/snippet}
			{#snippet rightIcon()}
				{#if opt.value === selected}
					<CheckIcon class="size-5 text-grey-700" />
				{/if}
			{/snippet}
		</Option>
	{/each}
</OptionList>
```

Or pass snippets as prop values:

```svelte
{#snippet categoryIcon()}
	<svg class="size-5 shrink-0 fill-current text-grey-400" ... />
{/snippet}

<Option label="Economy" leftIcon={categoryIcon} />
```

### Empty state

```svelte
<OptionList empty emptyMessage="No matching flights found." />
```

### Disabled option

```svelte
<OptionList>
	<Option label="Sold Out" disabled />
	<Option label="Economy" onclick={() => select('Economy')} />
</OptionList>
```

---

## State behaviour

### Option states (all CSS-driven)

| State    | Background             | Ring                | Mechanism            |
| -------- | ---------------------- | ------------------- | -------------------- |
| Idle     | `common-white`         | —                   | default              |
| Hover    | `background-lightblue` | —                   | `:hover`             |
| Focus    | `background-lightblue` | 2px inset `primary` | `:focus-visible`     |
| Disabled | `grey-100`             | —                   | HTML `disabled` attr |

> Hover and focus-visible are handled entirely by CSS — no JS state management.

### OptionList states

| State  | Border     |
| ------ | ---------- |
| Normal | `grey-300` |
| Empty  | `grey-600` |

---

## Anatomy

### Option

```
┌───────────────────────────────────┐
│ [left icon]  Label text  [right] │  ← button[type=button]
└───────────────────────────────────┘
```

### OptionList

```
┌─────────────────────────┬──┐
│ Option 1                │  │
│ Option 2 (hover/focus)  │ ▌│  ← scrollbar (bits-ui ScrollArea)
│ Option 3                │  │
│ ...                     │  │
└─────────────────────────┴──┘
  border + shadow
```

---

## Integration with Select

When integrated with bits-ui `Select`, the `Option` component will sit inside `Select.Item`. The select component handles the `role="option"` and `aria-selected` attributes; the `Option` component handles only the visual layer.

```svelte
<Select.Item value={opt.value}>
	<Option label={opt.label} />
</Select.Item>
```

---

## Design tokens

| Token                     | Value      | Applied to                 |
| ------------------------- | ---------- | -------------------------- |
| `bg-common-white`         | white      | Idle option background     |
| `bg-background-lightblue` | `#EFF5FF`  | Hover / focus background   |
| `bg-grey-100`             | `#EFEFEE`  | Disabled option background |
| `ring-primary`            | `#0032A0`  | Focus ring                 |
| `text-grey-700`           | `#333333`  | Label text                 |
| `border-grey-300`         | `#CCCCCB`  | Normal list border         |
| `border-grey-600`         | `#666666`  | Empty-state list border    |
| `font-body text-b`        | 16px / 400 | Label typography           |
| `p-3`                     | 12px       | Option item padding        |
| `gap-2`                   | 8px        | Icon ↔ label gap          |
| `rounded`                 | 4px        | List container corners     |
