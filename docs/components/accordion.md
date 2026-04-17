# Accordion

A composable accordion (disclosure) component built on top of [`bits-ui`'s `Accordion` primitive](https://bits-ui.com/docs/components/accordion). Supports a single open item at a time (controlled by the primitive's `type="single"` default).

**Source:** `src/lib/components/input-dropdowns/accordion/`  
**Exports:** `AccordionRoot`, `AccordionItem`, `AccordionHeader`, `AccordionContent`, `AccordionTrigger`, `AccordionTitle`, `AccordionLabel`, `AccordionIcon`, `AccordionCTA`

Also exported without the `Accordion` prefix as `Root`, `Item`, `Header`, `Content`, `Trigger`, `Title`, `Label`, `Icon`, `CTA`.

---

## Anatomy

```svelte
<AccordionRoot>
	<AccordionItem value="item-1">
		<AccordionHeader>
			<AccordionTrigger>
				<AccordionTitle>Title text</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>Content goes here.</AccordionContent>
	</AccordionItem>
</AccordionRoot>
```

---

## Parts

### `AccordionRoot`

The outermost wrapper. Renders a `bits-ui` `Accordion.Root` with `type="single"`.

| Prop       | Type                    | Default | Description                                 |
| ---------- | ----------------------- | ------- | ------------------------------------------- |
| `class`    | `string`                | —       | Extra classes. Default spacing: `space-y-2` |
| `customcn` | `(...inputs) => string` | —       | Override `cn`                               |

### `AccordionItem`

One collapsible section. Must have a unique `value`.

| Prop       | Type                    | Default | Description                    |
| ---------- | ----------------------- | ------- | ------------------------------ |
| `value`    | `string`                | `''`    | Unique identifier for the item |
| `class`    | `string`                | —       | Extra classes                  |
| `customcn` | `(...inputs) => string` | —       | Override `cn`                  |

All remaining `AccordionPrimitive.ItemProps` are forwarded.

### `AccordionHeader`

Wraps the trigger in an appropriate heading element (provided by the primitive).

| Prop    | Type     | Default | Description   |
| ------- | -------- | ------- | ------------- |
| `class` | `string` | —       | Extra classes |

### `AccordionTrigger`

The clickable row. Renders as a 5-column grid:

```
[icon] [title] [label] [cta] [carrot]
```

A `Carrot` icon pointing down is always appended at the end.

| Prop                 | Type                    | Default | Description                                 |
| -------------------- | ----------------------- | ------- | ------------------------------------------- |
| `separator-position` | `'top' \| 'bottom'`     | `'top'` | Where the `border-grey-200` divider appears |
| `class`              | `string`                | —       | Extra classes                               |
| `customcn`           | `(...inputs) => string` | —       | Override `cn`                               |

All remaining `AccordionPrimitive.TriggerProps` are forwarded.

### `AccordionContent`

The collapsible body. Animated open/close.

| Prop       | Type                    | Default | Description                           |
| ---------- | ----------------------- | ------- | ------------------------------------- |
| `class`    | `string`                | —       | Extra classes. Default padding: `p-6` |
| `customcn` | `(...inputs) => string` | —       | Override `cn`                         |

All remaining `AccordionPrimitive.ContentProps` are forwarded.

### `AccordionTitle`

Renders the main label text in the `[title]` grid area.

| Prop    | Type     | Default | Description   |
| ------- | -------- | ------- | ------------- |
| `class` | `string` | —       | Extra classes |

### `AccordionLabel`

Optional secondary text in the `[label]` grid area (right of title, left-aligned within its slot).

| Prop    | Type     | Default | Description   |
| ------- | -------- | ------- | ------------- |
| `class` | `string` | —       | Extra classes |

### `AccordionIcon`

Optional icon in the `[icon]` grid area (leftmost slot).

| Prop    | Type     | Default | Description   |
| ------- | -------- | ------- | ------------- |
| `class` | `string` | —       | Extra classes |

### `AccordionCTA`

Optional call-to-action element in the `[cta]` grid area (right of label, left of the carrot).

| Prop    | Type     | Default | Description   |
| ------- | -------- | ------- | ------------- |
| `class` | `string` | —       | Extra classes |

---

## Examples

### Basic accordion

```svelte
<script>
	import {
		AccordionRoot,
		AccordionItem,
		AccordionHeader,
		AccordionContent,
		AccordionTrigger,
		AccordionTitle,
		AccordionIcon
	} from '$lib/components/input-dropdowns/accordion';
</script>

<AccordionRoot>
	<AccordionItem value="faq-1">
		<AccordionHeader>
			<AccordionTrigger>
				<AccordionTitle>What documents do I need?</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>
			You will need a valid passport and your booking confirmation.
		</AccordionContent>
	</AccordionItem>

	<AccordionItem value="faq-2">
		<AccordionHeader>
			<AccordionTrigger>
				<AccordionTitle>Can I change my flight?</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>Yes, changes are allowed up to 24 hours before departure.</AccordionContent>
	</AccordionItem>
</AccordionRoot>
```

### With label and CTA

```svelte
<AccordionTrigger>
	<AccordionIcon><PlaneIcon /></AccordionIcon>
	<AccordionTitle>Flight CM401</AccordionTitle>
	<AccordionLabel>Panama – Bogotá</AccordionLabel>
	<AccordionCTA><Button size="slim">Select</Button></AccordionCTA>
</AccordionTrigger>
```

### Separator at the bottom

```svelte
<AccordionTrigger separator-position="bottom">
	<AccordionTitle>Details</AccordionTitle>
</AccordionTrigger>
```

---

## Notes

- `AccordionRoot` defaults to `type="single"` (only one item open at a time). This is not currently configurable — all items collapse when another is opened.
- The `AccordionContent` uses `forceMount` internally, meaning the content DOM is always present but hidden via CSS transitions — this is good for SEO and accessibility.
- The `Carrot` icon in `AccordionTrigger` is always rendered automatically — do not add one manually.
- Grid area names (`icon`, `title`, `label`, `cta`, `carrot`) are fixed. Use the matching sub-components to populate each slot.
