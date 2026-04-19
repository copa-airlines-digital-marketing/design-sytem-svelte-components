# Modal

A dialog overlay built on top of [`bits-ui`'s `Dialog` primitive](https://bits-ui.com/docs/components/dialog). Composed of three parts — a close header (`ModalClose`), a scrollable content area, and an action bar footer (`ModalActionBar`) — all rendered inside a portal with a `Dimmer`-style overlay.

**Source:** `src/lib/components/modal/`  
**Exports:** `Modal`, `ModalClose`, `ModalActionBar`, `ModalProps`, `ModalCloseProps`, `ModalActionBarProps`

---

## Anatomy

```svelte
<Modal
	bind:open
	title="Select document type"
	titleSize="32px"
	mainActionLabel="Confirm"
	secondaryActionLabel="Cancel"
	onMainAction={confirm}
	onSecondaryAction={cancel}
>
	<p>Modal body content goes here.</p>
</Modal>
```

The modal renders:

1. **Overlay** — full-viewport dimmer (`bg-grey-800/80`) via `Dialog.Overlay`
2. **Panel** — centered white card via `Dialog.Content`
   - `ModalClose` — title + ✕ button, pinned to the top
   - Scrollable content area (`flex-1 min-h-0 overflow-y-auto`)
   - `ModalActionBar` — divider + action buttons, pinned to the bottom

---

## Props

### `Modal`

| Prop                   | Type                             | Default     | Description                                             |
| ---------------------- | -------------------------------- | ----------- | ------------------------------------------------------- |
| `open`                 | `boolean`                        | `false`     | Bindable — controls visibility                          |
| `onClose`              | `() => void`                     | —           | Called when the modal closes (X, overlay click, Escape) |
| `title`                | `string`                         | —           | Heading text shown in `ModalClose`                      |
| `titleSize`            | see below                        | `'default'` | Font size of the title                                  |
| `size`                 | `'wide' \| 'normal' \| 'narrow'` | `'normal'`  | Max-width of the panel                                  |
| `breakpoint`           | `'default' \| 'xsmall'`          | `'default'` | `xsmall` renders as a bottom sheet                      |
| `mainActionLabel`      | `string`                         | —           | Label for the primary (solid) button                    |
| `secondaryActionLabel` | `string`                         | —           | Label for the secondary (outline) button                |
| `onMainAction`         | `() => void`                     | —           | Primary button click handler                            |
| `onSecondaryAction`    | `() => void`                     | —           | Secondary button click handler                          |
| `showActionBar`        | `boolean`                        | `true`      | Show or hide the action bar footer                      |
| `priceLabel`           | `string`                         | —           | Price text (left-aligned in action bar)                 |
| `priceSubtext`         | `string`                         | —           | Subtext below price (e.g. "Solo Ida · Por Adulto")      |
| `class`                | `string \| null`                 | —           | Extra classes on the panel                              |
| `customcn`             | `(...inputs) => string`          | —           | Override the `cn` merge function                        |
| `children`             | `Snippet`                        | —           | Scrollable body content                                 |

### `titleSize` values

| Value     | Font class | Figma font-size         |
| --------- | ---------- | ----------------------- |
| `default` | —          | X button only, no title |
| `'56px'`  | `text-u5`  | 32px (2rem)             |
| `'40px'`  | `text-u4`  | 28px (1.875rem)         |
| `'32px'`  | `text-u3`  | 24px (1.5rem)           |
| `'16px'`  | `text-u2`  | 20px (1.125rem)         |

### `size` values

| Value    | Panel max-width                          |
| -------- | ---------------------------------------- |
| `wide`   | `sm:max-w-[800px]` / `lg:max-w-[1200px]` |
| `normal` | `sm:max-w-[560px]` / `lg:max-w-[800px]`  |
| `narrow` | `sm:max-w-[392px]`                       |

---

## Examples

### Basic modal

```svelte
<script>
	let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open</button>

<Modal
	bind:open
	title="Confirm action"
	titleSize="32px"
	mainActionLabel="Confirm"
	onMainAction={() => (open = false)}
>
	<p>Are you sure you want to continue?</p>
</Modal>
```

### With two actions

```svelte
<Modal
	bind:open
	title="Select document"
	titleSize="32px"
	mainActionLabel="Continue"
	secondaryActionLabel="Cancel"
	onMainAction={handleConfirm}
	onSecondaryAction={() => (open = false)}
>
	<DocumentPicker />
</Modal>
```

### With price in action bar

```svelte
<Modal
	bind:open
	title="Flight details"
	titleSize="32px"
	mainActionLabel="Book now"
	priceLabel="20,000 millas + 68.000 COP"
	priceSubtext="Solo Ida · Por Adulto"
	onMainAction={handleBook}
>
	<FlightSummary />
</Modal>
```

### No action bar

```svelte
<Modal bind:open title="Information" titleSize="32px" showActionBar={false}>
	<InfoContent />
</Modal>
```

### Bottom sheet (mobile)

```svelte
<Modal bind:open breakpoint="xsmall" title="Filters" titleSize="32px" mainActionLabel="Apply">
	<FilterOptions />
</Modal>
```

### Narrow panel

```svelte
<Modal bind:open size="narrow" title="Quick select" titleSize="32px" mainActionLabel="Select">
	<OptionList />
</Modal>
```

---

## Sub-components

### `ModalClose`

Header bar with an optional title and a ✕ close button. Used internally by `Modal` but also available standalone.

```svelte
<ModalClose title="My Title" titleSize="32px" onClose={handleClose} />
```

### `ModalActionBar`

Footer with a 1px divider and an action row. Used internally by `Modal` but also available standalone.

```svelte
<ModalActionBar
	mainActionLabel="Confirm"
	secondaryActionLabel="Cancel"
	onMainAction={confirm}
	onSecondaryAction={cancel}
/>
```

When `priceLabel` is provided, the price is left-aligned and the button moves to the right.

---

## Scroll behaviour

When the modal content is taller than 90dvh, the scrollable area (`flex-1 min-h-0 overflow-y-auto`) scrolls independently while the `ModalClose` header and `ModalActionBar` footer remain fixed in place.

---

## Accessibility

- Built on `bits-ui` `Dialog` — includes `role="dialog"`, `aria-modal`, focus trap, and `Escape` to close.
- `Dialog.Title` semantics are provided by the title span inside `ModalClose`.
- Focus returns to the trigger element when the modal closes.
