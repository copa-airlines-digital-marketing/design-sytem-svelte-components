# Informative Box

A card-like component that displays a visual element (icon or image), a title, and a description. Supports horizontal and vertical orientations and left/center/right alignment. Multiple boxes are typically displayed inside an `InformativeBoxContainer` which handles responsive grid layout.

**Source:** `src/lib/components/boxes/informative/`  
**Exports:** `InformativeBoxContainer` (alias `Container`), `InformativeBox` (alias `Box`), `InformativeBoxIcon` (alias `Icon`), `InformativeBoxImage` (alias `Image`), `InformativeBoxTitle` (alias `Title`), `InformativeBoxDescription` (alias `Description`)

---

## Anatomy

```svelte
<InformativeBoxContainer>
	<InformativeBox alignment="left" orientation="vertical">
		<InformativeBoxIcon size="normal" />
		<InformativeBoxTitle>Fast check-in</InformativeBoxTitle>
		<InformativeBoxDescription>
			Check in online up to 24 hours before your flight.
		</InformativeBoxDescription>
	</InformativeBox>
</InformativeBoxContainer>
```

The layout is driven by CSS grid areas:

| Area          | Rendered by                                   |
| ------------- | --------------------------------------------- |
| `head`        | `InformativeBoxIcon` or `InformativeBoxImage` |
| `title`       | `InformativeBoxTitle`                         |
| `description` | `InformativeBoxDescription`                   |

---

## Parts

### `InformativeBoxContainer`

A responsive grid wrapper. Lays out children using `grid-cols-[repeat(auto-fit,minmax(268px,1fr))]` with a `gap-6` between boxes.

| Prop       | Type                    | Default | Description   |
| ---------- | ----------------------- | ------- | ------------- |
| `class`    | `string`                | —       | Extra classes |
| `customcn` | `(...inputs) => string` | —       | Override `cn` |

All remaining `HTMLAttributes<HTMLDivElement>` are forwarded.

---

### `InformativeBox`

The card itself. Renders a `<div>` with a rounded border and internal grid areas.

| Prop          | Type                            | Default      | Description                                                                    |
| ------------- | ------------------------------- | ------------ | ------------------------------------------------------------------------------ |
| `orientation` | `'horizontal' \| 'vertical'`    | `'vertical'` | Stacks the head above content (vertical) or places it to the left (horizontal) |
| `alignment`   | `'left' \| 'center' \| 'right'` | `'left'`     | Aligns all content within the box                                              |
| `class`       | `string`                        | —            | Extra classes                                                                  |
| `customcn`    | `(...inputs) => string`         | —            | Override `cn`                                                                  |

#### Orientation reference

| Value        | Grid template areas                                                       |
| ------------ | ------------------------------------------------------------------------- |
| `vertical`   | `'head' / 'title' / 'description'` — single column, stacked               |
| `horizontal` | `'head title' / 'head description'` — icon on the left, text on the right |

#### Minimum widths

| Orientation  | `min-w`             |
| ------------ | ------------------- |
| `vertical`   | `min-w-67` (268px)  |
| `horizontal` | `min-w-106` (424px) |

---

### `InformativeBoxIcon`

A `<span>` placed in the `[head]` grid area. Use as a slot for an SVG icon.

| Prop       | Type                                    | Default | Description                    |
| ---------- | --------------------------------------- | ------- | ------------------------------ |
| `size`     | `'tiny' \| 'normal' \| 'big' \| 'huge'` | —       | Sets `size-*` (width + height) |
| `class`    | `string`                                | —       | Extra classes                  |
| `customcn` | `(...inputs) => string`                 | —       | Override `cn`                  |

#### Size reference

| Value    | Dimensions    |
| -------- | ------------- |
| `tiny`   | 2.5rem (40px) |
| `normal` | 3.5rem (56px) |
| `big`    | 5rem (80px)   |
| `huge`   | 6rem (96px)   |

---

### `InformativeBoxImage`

An `<img>` placed in the `[head]` grid area. Use instead of `InformativeBoxIcon` when the visual is a photo or illustration.

| Prop     | Type              | Default | Description               |
| -------- | ----------------- | ------- | ------------------------- |
| `aspect` | `'16:9' \| '1:1'` | —       | Aspect ratio of the image |
| `size`   | `'big' \| 'huge'` | —       | Sets `size-*`             |
| `class`  | `string`          | —       | Extra classes             |

All standard `HTMLImageAttributes` (`src`, `alt`, etc.) are forwarded.

---

### `InformativeBoxTitle`

A `<h3>` placed in the `[title]` grid area.

| Prop    | Type                   | Default    | Description                                          |
| ------- | ---------------------- | ---------- | ---------------------------------------------------- |
| `theme` | `'normal' \| 'invert'` | `'normal'` | `normal` = `text-primary`; `invert` = `text-grey-50` |
| `class` | `string`               | —          | Extra classes                                        |

---

### `InformativeBoxDescription`

A `<p>` placed in the `[description]` grid area.

| Prop    | Type                    | Default    | Description                                           |
| ------- | ----------------------- | ---------- | ----------------------------------------------------- |
| `theme` | `'normal' \| 'invert'`  | `'normal'` | `normal` = `text-grey-600`; `invert` = `text-grey-50` |
| `tag`   | any inline text element | `'p'`      | HTML element to render                                |
| `class` | `string`                | —          | Extra classes                                         |

---

## Examples

### Vertical box (default)

```svelte
<InformativeBoxContainer>
	<InformativeBox>
		<InformativeBoxIcon size="normal">
			<Globe />
		</InformativeBoxIcon>
		<InformativeBoxTitle>Global network</InformativeBoxTitle>
		<InformativeBoxDescription>
			Fly to over 80 destinations in the Americas.
		</InformativeBoxDescription>
	</InformativeBox>
</InformativeBoxContainer>
```

### Horizontal box

```svelte
<InformativeBox orientation="horizontal" alignment="left">
	<InformativeBoxIcon size="big"><CheckIn /></InformativeBoxIcon>
	<InformativeBoxTitle>Online check-in</InformativeBoxTitle>
	<InformativeBoxDescription>Available 24h before departure.</InformativeBoxDescription>
</InformativeBox>
```

### Center-aligned

```svelte
<InformativeBox alignment="center">
	<InformativeBoxIcon size="huge"><AnunciosImportantes /></InformativeBoxIcon>
	<InformativeBoxTitle>Important notice</InformativeBoxTitle>
	<InformativeBoxDescription>Please read before your flight.</InformativeBoxDescription>
</InformativeBox>
```

### Dark background (invert theme)

```svelte
<div class="bg-primary p-8">
	<InformativeBox>
		<InformativeBoxIcon size="normal" />
		<InformativeBoxTitle theme="invert">Lounge access</InformativeBoxTitle>
		<InformativeBoxDescription theme="invert">
			Exclusive for ConnectMiles Presidential members.
		</InformativeBoxDescription>
	</InformativeBox>
</div>
```

### With image instead of icon

```svelte
<InformativeBox>
	<InformativeBoxImage src="/destination.jpg" alt="Cartagena" aspect="16:9" size="big" />
	<InformativeBoxTitle>Cartagena</InformativeBoxTitle>
	<InformativeBoxDescription>Flights from $180</InformativeBoxDescription>
</InformativeBox>
```

---

## Notes

- `InformativeBoxIcon` renders as a `<span>` — place any SVG icon component inside it as children.
- `InformativeBoxImage` renders as an `<img>` — pass `src` and `alt` directly as props.
- The card has `max-h-64` by default; override with `class` if your content is taller.
- `InformativeBoxContainer` automatically creates a responsive multi-column layout — you don't need to add a grid wrapper yourself.
