# Slider

> **Status:** `done` — Component lives at `src/lib/components/slider/`. Story at `src/stories/slider.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma output)

### Anatomy (what Figma draws)

```
┌──────────────────────────────────────────┐
│  [label · min - max]           ← label bar (optional)
│  ─────────●─────────────────── ← track + thumb
│               ↑
│           [tooltip]            ← floating value tooltip
└──────────────────────────────────────────┘
```

The Figma output breaks the slider into these layers:

| Layer                         | Purpose                          | Notes                                   |
| ----------------------------- | -------------------------------- | --------------------------------------- |
| `mask` / `mask_01`            | Inactive track (full width)      | grey background, 4px tall               |
| `rectangle`                   | Active/filled track              | primary blue, width = `value%` of track |
| `oval` (24px)                 | Thumb — white circle with shadow | always visible                          |
| `oval_01` (8px)               | Thumb inner dot — primary blue   | centered inside thumb                   |
| `oval` wrapper (32/42px)      | Ripple ring around thumb         | only visible on hover/focus/active      |
| `tooltips-popover`            | Floating value tooltip           | above thumb, position = `value%`        |
| `frame-5124` → `label-slider` | Bottom label bar                 | icon + label + · + min - max            |

### States and visual differences

| State    | Ripple ring                      | Ring size                      |
| -------- | -------------------------------- | ------------------------------ |
| `idle`   | None                             | —                              |
| `hover`  | `primary-faded/50` circle        | `32px` (8px bigger than thumb) |
| `focus`  | Same as hover                    | `32px`                         |
| `active` | Larger `primary-faded/50` circle | `42px`                         |

The `hover` and `focus` states look identical in Figma. In the component they can share the same CSS (`:hover` and `:focus-visible`).

### Token mapping

#### Colors

| Figma value           | Token                        | Usage                          |
| --------------------- | ---------------------------- | ------------------------------ |
| `#DBDAD8`             | `grey-200`                   | Inactive track background      |
| `#0032A0`             | `primary`                    | Active/filled track, thumb dot |
| `white` + shadow      | `common-white` + `shadow-md` | Thumb outer circle             |
| `#9FC3FF` opacity 50% | `primary-faded/50`           | Hover/focus/active ripple ring |
| `#121212` opacity 70% | `grey-800/70`                | Tooltip background             |
| `white`               | `common-white`               | Tooltip text                   |
| `#333333`             | `grey-700`                   | Label bar text                 |
| `#AAAAAB`             | `grey-400`                   | Airline icon placeholder fill  |

#### Typography (all label bar text)

| Figma value                   | Token                 |
| ----------------------------- | --------------------- |
| `font-family: Suisse Int'l`   | `font-body`           |
| `font-size: 12px, weight 500` | `text-d3 font-medium` |
| `font-size: 12px, weight 400` | `text-d3`             |

#### Sizing / spacing

| Figma value                   | Token / approach                                             |
| ----------------------------- | ------------------------------------------------------------ |
| Track height `4px`            | `h-1`                                                        |
| Thumb `24px`                  | `size-6`                                                     |
| Thumb dot `8px`               | `size-2`                                                     |
| Hover ring `32px`             | `size-8` (centered with `-translate-x-1/2 -translate-y-1/2`) |
| Active ring `42px`            | `size-[42px]`                                                |
| Tooltip `border-radius: 4px`  | `rounded`                                                    |
| Track `border-radius: 1000px` | `rounded-full`                                               |

### What Figma uses vs what we build

| Figma approach                      | Component approach                                               |
| ----------------------------------- | ---------------------------------------------------------------- |
| Fixed `width: 176px` container      | `w-full` — fills its container                                   |
| Absolute positioning for everything | `relative` track + CSS `left: value%` for thumb/tooltip          |
| Separate CSS class per state        | Single component with `:hover`, `:focus-visible`, `:active` CSS  |
| Separate layer for filled track     | bits-ui `Slider.Range` covers `0 → value%`                       |
| Label bar glued to slider           | Separate optional props: `label`, `minLabel`, `maxLabel`, `icon` |

---

## Proposed component API

```ts
// src/lib/components/slider/index.ts

type SliderProps = {
	value?: number; // bindable, default 0
	min?: number; // default 0
	max?: number; // default 100
	step?: number; // default 1
	disabled?: boolean;
	label?: string; // bottom bar label
	minLabel?: string; // bottom bar min value text
	maxLabel?: string; // bottom bar max value text
	showTooltip?: boolean; // show floating tooltip, default true
	formatTooltip?: (value: number) => string; // e.g. (v) => `${v.toLocaleString()} USD`
	icon?: Snippet; // bottom bar airline icon slot
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};
```

### Sub-component structure

```
Slider (bits-ui Slider.Root)
├── Slider.Track
│   ├── Slider.Range          ← filled portion (bg-primary)
│   └── thumb wrapper
│       ├── ripple ring       ← shown on hover/focus/active
│       ├── Slider.Thumb      ← white circle (size-6)
│       └── thumb dot         ← blue dot (size-2, bg-primary)
├── tooltip                   ← floats above, left = value%
└── label bar (optional)
    ├── icon slot
    ├── label text
    ├── separator (·)
    ├── minLabel
    ├── separator (-)
    └── maxLabel
```

### tv() variant plan

```ts
const sliderTrackVariants = tv({
	base: 'relative w-full h-1 rounded-full bg-grey-200 cursor-pointer'
});

const sliderRangeVariants = tv({
	base: 'absolute h-full rounded-full bg-primary'
});

const sliderThumbVariants = tv({
	base: [
		'relative size-6 rounded-full bg-common-white shadow-md',
		'focus-visible:outline-none',
		// ripple pseudo-element via before:
		'before:absolute before:rounded-full before:bg-primary-faded/50',
		'before:opacity-0 before:transition-all',
		'hover:before:opacity-100 hover:before:size-8 hover:before:-inset-1',
		'focus-visible:before:opacity-100 focus-visible:before:size-8 focus-visible:before:-inset-1',
		'active:before:opacity-100 active:before:size-[42px] active:before:-inset-[9px]'
	].join(' ')
});

const sliderTooltipVariants = tv({
	base: 'absolute -top-8 -translate-x-1/2 px-1 py-0.5 rounded bg-grey-800/70 text-common-white text-d3 font-medium whitespace-nowrap pointer-events-none'
});

const sliderLabelVariants = tv({
	base: 'flex items-center gap-0.5 text-d3 text-grey-700 font-body mt-1'
});
```

---

## Checklist for implementation

- [ ] Use `bits-ui` `Slider` primitive (`Slider.Root`, `Slider.Track`, `Slider.Range`, `Slider.Thumb`)
- [ ] Tooltip position computed as `left: ((value - min) / (max - min)) * 100 + '%'`
- [ ] Ripple ring via `before:` pseudo-element on thumb (no extra DOM nodes needed)
- [ ] Label bar is optional — only rendered when `label` prop is provided
- [ ] `formatTooltip` defaults to `(v) => String(v)`
- [ ] All colors from design-system tokens (no hardcoded hex)
- [ ] `showTooltip: false` hides tooltip (e.g. for compact use)
- [ ] `disabled` state: greyed out track + thumb, no interactions
- [ ] Add `docs/components/slider.md` after component is built
- [ ] Add story with interactive value control in Storybook
- [ ] Add `slider.test.ts` testing `sliderThumbVariants`, `sliderTrackVariants`, etc.

---

## Figma raw output (reference only — do not use directly)

<details>
<summary>0%, Idle</summary>

```html
<div class="percentage0-stateidle">
	<!-- track: bg #DBDAD8, 176×4px, rounded-full -->
	<!-- filled: bg #0032A0, 0% width -->
	<!-- thumb: white circle 24px + inner blue dot 8px -->
	<!-- tooltip: "1,500 USD", black bg -->
	<!-- label: icon + "Label · Valor - Valor" -->
</div>
<style>
	.percentage0-stateidle {
		width: 176px;
		height: 64px;
		position: relative;
	}
	.mask {
		width: 176px;
		height: 4px;
		top: 42px;
		background: #dbdad8;
		border-radius: 1000px;
		position: absolute;
	}
	.rectangle {
		width: 23px;
		height: 8px;
		top: 40px;
		background: #0032a0;
		position: absolute;
	}
	.oval {
		width: 24px;
		height: 24px;
		top: 32px;
		background: white;
		border-radius: 9999px;
		box-shadow:
			0px 2px 4px -1px rgba(0, 0, 0, 0.12),
			0px 3px 15px rgba(0, 0, 0, 0.08);
		position: absolute;
	}
	.oval_01 {
		width: 8px;
		height: 8px;
		top: 40px;
		left: 8px;
		background: #0032a0;
		border-radius: 9999px;
		position: absolute;
	}
</style>
```

</details>

<details>
<summary>0%, Hover — adds 32px ripple ring around thumb</summary>

```html
<style>
	/* ripple (oval_01 inside .oval wrapper) */
	.oval_01 {
		width: 32px;
		height: 32px;
		opacity: 0.5;
		background: #9fc3ff;
		border-radius: 9999px;
	}
	/* .oval wrapper grows to 32×32 to contain the ripple */
	.oval {
		width: 32px;
		height: 32px;
		left: -4px;
		top: 28px;
		position: absolute;
	}
</style>
```

</details>

<details>
<summary>0%, Focus — identical to Hover</summary>

Same visual as hover state.

</details>

<details>
<summary>0%, Active — ripple grows to 42px</summary>

```html
<style>
	.oval_01 {
		width: 42px;
		height: 42px;
		opacity: 0.5;
		background: #9fc3ff;
	}
	.oval {
		width: 42px;
		height: 42px;
		left: -9px;
		top: 23px;
		position: absolute;
	}
</style>
```

</details>

<details>
<summary>50%, Idle — only the filled width changes</summary>

```html
<style>
	/* filled portion now covers 50% of 176px = 88px */
	.rectangle {
		width: 88px;
		height: 8px;
		background: #0032a0;
	}
	/* thumb moves to left: 76px (88px - 12px half-thumb) */
	.oval {
		left: 76px;
		top: 32px;
	}
	.oval_01 {
		left: 84px;
		top: 40px;
	} /* 76 + 8 */
</style>
```

</details>
