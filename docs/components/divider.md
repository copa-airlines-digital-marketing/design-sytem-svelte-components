# Divider

A visual separator rendered as a styled `<hr>`. Supports horizontal and vertical orientations, solid or dashed lines, and light/dark themes.

**Source:** `src/lib/components/divider/`  
**Exports:** `Divider`, `dividerVariants`, `DividerProps`

---

## Anatomy

```svelte
<Divider />
```

Renders a single `<hr>` element. No children.

---

## Props

| Prop          | Type                         | Default        | Description                                            |
| ------------- | ---------------------------- | -------------- | ------------------------------------------------------ |
| `lineType`    | `'solid' \| 'dashed'`        | `'solid'`      | Solid line or dashed pattern                           |
| `opaque`      | `boolean`                    | `false`        | `false` renders at 50% opacity; `true` is fully opaque |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the line                                  |
| `spacing`     | `boolean`                    | `true`         | Adds `my-1` vertical margin when `true`                |
| `theme`       | `'light' \| 'dark'`          | `'light'`      | `light` uses `grey-300`; `dark` uses `grey-50`         |
| `class`       | `string`                     | —              | Extra Tailwind classes                                 |

All remaining `HTMLAttributes<HTMLSpanElement>` are forwarded.

---

## Examples

### Default horizontal divider

```svelte
<Divider />
```

### Dark theme (for use on colored backgrounds)

```svelte
<div class="bg-primary p-6">
	<p class="text-white">Section title</p>
	<Divider theme="dark" opaque />
	<p class="text-white">Section content</p>
</div>
```

### Dashed line

```svelte
<Divider lineType="dashed" />
```

### Vertical divider (inside a flex container)

```svelte
<div class="flex items-center gap-4 h-8">
	<span>Item A</span>
	<Divider orientation="vertical" spacing={false} />
	<span>Item B</span>
</div>
```

### No spacing

```svelte
<Divider spacing={false} />
```

---

## Notes

- The default 50% opacity (`opaque={false}`) is intentional — it makes the divider subtle. Pass `opaque` for high-contrast use cases.
- For vertical dividers, set `spacing={false}` and control height via the parent flex/grid container.
