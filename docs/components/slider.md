# Slider

A single-thumb range slider built on `bits-ui`. Supports a floating value tooltip, an optional label bar (icon + label + min–max range), and full keyboard accessibility.

## Import

```ts
import { Slider } from '$lib/components/slider';
```

## Props

| Prop            | Type                    | Default  | Description                             |
| --------------- | ----------------------- | -------- | --------------------------------------- |
| `value`         | `number`                | `min`    | Bindable current value                  |
| `min`           | `number`                | `0`      | Minimum value                           |
| `max`           | `number`                | `100`    | Maximum value                           |
| `step`          | `number`                | `1`      | Step increment                          |
| `disabled`      | `boolean`               | `false`  | Disables all interactions               |
| `label`         | `string`                | —        | Text shown in the label bar             |
| `minLabel`      | `string`                | —        | Minimum range text in the label bar     |
| `maxLabel`      | `string`                | —        | Maximum range text in the label bar     |
| `showTooltip`   | `boolean`               | `true`   | Show floating value tooltip above thumb |
| `formatTooltip` | `(v: number) => string` | `String` | Custom tooltip text formatter           |
| `icon`          | `Snippet`               | —        | Icon slot in the label bar              |
| `class`         | `string \| null`        | —        | Extra classes on the outer wrapper      |
| `customcn`      | `fn`                    | —        | Custom class merging function           |

## Examples

```svelte
<!-- Basic -->
<Slider bind:value={price} />

<!-- With label bar -->
<Slider
	bind:value={price}
	min={0}
	max={5000}
	label="Price"
	minLabel="0 USD"
	maxLabel="5,000 USD"
	formatTooltip={(v) => `${v.toLocaleString()} USD`}
/>

<!-- Without tooltip -->
<Slider bind:value={rating} min={1} max={5} step={1} showTooltip={false} />

<!-- Disabled -->
<Slider value={40} disabled />

<!-- With icon in label bar -->
<Slider bind:value={distance} label="Distance" minLabel="0 km" maxLabel="200 km">
	{#snippet icon()}
		<Icon name="map-pin" />
	{/snippet}
</Slider>
```

## Anatomy

```
Outer div (flex-col, w-full)
├── Label bar (optional, shown when label prop is set)
│   ├── Icon slot
│   ├── Label text
│   └── Min · Max text
└── Slider wrapper (relative, pt-6 for tooltip space)
    ├── Tooltip (absolute, left = value%)
    └── bits-ui Slider.Root
        ├── Slider.Track (h-1, bg-grey-200)
        │   └── Slider.Range (bg-primary, width = value%)
        └── Slider.Thumb (size-6, bg-common-white, shadow)
            ├── Ripple ring (expands on hover/focus/active)
            └── Inner dot (size-2, bg-primary)
```

## Thumb states

| State             | Visual                                     |
| ----------------- | ------------------------------------------ |
| Idle              | White circle with shadow + blue center dot |
| Hover             | + 32px `primary-faded/50` ripple ring      |
| Focus             | Same as hover                              |
| Active (dragging) | + 42px ripple ring                         |
| Disabled          | Pointer events removed, cursor changes     |
