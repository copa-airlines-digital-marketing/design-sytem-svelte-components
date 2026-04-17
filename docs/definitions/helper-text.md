# Helper Text

> **Status:** `done` — Component lives at `src/lib/components/helper-text/`. Story at `src/stories/helper-text.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma output)

### What it is

A small inline label that provides contextual guidance or error feedback below form fields. Always includes an info/error icon to the left of the text.

### Variants

The Figma exports all 8 combinations as separate layers (`Type × Size × Color`):

| Variant | Options                                                               |
| ------- | --------------------------------------------------------------------- |
| `type`  | `regular` (info icon, grey) · `error` (info icon, red)                |
| `size`  | `default` (14px) · `small` (12px)                                     |
| `color` | `default` (grey text) · `inverted` (white text, for dark backgrounds) |

### Visual anatomy

```
[● icon 12px] [Label text]
    4px gap
```

- **Icon**: 12×12px filled circle — `grey-400` for regular, `error` for error type
- **Text**: inline `<span>`, typography token per size variant
- **Gap**: `gap-1` (4px) between icon and text

### Token mapping

| Figma value         | Token               | Usage               |
| ------------------- | ------------------- | ------------------- |
| `#AAAAAB` icon      | `grey-400`          | Regular icon fill   |
| `#D52525` icon      | `error`             | Error icon fill     |
| `#666666` text      | `grey-600`          | Default text color  |
| `white` text        | `common-white`      | Inverted text color |
| `14px / 400 / 20px` | `font-body text-b`  | Default size        |
| `12px / 400 / 16px` | `font-body text-d3` | Small size          |

### What Figma uses vs what we build

| Figma approach                              | Component approach                              |
| ------------------------------------------- | ----------------------------------------------- |
| 8 separate absolute-positioned divs         | Single component with `tv()` variants           |
| Named SVG component `9. Icon/Info/Fill`     | Inline `<svg>` with circle + white "i" dot/stem |
| Separate frame for icon padding (`py: 2px`) | `items-center` alignment, icon is `shrink-0`    |
| `gap: 4px` between icon and text            | `gap-1`                                         |

---

## Component API

```ts
type HelperTextProps = {
	text: string; // required label string
	type?: 'regular' | 'error'; // default: 'regular'
	size?: 'default' | 'small'; // default: 'default'
	color?: 'default' | 'inverted'; // default: 'default'
	class?: string | null;
};
```

### Usage

```svelte
import {HelperText} from '$lib/components/helper-text';

<!-- Regular info hint -->
<HelperText text="Only letters and numbers allowed" />

<!-- Error feedback -->
<HelperText text="This field is required" type="error" />

<!-- Small variant (below compact inputs) -->
<HelperText text="Max 50 characters" size="small" />

<!-- On a dark background -->
<HelperText text="Password must be 8+ characters" color="inverted" />
```
