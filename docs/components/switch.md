# Switch

A boolean toggle control built on top of [`bits-ui`'s `Switch` primitive](https://bits-ui.com/docs/components/switch). The thumb slides between off (left) and on (right) with smooth CSS transitions and full keyboard support.

**Source:** `src/lib/components/switch/`  
**Exports:** `Switch`, `SwitchProps`, `switchRootVariants`, `switchThumbVariants`, `switchWrapperVariants`, `switchLabelVariants`

---

## Anatomy

```svelte
<Switch bind:checked />
```

Renders a `<button role="switch" aria-checked>` (root) containing an absolutely-positioned thumb `<span>`. Both elements receive `data-state="checked"` or `data-state="unchecked"` from the primitive.

When `offLabel` or `onLabel` are provided, the switch is wrapped with inline text buttons. Clicking `offLabel` sets `checked` to `false`; clicking `onLabel` sets `checked` to `true`.

---

## Props

| Prop              | Type                         | Default | Description                                      |
| ----------------- | ---------------------------- | ------- | ------------------------------------------------ |
| `checked`         | `boolean`                    | `false` | Bindable current on/off state                    |
| `disabled`        | `boolean`                    | `false` | Disables switch and label interaction            |
| `offLabel`        | `string \| null`             | -       | Optional label that selects the off state        |
| `onLabel`         | `string \| null`             | -       | Optional label that selects the on state         |
| `labelClass`      | `string \| null`             | -       | Extra Tailwind classes merged into label buttons |
| `onCheckedChange` | `(checked: boolean) => void` | -       | Callback fired when state changes                |
| `class`           | `string \| null`             | -       | Extra Tailwind classes merged into the root      |
| `customcn`        | `(...inputs) => string`      | -       | Override the `cn` merge function                 |

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

### With clickable state labels

```svelte
<script>
	let enabled = $state(false);
</script>

<Switch bind:checked={enabled} offLabel="Off" onLabel="On" />
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
| Focus (any state) | 2px `primary-faded` outline | -              |

The thumb is always `bg-common-white` with a drop shadow (removed when disabled).

---

## Accessibility

- Uses `role="switch"` and `aria-checked` from the bits-ui primitive.
- Keyboard: `Space` or `Enter` toggles the switch.
- Optional `offLabel` and `onLabel` controls are keyboard-focusable buttons with `aria-pressed`.
- Always pair an unlabeled switch with a visible `<label>` or `aria-label` so screen readers describe what is being toggled.
