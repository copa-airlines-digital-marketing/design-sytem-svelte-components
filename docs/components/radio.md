# Radio

A radio button group built on `bits-ui`. Allows selecting exactly one option from a set, with full keyboard navigation and ARIA semantics.

## Import

```ts
import { RadioGroup, RadioItem } from '$lib/components/radio';
```

## Props

### `RadioGroup`

| Prop       | Type             | Default | Description                                                  |
| ---------- | ---------------- | ------- | ------------------------------------------------------------ |
| `value`    | `string`         | `''`    | Bindable — currently selected item value                     |
| `name`     | `string`         | —       | Form field name (renders a hidden input for form submission) |
| `disabled` | `boolean`        | `false` | Disables all items in the group                              |
| `class`    | `string \| null` | —       | Extra classes on the wrapper                                 |

### `RadioItem`

| Prop       | Type             | Default  | Description                                 |
| ---------- | ---------------- | -------- | ------------------------------------------- |
| `value`    | `string`         | required | The value this option represents            |
| `label`    | `string`         | —        | Text label shown to the right of the circle |
| `disabled` | `boolean`        | `false`  | Disables only this item                     |
| `class`    | `string \| null` | —        | Extra classes on the item button            |

## Examples

```svelte
<!-- Basic group -->
<RadioGroup bind:value={cabin}>
	<RadioItem value="economy" label="Economy" />
	<RadioItem value="business" label="Business" />
	<RadioItem value="first" label="First Class" />
</RadioGroup>

<!-- Horizontal layout -->
<RadioGroup bind:value={cabin} class="flex-row gap-6">
	<RadioItem value="economy" label="Economy" />
	<RadioItem value="business" label="Business" />
</RadioGroup>

<!-- One item disabled -->
<RadioGroup bind:value={cabin}>
	<RadioItem value="economy" label="Economy" />
	<RadioItem value="first" label="First Class (sold out)" disabled />
</RadioGroup>

<!-- Entire group disabled (e.g. read-only review step) -->
<RadioGroup bind:value={cabin} disabled>
	<RadioItem value="economy" label="Economy" />
	<RadioItem value="business" label="Business" />
</RadioGroup>

<!-- No labels (icon or custom layout) -->
<RadioGroup bind:value={size}>
	<RadioItem value="s" />
	<RadioItem value="m" />
	<RadioItem value="l" />
</RadioGroup>
```

## States

| State    | Unselected                         | Selected                          |
| -------- | ---------------------------------- | --------------------------------- |
| Idle     | White circle, grey border          | Primary blue fill + white 8px dot |
| Hover    | White, dark border                 | Primary fill, dark border         |
| Focus    | Light-blue fill, dark border, ring | Primary fill, ring                |
| Disabled | Grey fill, light border            | Grey fill, grey dot               |
