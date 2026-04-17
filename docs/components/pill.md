# Pill

A small badge/label component composed of three parts: `Pill` (container), `Text` (label), and `Icon` (optional icon on either side). Internal state is shared via Svelte context so child components automatically inherit the pill's theme and thickness.

**Source:** `src/lib/components/pill/`  
**Exports:** `Pill`, `Text` (alias `PillText`), `Icon` (alias `PillIcon`)

---

## Anatomy

```svelte
<Pill>
	<Text>On time</Text>
</Pill>

<!-- With icon -->
<Pill>
	<Icon side="left"><CheckIcon /></Icon>
	<Text>Confirmed</Text>
</Pill>
```

The grid layout is fixed at `3 columns (16px / auto / 16px)`, so icons always anchor to the left or right slot and text flows in the center.

---

## `Pill`

The outer container. Sets the theme context consumed by `Text` and `Icon`.

### Props

| Prop        | Type                         | Default     | Description                                                     |
| ----------- | ---------------------------- | ----------- | --------------------------------------------------------------- |
| `theme`     | `'default' \| 'transparent'` | `'default'` | `default` fills with `primary`; `transparent` has no background |
| `outline`   | `boolean`                    | `false`     | Adds a `common-white` border                                    |
| `thickness` | `'default' \| 'slim'`        | `'default'` | Passed to context — affects `Text` font size                    |
| `class`     | `string`                     | —           | Extra classes                                                   |
| `customcn`  | `(...inputs) => string`      | —           | Override `cn`                                                   |

---

## `Text`

Renders a `Caption` with size driven by the parent `Pill`'s `thickness`.

| `thickness` (from context) | Caption size    |
| -------------------------- | --------------- |
| `default`                  | `caption-small` |
| `slim`                     | `caption-tiny`  |

The text color is always inverted (white) when `theme === 'default'` and standard grey when `theme === 'transparent'`.

### Props

| Prop       | Type                    | Default  | Description            |
| ---------- | ----------------------- | -------- | ---------------------- |
| `tag`      | any inline text element | `'span'` | HTML element to render |
| `class`    | `string`                | —        | Extra classes          |
| `customcn` | `(...inputs) => string` | —        | Override `cn`          |

---

## `Icon`

A `<span>` that sizes to 16×16px and positions itself in the left or right grid slot.

### Props

| Prop       | Type                             | Default     | Description          |
| ---------- | -------------------------------- | ----------- | -------------------- |
| `side`     | `'default' \| 'left' \| 'right'` | `'default'` | Grid column position |
| `class`    | `string`                         | —           | Extra classes        |
| `customcn` | `(...inputs) => string`          | —           | Override `cn`        |

The icon fill color is automatically `fill-common-white` on `default` theme pills and `fill-grey-600` on `transparent` pills.

---

## Examples

### Status pill

```svelte
<Pill class="bg-system-success">
	<Text>On time</Text>
</Pill>
```

### Transparent pill with border

```svelte
<Pill theme="transparent" outline>
	<Text>Economy</Text>
</Pill>
```

### Slim pill

```svelte
<Pill thickness="slim">
	<Text>New</Text>
</Pill>
```

### Pill with left icon

```svelte
<script>
	import { Pill, Text, Icon } from '$lib/components/pill';
	import { Check } from '$lib/components/icon';
</script>

<Pill>
	<Icon side="left"><Check /></Icon>
	<Text>Checked in</Text>
</Pill>
```

### Pill with right icon

```svelte
<Pill>
	<Text>Gate B12</Text>
	<Icon side="right"><Carrot direction="right" /></Icon>
</Pill>
```

---

## Notes

- The pill background is `bg-primary` by default. Override with `class` (e.g., `class="bg-system-error"`) to communicate status.
- `Icon` inside `Pill` must be a **direct child** — context is set by `Pill` and read by `Text` and `Icon`.
- There is no built-in size variant — use `thickness` for the text size and `class` for layout overrides.
