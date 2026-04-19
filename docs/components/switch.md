# Switch

A boolean toggle control built on top of [`bits-ui`'s `Switch` primitive](https://bits-ui.com/docs/components/switch). The thumb slides between off (left) and on (right) with smooth CSS transitions and full keyboard support.

**Source:** `src/lib/components/switch/`  
**Exports:** `Switch`, `SwitchProps`, `switchRootVariants`, `switchThumbVariants`

---

## Anatomy

```svelte
<Switch bind:checked />
```

Renders a `<button role="switch" aria-checked>` (root) containing an absolutely-positioned thumb `<span>`. Both elements receive `data-state="checked"` or `data-state="unchecked"` from the primitive.

---

## Props

| Prop              | Type                         | Default | Description                            |
| ----------------- | ---------------------------- | ------- | -------------------------------------- |
| `checked`         | `boolean`                    | `false` | Bindable — current on/off state        |
| `disabled`        | `boolean`                    | `false` | Disables interaction, reduces opacity  |
| `onCheckedChange` | `(checked: boolean) => void` | —       | Callback fired when state changes      |
| `class`           | `string \| null`             | —       | Extra Tailwind classes merged via `cn` |
| `customcn`        | `(...inputs) => string`      | —       | Override the `cn` merge function       |

All remaining `SwitchPrimitive.RootProps` (e.g. `name`, `value`, `required`, `id`) are forwarded to the underlying primitive.

---

## Examples

### Uncontrolled

```svelte
<Switch />
```

### Controlled with `bind:checked`

```svelte
<script>
	let notifications = $state(false);
</script>

<label class="flex items-center gap-2">
	<Switch bind:checked={notifications} />
	Enable notifications
</label>
```

### With change callback

```svelte
<Switch onCheckedChange={(v) => console.log('switched to', v)} />
```

### Disabled

```svelte
<label class="flex items-center gap-2 opacity-50 cursor-not-allowed">
	<Switch disabled checked />
	This option is locked
</label>
```

---

## States & styles

| State             | Track color                 | Thumb position |
| ----------------- | --------------------------- | -------------- |
| Off / Idle        | `grey-300`                  | Left (1px)     |
| Off / Hover       | `grey-200`                  | Left           |
| Off / Active      | `primary-ultradark`         | Left           |
| Off / Disabled    | `grey-300` + 50% opacity    | Left           |
| On / Idle         | `primary`                   | Right (25px)   |
| On / Hover        | `primary-light`             | Right          |
| On / Active       | `primary-ultradark`         | Right          |
| On / Disabled     | `grey-300` + 50% opacity    | Right          |
| Focus (any state) | 2px `primary-faded` outline | —              |

The thumb is always `bg-common-white` with a drop shadow (removed when disabled).

---

## Accessibility

- Uses `role="switch"` and `aria-checked` from the bits-ui primitive.
- Keyboard: `Space` or `Enter` toggles the switch.
- Always pair with a visible `<label>` or `aria-label` so screen readers describe what is being toggled.
