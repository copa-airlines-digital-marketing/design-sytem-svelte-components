# Checkbox

An accessible checkbox built on top of [`bits-ui`'s `Checkbox` primitive](https://bits-ui.com/docs/components/checkbox). Renders a styled square that shows a check SVG when selected.

**Source:** `src/lib/components/checkbox/`  
**Exports:** `Checkbox`, `CheckboxProps`

---

## Anatomy

```svelte
<label for="agree" class="flex items-center gap-2">
	<Checkbox id="agree" bind:checked />
	I agree to the terms
</label>
```

Renders a `CheckboxPrimitive.Root` (a `<button role="checkbox">`) with an internal SVG checkmark rendered via a [bits-ui child snippet](https://bits-ui.com/docs/child-snippet).

---

## Props

| Prop      | Type             | Default | Description                           |
| --------- | ---------------- | ------- | ------------------------------------- |
| `checked` | `boolean`        | `false` | Bindable — controls the checked state |
| `class`   | `string \| null` | —       | Extra Tailwind classes                |

All remaining `CheckboxPrimitive.RootProps` (e.g. `disabled`, `name`, `value`, `required`, `onCheckedChange`) are forwarded to the underlying primitive.

> **Note:** `child` is provided internally by the component and should not be passed by consumers.

---

## Examples

### Uncontrolled

```svelte
<label class="flex items-center gap-2">
	<Checkbox />
	Subscribe to newsletter
</label>
```

### Controlled with `bind:checked`

```svelte
<script>
	let agreed = $state(false);
</script>

<label class="flex items-center gap-2">
	<Checkbox bind:checked={agreed} />
	I accept the terms
</label>

{#if agreed}
	<p>Thanks for agreeing!</p>
{/if}
```

### Disabled

```svelte
<label class="flex items-center gap-2 opacity-50 cursor-not-allowed">
	<Checkbox disabled />
	This option is unavailable
</label>
```

### Form usage

```svelte
<Checkbox name="consent" value="yes" required />
```

---

## States & styles

| State             | Visual                                                                  |
| ----------------- | ----------------------------------------------------------------------- |
| Unchecked         | White background (`bg-grey-50`), grey border                            |
| Checked           | `primary` fill + border, white checkmark SVG                            |
| Focus (unchecked) | `background-lightblue` fill, `primary-ultradark` border, 2px ring       |
| Focus (checked)   | `primary` fill retained, 2px ring                                       |
| Hover             | `primary-ultradark` border                                              |
| Active            | `primary-ultradark` background and border, 2px ring                     |
| Disabled          | `grey-100` background, `grey-300` border, no ring, `cursor-not-allowed` |

---

## Accessibility

- Uses `role="checkbox"` and `aria-checked` from the bits-ui primitive.
- Always associate with a `<label>` either via `for`/`id` or by wrapping.
- Supports keyboard navigation: `Space` toggles the checkbox.
