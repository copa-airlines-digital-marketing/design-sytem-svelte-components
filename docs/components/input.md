# Input

The base text input field. Foundation for all form controls — text, email, password, number, and as the inner atom of Select, Autocomplete, and other composed fields.

States are driven by CSS pseudo-classes wherever possible (`hover:`, `:focus-within`) — no JS required. Only `error` needs an explicit prop because CSS cannot determine form-validation state automatically.

---

## Import

```ts
import { Input } from '$lib/components/input';
```

---

## Props

| Prop          | Type      | Default  | Description                                                                      |
| ------------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `value`       | `string`  | `''`     | **Bindable.** The current field value.                                           |
| `placeholder` | `string`  | `''`     | Placeholder text shown when empty.                                               |
| `label`       | `string`  | —        | Upper label (rendered above the field box). Omit to hide.                        |
| `mandatory`   | `boolean` | `false`  | Appends a red `*` next to the label.                                             |
| `helperText`  | `string`  | —        | Hint text below the field. Rendered via the `HelperText` component.              |
| `type`        | `string`  | `'text'` | HTML input type (`text`, `email`, `password`, `number`, etc.).                   |
| `error`       | `boolean` | `false`  | Switches the border and `HelperText` icon to error-red (`system-error`).         |
| `disabled`    | `boolean` | `false`  | Disables the field — grey background, no hover/focus border changes.             |
| `leftIcon`    | `Snippet` | —        | Optional icon rendered inside the field on the left (24×24 slot).                |
| `rightIcon`   | `Snippet` | —        | Optional icon rendered inside the field on the right (e.g. chevron for selects). |
| `id`          | `string`  | —        | Native `id` for the `<input>`.                                                   |
| `name`        | `string`  | —        | Native `name` for the `<input>`.                                                 |
| `class`       | `string`  | —        | Extra classes on the outer wrapper.                                              |

---

## Usage

### Basic

```svelte
<Input bind:value placeholder="Enter text" label="Label" helperText="Helper Text" />
```

### Mandatory field

```svelte
<Input bind:value label="Email" mandatory helperText="We won't share your email" />
```

### Error state

```svelte
<Input bind:value label="Email" mandatory error helperText="Enter a valid email address" />
```

### Disabled with a pre-filled value

```svelte
<Input value="Locked value" label="Status" disabled />
```

### With icons (select-like field)

```svelte
<Input bind:value label="Country" placeholder="Select a country">
	{#snippet leftIcon()}
		<!-- Globe SVG (24×24) -->
		<svg ...></svg>
	{/snippet}
	{#snippet rightIcon()}
		<!-- Chevron SVG (24×24) -->
		<svg ...></svg>
	{/snippet}
</Input>
```

---

## State behaviour (CSS-driven)

| State    | How it's triggered           | Border colour   | Background     |
| -------- | ---------------------------- | --------------- | -------------- |
| Idle     | default                      | `grey-300`      | `common-white` |
| Hover    | `:hover` on field box        | `primary-light` | `common-white` |
| Focus    | `:focus-within` on field box | `primary`       | `common-white` |
| Error    | `error={true}` prop          | `system-error`  | `common-white` |
| Disabled | `disabled={true}` prop       | `grey-600`      | `grey-100`     |

> Hover and focus states are handled entirely via CSS pseudo-classes on the field-box `<div>`. No JavaScript is used.

---

## Anatomy

```
┌─────────────────────────────┐
│ [Label text] [*]            │  ← label row (optional label + mandatory asterisk)
│ ┌─────────────────────────┐ │
│ │ [icon] [input text] [>] │ │  ← field box (border driven by :hover / :focus-within)
│ └─────────────────────────┘ │
│ [ℹ] Helper text             │  ← HelperText component (type switches on error)
└─────────────────────────────┘
```

---

## Design tokens used

| Token                  | Value      | Applied to                              |
| ---------------------- | ---------- | --------------------------------------- |
| `font-body text-d1`    | 14px / 400 | Label, mandatory `*`, helper text       |
| `font-body text-b`     | 16px / 400 | Input value / placeholder               |
| `text-grey-700`        | `#333333`  | Label and typed value                   |
| `text-grey-500`        | `#999999`  | Placeholder and disabled text           |
| `text-system-error`    | `#D52525`  | Mandatory `*`, error border, error icon |
| `border-grey-300`      | `#CCCCCB`  | Idle border                             |
| `border-primary-light` | `#0E68FF`  | Hover border                            |
| `border-primary`       | `#0032A0`  | Focus border                            |
| `border-system-error`  | `#D52525`  | Error border                            |
| `border-grey-600`      | `#666666`  | Disabled border                         |
| `bg-grey-100`          | `#EFEFEE`  | Disabled background                     |
| `rounded`              | `4px`      | Field box border radius                 |
| `p-3`                  | `12px`     | Field box inner padding                 |
