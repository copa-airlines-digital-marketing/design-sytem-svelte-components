# Counter

A compact numeric stepper composed of a decrement button, a non-editable value display, and an increment button. The controls are built on top of [`bits-ui`'s `Button` primitive](https://bits-ui.com/docs/components/button).

**Source:** `src/lib/components/counter/`  
**Exports:** `Counter`, `CounterProps`, `counterRootVariants`, `counterButtonVariants`, `counterValueVariants`, `clampCounterValue`, `getCounterNextValue`

---

## Anatomy

```svelte
<Counter bind:value />
```

Renders two icon buttons around a fixed-width text value. The center value is display-only, not editable.

---

## Props

| Prop                 | Type                        | Default          | Description                                  |
| -------------------- | --------------------------- | ---------------- | -------------------------------------------- |
| `value`              | `number`                    | `0`              | Bindable current value                       |
| `min`                | `number`                    | `0`              | Minimum value                                |
| `max`                | `number`                    | `Infinity`       | Maximum value                                |
| `step`               | `number`                    | `1`              | Amount added or removed per click            |
| `disabled`           | `boolean`                   | `false`          | Disables both controls and greys out value   |
| `error`              | `boolean`                   | `false`          | Applies error color to the controls          |
| `ariaLabel`          | `string`                    | `Counter`        | Accessible label for the control group       |
| `decrementAriaLabel` | `string`                    | `Decrease value` | Accessible label for the decrement button    |
| `incrementAriaLabel` | `string`                    | `Increase value` | Accessible label for the increment button    |
| `formatValue`        | `(value: number) => string` | `String`         | Formats the display-only value text          |
| `onValueChange`      | `(value: number) => void`   | -                | Callback fired after a value change          |
| `class`              | `string \| null`            | -                | Extra Tailwind classes merged into the root  |
| `buttonClass`        | `string \| null`            | -                | Extra Tailwind classes merged into buttons   |
| `valueClass`         | `string \| null`            | -                | Extra Tailwind classes merged into the value |
| `customcn`           | `(...inputs) => string`     | -                | Override the `cn` merge function             |

All remaining `HTMLAttributes<HTMLDivElement>` are forwarded to the root wrapper.

---

## Examples

### Basic

```svelte
<script>
	let guests = $state(1);
</script>

<Counter bind:value={guests} />
```

### With limits

```svelte
<Counter bind:value={guests} min={0} max={9} />
```

When `value <= min`, the decrement control is disabled. When `value >= max`, the increment control is disabled.

### Disabled

```svelte
<Counter value={2} disabled />
```

### Error

```svelte
<Counter bind:value={guests} error />
```

---

## States & Styles

| State    | Control color        | Notes                                 |
| -------- | -------------------- | ------------------------------------- |
| Idle     | `primary`            | 24px icon                             |
| Hover    | `primary-ultradark`  | 24px icon                             |
| Focus    | `primary-faded` ring | 28px visual artwork, no layout shift  |
| Active   | `primary-faded` ring | Filled control with white symbol      |
| Error    | `system-error`       | Applies to increment/decrement icons  |
| Disabled | `grey-300`           | Applies to disabled controls or value |

The root uses `inline-flex`, `items-center`, and `gap-1` to match the 4px spacing from Figma. The value display is fixed at `35px` wide with `20px` body text.

---

## Accessibility

- The root uses `role="group"` with `ariaLabel`.
- Increment and decrement are real buttons with distinct accessible labels.
- The display-only value uses `aria-live="polite"` so assistive tech can announce updates.
- The center value is not editable.
