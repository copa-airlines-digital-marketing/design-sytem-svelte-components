# HelperText

A small inline hint or error message shown below form inputs. Renders an info/error icon followed by a text label. All 8 design variants (`type × size × color`) are covered by a single component.

## Import

```ts
import { HelperText } from '$lib/components/helper-text';
```

## Props

| Prop    | Type                      | Default     | Description                                                            |
| ------- | ------------------------- | ----------- | ---------------------------------------------------------------------- |
| `text`  | `string`                  | required    | Label text to display                                                  |
| `type`  | `'regular' \| 'error'`    | `'regular'` | `regular` → grey info icon; `error` → red info icon                    |
| `size`  | `'default' \| 'small'`    | `'default'` | `default` → 14px; `small` → 12px                                       |
| `color` | `'default' \| 'inverted'` | `'default'` | `default` → `grey-600` text; `inverted` → white (for dark backgrounds) |
| `class` | `string \| null`          | —           | Extra classes on the root `<span>`                                     |

## Examples

```svelte
<!-- Info hint below an input -->
<HelperText text="Only letters and numbers are allowed" />

<!-- Error feedback after validation -->
<HelperText text="Email address is required" type="error" />

<!-- Compact layout -->
<HelperText text="Max 50 characters" size="small" />
<HelperText text="Invalid format" type="error" size="small" />

<!-- On a dark/coloured background -->
<HelperText text="Must be at least 8 characters" color="inverted" />
<HelperText text="Passwords do not match" type="error" color="inverted" />
```

## Variant matrix

| `type`    | `size`    | `color`    | Icon                 | Text                                  |
| --------- | --------- | ---------- | -------------------- | ------------------------------------- |
| `regular` | `default` | `default`  | grey `text-grey-400` | `font-body text-b text-grey-600`      |
| `regular` | `default` | `inverted` | grey                 | `font-body text-b text-common-white`  |
| `regular` | `small`   | `default`  | grey                 | `font-body text-d3 text-grey-600`     |
| `regular` | `small`   | `inverted` | grey                 | `font-body text-d3 text-common-white` |
| `error`   | `default` | `default`  | red `text-error`     | `font-body text-b text-grey-600`      |
| `error`   | `default` | `inverted` | red                  | `font-body text-b text-common-white`  |
| `error`   | `small`   | `default`  | red                  | `font-body text-d3 text-grey-600`     |
| `error`   | `small`   | `inverted` | red                  | `font-body text-d3 text-common-white` |
