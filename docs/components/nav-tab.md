# NavTab

A single tab item for navigation bars. Renders a `<button role="tab">` with an optional subtitle, optional icons on either side, and a coloured bottom-border indicator that shows hover and active states.

**Source:** `src/lib/components/nav-tab/`  
**Exports:** `NavTab`, `navTabVariants`, `NavTabProps`  
**Figma definition:** [`docs/definitions/nav-tab.md`](../definitions/nav-tab.md)

---

## Anatomy

```svelte
<NavTab>Flights</NavTab>

<!-- With subtitle -->
<NavTab subtitle="From">Bogotá</NavTab>

<!-- Active (currently selected) tab -->
<NavTab active>Flights</NavTab>

<!-- With icons -->
<NavTab>
	{#snippet iconLeft()}<CheckIcon />{/snippet}
	Confirmed
	{#snippet iconRight()}<CarrotIcon />{/snippet}
</NavTab>

<!-- Invert (for dark/colored backgrounds) -->
<NavTab type="invert" active>Flights</NavTab>
```

Renders a `<button role="tab" aria-selected>` element. All native `HTMLButtonAttributes` are forwarded.

---

## Props

| Prop        | Type                    | Default     | Description                                                                         |
| ----------- | ----------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `type`      | `'primary' \| 'invert'` | `'primary'` | Color scheme — `primary` for light backgrounds, `invert` for dark/colored ones      |
| `active`    | `boolean`               | `false`     | Whether this tab is currently selected — shows the `primary-light` bottom indicator |
| `subtitle`  | `string`                | —           | Optional small label rendered above the main tab text                               |
| `iconLeft`  | `Snippet`               | —           | Optional icon rendered to the left of the content                                   |
| `iconRight` | `Snippet`               | —           | Optional icon rendered to the right of the content                                  |
| `children`  | `Snippet`               | required    | Main tab label                                                                      |
| `class`     | `string \| null`        | —           | Extra Tailwind classes merged via `cn`                                              |
| `customcn`  | `(...inputs) => string` | —           | Override the `cn` merge function                                                    |

All remaining props (`onclick`, `disabled`, `aria-*`, etc.) are forwarded to the underlying button element.

---

## Variants

### `type`

| Value     | Text color          | Hover indicator       | Background context                             |
| --------- | ------------------- | --------------------- | ---------------------------------------------- |
| `primary` | `text-grey-600`     | `border-grey-500`     | Light / white backgrounds                      |
| `invert`  | `text-common-white` | `border-common-white` | Dark / colored backgrounds (e.g. `bg-primary`) |

### `active`

| Value             | Effect                                                                      |
| ----------------- | --------------------------------------------------------------------------- |
| `false` (default) | No indicator; hover shows a faint border                                    |
| `true`            | `border-primary-light` indicator always visible; hover does not override it |

---

## Examples

### Default tab bar

```svelte
<script>
	import { NavTab } from '$lib/components/nav-tab';
	let current = 'flights';
</script>

<div role="tablist" class="flex border-b border-grey-200">
	<NavTab active={current === 'flights'} onclick={() => (current = 'flights')}>Flights</NavTab>
	<NavTab active={current === 'hotels'} onclick={() => (current = 'hotels')}>Hotels</NavTab>
	<NavTab active={current === 'cars'} onclick={() => (current = 'cars')}>Cars</NavTab>
</div>
```

### With subtitle

```svelte
<NavTab subtitle="Departing" active>Bogotá</NavTab>
```

### Invert (on dark background)

```svelte
<div class="bg-primary px-4 flex">
	<NavTab type="invert" active>Flights</NavTab>
	<NavTab type="invert">Hotels</NavTab>
</div>
```

### With icons

```svelte
<script>
	import { NavTab } from '$lib/components/nav-tab';
	import { Icon } from '$lib/components/icon';
</script>

<NavTab>
	{#snippet iconLeft()}<Icon.Globe class="size-6" />{/snippet}
	Destinations
</NavTab>
```

### Using `navTabVariants` directly

```svelte
<script>
	import { navTabVariants } from '$lib/components/nav-tab';
	import { cn } from '$lib';
</script>

<a href="/flights" role="tab" class={cn(navTabVariants({ type: 'primary', active: true }))}>
	Flights
</a>
```

---

## Notes

- The component sets `role="tab"` and `aria-selected` automatically based on the `active` prop. For full accessibility, wrap tabs in a `role="tablist"` container.
- Hover state is CSS-driven (`hover:border-*`) — no JavaScript needed.
- When `active: true`, the hover compound variant is not applied, so the indicator stays `border-primary-light` even on hover.
- Icons should be `size-6` (24 × 24 px) to match the Figma spec. The wrapper is `relative` so absolutely-positioned SVGs work correctly.
- The subtitle uses `text-d3` (12 px) and the label uses `text-d1` (16 px), both in `font-body` (Suisse Int'l).
