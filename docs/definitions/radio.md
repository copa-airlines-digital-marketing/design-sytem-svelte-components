# Radio

> **Status:** `done` — Component lives at `src/lib/components/radio/`. Story at `src/stories/radio.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma output)

### What it is

A radio button group — a set of options where only one can be selected at a time. Exported from Figma as a single "atoms" sheet showing ALL states overlaid; the second Figma block shows the full radio-with-label usage.

### Visual anatomy

```
[●] Label text
```

- Outer circle: 24px, `rounded-full`
- Inner dot: 8px, centered via `after:` pseudo-element — visible only when selected
- Label: optional text to the right, `14px / Suisse Int'l / regular`

### States extracted

| State        | Unselected                                | Selected                             |
| ------------ | ----------------------------------------- | ------------------------------------ |
| **Idle**     | white bg, `#999999` border                | primary bg, dark border, white dot   |
| **Hover**    | white bg, `#001A66` border                | primary bg, dark border (unchanged)  |
| **Focus**    | `#EFF5FF` bg, dark border, `#9FC3FF` ring | primary bg, dark border, ring        |
| **Active**   | white bg, `#9FC3FF` ring                  | white bg, ring (press transition)    |
| **Disabled** | `#EFEFEE` bg, `#CCCCCB` border            | `#EFEFEE` bg, `#CCCCCB` border + dot |

> **Figma export note:** The first code block shows all states overlaid in one component (Figma's "show all states" view). The individual visual for each state is derived by reading the per-state `<div>` layers.

### Token mapping

| Figma value             | Token                  | Usage                     |
| ----------------------- | ---------------------- | ------------------------- |
| `#999999` border        | `grey-500`             | Unselected idle border    |
| `#001A66` border        | `primary-ultradark`    | Hover/focus border        |
| `#EFF5FF` bg            | `background-lightblue` | Focus unselected bg       |
| `#9FC3FF` outline       | `primary-faded`        | Focus/active ring         |
| `#0032A0` bg            | `primary`              | Selected fill             |
| `#EFEFEE` bg            | `grey-100`             | Disabled fill             |
| `#CCCCCB` border/dot    | `grey-300`             | Disabled border/dot       |
| `white`                 | `common-white`         | Default bg + selected dot |
| `#333333` label text    | `grey-700`             | Label color               |
| `Suisse Int'l 14px/400` | `font-body text-b`     | Label typography          |

### What Figma uses vs what we build

| Figma approach                        | Component approach                                         |
| ------------------------------------- | ---------------------------------------------------------- |
| All states in one overlaid div        | Single component with CSS state selectors                  |
| Absolute-positioned circles           | `after:` pseudo-element for inner dot                      |
| Separate HTML for selected/unselected | `checked` variant from bits-ui snippet prop                |
| Fixed `24×24px` containers            | `size-6 rounded-full`                                      |
| Hover/focus via separate layers       | `group-hover:` / `group-focus-visible:` on child indicator |

---

## Component API

Two components are exported: `RadioGroup` (container) and `RadioItem` (each option).

```ts
// RadioGroup
type RadioGroupProps = {
	value?: string; // bindable — the selected item's value
	name?: string; // form name for hidden input
	disabled?: boolean; // disables all items
	class?: string | null;
	children: Snippet; // RadioItem elements
};

// RadioItem
type RadioItemProps = {
	value: string; // required — this item's value
	label?: string; // optional label text
	disabled?: boolean; // disables only this item
	class?: string | null;
};
```

### Usage

```svelte
<RadioGroup bind:value={selected}>
	<RadioItem value="economy" label="Economy" />
	<RadioItem value="business" label="Business" />
	<RadioItem value="first" label="First Class" />
</RadioGroup>
```
