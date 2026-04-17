# Grid

A two-component layout system (`Container` + `ContainerItem`) that wraps Copa's 12-column grid. Handles max-width centering, column gutters, and responsive span distribution.

**Source:** `src/lib/components/grid/`  
**Exports:** `Container`, `ContainerItem`, `gridContainerVariants`, `gridItemVariant`, `getGridContainerClasses`

---

## Anatomy

```svelte
<Container layout>
	<Item distribution="half">Left content</Item>
	<Item distribution="half">Right content</Item>
</Container>
```

---

## `Container`

A centered wrapper. Two modes:

| `type`                | Rendered markup                                                 | Use for                                           |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| `'default'` (default) | Single `<div class="container ...">`                            | Free-form content, full-width sections            |
| `'grid'`              | Outer `container-grid` div + inner `col-start-2 col-span-1` div | Content that must sit inside the outer grid track |

### Props

| Prop     | Type                  | Default     | Description                                                                   |
| -------- | --------------------- | ----------- | ----------------------------------------------------------------------------- |
| `type`   | `'default' \| 'grid'` | `'default'` | Container variant (see table above)                                           |
| `layout` | `boolean`             | `false`     | When `true`, applies `grid grid-cols-12 gap-grid-gutter` inside the container |
| `class`  | `string`              | —           | Extra Tailwind classes                                                        |

All remaining `HTMLAttributes<HTMLDivElement>` are forwarded.

---

## `ContainerItem`

A 12-column grid item. Always spans full width on mobile; narrows at breakpoints based on `distribution`.

### Props

| Prop           | Type      | Default  | Description            |
| -------------- | --------- | -------- | ---------------------- |
| `distribution` | see below | `'full'` | Responsive column span |
| `class`        | `string`  | —        | Extra Tailwind classes |

All remaining `HTMLAttributes<HTMLDivElement>` are forwarded.

#### `distribution` values

| Value     | Behavior                                           |
| --------- | -------------------------------------------------- |
| `full`    | `col-span-full` — always full width                |
| `half`    | `sm:col-span-6` — half width from `sm` breakpoint  |
| `four`    | `md:col-span-4` — one third from `md` breakpoint   |
| `third`   | `md:col-span-3` — one quarter from `md` breakpoint |
| `'4 / 8'` | Odd children span 4, even children span 8 at `md`  |
| `'8 / 4'` | Odd children span 8, even children span 4 at `md`  |

---

## Examples

### Centered content block

```svelte
<Container type="grid" class="py-roomy bg-background-paper">
	<Heading tag="h1" variant="h1">Page title</Heading>
</Container>
```

### Two-column layout

```svelte
<Container layout class="py-roomy">
	<Item distribution="half">
		<!-- left column -->
	</Item>
	<Item distribution="half">
		<!-- right column -->
	</Item>
</Container>
```

### Asymmetric layout (4 / 8 split)

```svelte
<Container layout>
	<Item distribution="4 / 8" class="bg-grey-100">Sidebar</Item>
	<Item distribution="4 / 8">Main content</Item>
</Container>
```

### Three equal columns

```svelte
<Container layout>
	<Item distribution="four">Column A</Item>
	<Item distribution="four">Column B</Item>
	<Item distribution="four">Column C</Item>
</Container>
```

---

## Notes

- `Container` without `layout` is a simple centered box — good for full-bleed sections.
- Add `layout` only when you need the 12-column grid inside the container.
- `ContainerItem` must be a **direct child** of a `Container` with `layout={true}`.
- The gutter between items is controlled by the `gap-grid-gutter` token from the Tailwind preset.
