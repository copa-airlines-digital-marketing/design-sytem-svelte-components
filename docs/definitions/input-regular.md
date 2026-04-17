# Input Regular

> **Status:** `done` — Component at `src/lib/components/input/`. Story at `src/stories/input.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma export)

### What it is

The base text input field — foundation for all form controls (text, email, password, and later select/autocomplete). The Figma exports ALL 20 state combinations (`State × Input × Mandatory`) as separate absolute-positioned layers, but they all resolve to a single component with CSS-driven states.

### Dimensions in Figma

| Axis        | Values                                               |
| ----------- | ---------------------------------------------------- |
| `State`     | `Idle` · `Hover` · `Focus` · `Error` · `Disabled`    |
| `Input`     | `False` (showing placeholder) · `True` (value typed) |
| `Mandatory` | `True` (shows `*`) · `False`                         |

### Visual anatomy

```
[Label text] [*]                ← optional label + mandatory asterisk
┌──────────────────────────┐
│ [left icon] [input] [→]  │   ← field box
└──────────────────────────┘
[ℹ] Helper text             ← optional helper text (HelperText component)
```

### Field box state → border mapping

| State      | Border color                | Background             |
| ---------- | --------------------------- | ---------------------- |
| `idle`     | `#CCCCCB` → `grey-300`      | white                  |
| `hover`    | `#0E68FF` → `primary-light` | white                  |
| `focus`    | `#0032A0` → `primary`       | white                  |
| `error`    | `#D52525` → `system-error`  | white                  |
| `disabled` | `#666666` → `grey-600`      | `#EFEFEE` → `grey-100` |

### Token mapping

| Figma value          | Token               | Usage                            |
| -------------------- | ------------------- | -------------------------------- |
| `#333333` text       | `grey-700`          | Label + input value text         |
| `#999999` text       | `grey-500`          | Placeholder text                 |
| `#666666` text       | `grey-600`          | Helper text, disabled icon       |
| `#D52525` asterisk   | `system-error`      | Mandatory `*`, error icon/border |
| `14px / 400 / 20px`  | `font-body text-d1` | Label, mandatory, helper text    |
| `16px / 400 / 24px`  | `font-body text-b`  | Input value / placeholder        |
| `padding: 12px`      | `p-3`               | Field box inner padding          |
| `gap: 8px`           | `gap-2`             | Between icons and input          |
| `border-radius: 4px` | `rounded`           | Field box corners                |

### CSS-driven state approach

> "hay que tratar de no hacer que esos cambios se fuercen con js si no con html y css hasta donde se pueda"

| State    | CSS mechanism                                                                              |
| -------- | ------------------------------------------------------------------------------------------ |
| Hover    | `:hover` on field box div                                                                  |
| Focus    | `:focus-within` on field box div (triggers when native `<input>` is focused)               |
| Disabled | HTML `disabled` attr → `disabled:` pseudo-class on input + `disabled` variant on field box |
| Error    | `error` boolean prop (CSS cannot detect form validation state automatically)               |

The `hover:` and `focus-within:` modifiers change the border without any JS. Only `error` requires a prop.

### Files

| File                                     | Purpose                  |
| ---------------------------------------- | ------------------------ |
| `src/lib/components/input/index.ts`      | `tv()` variants + types  |
| `src/lib/components/input/input.svelte`  | Component implementation |
| `src/stories/input.stories.ts`           | Storybook                |
| `src/lib/components/input/input.test.ts` | Vitest unit tests        |

### Component API

```ts
type InputProps = {
	value?: string; // bindable
	placeholder?: string;
	label?: string; // upper label text
	mandatory?: boolean; // shows red asterisk next to label
	helperText?: string; // text below the field (uses HelperText component)
	type?: string; // 'text' | 'email' | 'password' | 'number' | etc.
	error?: boolean; // switches border + helper icon to error-red
	disabled?: boolean;
	leftIcon?: Snippet; // optional 24×24 icon slot
	rightIcon?: Snippet; // optional 24×24 icon slot (chevron for select)
	id?: string;
	name?: string;
	autocomplete?: string;
	class?: string | null;
};
```

---

<details>
<summary>Raw Figma output (collapsed)</summary>

See original file before formatting for the full 3200-line Figma export.

</details>
