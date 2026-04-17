# Option

> **Status:** `done` — Components at `src/lib/components/option/`. Stories at `src/stories/option.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma export)

### What it is

Two components:

1. **`Option`** — the individual selectable row (label + optional left/right icons, CSS-driven states). Used inside `OptionList`.
2. **`OptionList`** — the floating container powered by `bits-ui ScrollArea`. Scrolls when items exceed the max height; shows an empty-state message when no results.

### Option item dimensions

| Axis                 | Values                                                   |
| -------------------- | -------------------------------------------------------- |
| `Property 1` (icons) | `label only` · `Left Icon` · `Right Icon` · `Both Icons` |
| `Property 2` (state) | `idle` · `hover` · `focus` · `disabled`                  |

### Option item state → visual mapping

| State      | Background                         | Ring/Outline                    |
| ---------- | ---------------------------------- | ------------------------------- |
| `idle`     | `common-white`                     | —                               |
| `hover`    | `background-lightblue` (`#EFF5FF`) | —                               |
| `focus`    | `background-lightblue`             | 2px inset `primary` (`#0032A0`) |
| `disabled` | `grey-100` (`#EFEFEE`)             | —                               |

All states are **CSS-driven** — no JS needed:

- `:hover` → `hover:bg-background-lightblue`
- `:focus-visible` → `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`
- `disabled` HTML attr → `disabled:bg-grey-100 disabled:cursor-not-allowed`

### OptionList container

| State               | Border                 | Shadow                         |
| ------------------- | ---------------------- | ------------------------------ |
| Normal (with items) | `grey-300` (`#CCCCCB`) | `0px 3px 5px rgba(0,0,0,0.17)` |
| Empty (no results)  | `grey-600` (`#666666`) | same                           |

**Scroll behaviour:** Uses `bits-ui ScrollArea`. When content exceeds `maxHeight` (default 324px), a custom scrollbar appears (7px thumb, `#C1C1C1` rounded).

### Token mapping

| Figma value          | Token                  | Usage                                     |
| -------------------- | ---------------------- | ----------------------------------------- |
| `#333333` text       | `grey-700`             | Option label text                         |
| `white` bg           | `common-white`         | Idle option background                    |
| `#EFF5FF` bg         | `background-lightblue` | Hover/focus option background             |
| `#EFEFEE` bg         | `grey-100`             | Disabled option background                |
| `#0032A0` outline    | `primary`              | Focus ring                                |
| `#AAAAAB` icon       | `grey-400`             | Icon color hint (overridable via snippet) |
| `#CCCCCB` border     | `grey-300`             | List container border                     |
| `#666666` border     | `grey-600`             | Empty-state list border                   |
| `14px` font          | `font-body text-b`     | Label (16px body)                         |
| `padding: 12px`      | `p-3`                  | Option item padding                       |
| `gap: 8px`           | `gap-2`                | Gap between icon/label                    |
| `border-radius: 4px` | `rounded`              | List container corners                    |

### Component API

```ts
// Individual option item
type OptionProps = {
	label: string;
	leftIcon?: Snippet; // optional 24×24 icon on the left
	rightIcon?: Snippet; // optional 24×24 icon on the right (checkmark for selected, etc.)
	disabled?: boolean;
	onclick?: () => void;
	class?: string | null;
};

// Scrollable container
type OptionListProps = {
	children: Snippet; // Option items
	empty?: boolean; // shows empty-state message when true
	emptyMessage?: string; // default: "Sin resultados."
	maxHeight?: number; // default 324 (px)
	class?: string | null;
};
```

### Files

| File                                           | Purpose                 |
| ---------------------------------------------- | ----------------------- |
| `src/lib/components/option/index.ts`           | `tv()` variants + types |
| `src/lib/components/option/option.svelte`      | Individual option item  |
| `src/lib/components/option/option-list.svelte` | ScrollArea container    |
| `src/stories/option.stories.ts`                | Storybook               |
| `src/lib/components/option/option.test.ts`     | Vitest unit tests       |
