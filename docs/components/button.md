# Button

A styled wrapper around [`bits-ui`'s `Button` primitive](https://bits-ui.com/docs/components/button). Exposes semantic variants and sizes via `tailwind-variants`.

**Source:** `src/lib/components/button/`  
**Exports:** `Button`, `buttonVariants`, `ButtonProps`

---

## Anatomy

```svelte
<Button variant="solid-primary-main" size="default">Book now</Button>
```

Renders a `<button type="button">` by default. All native `HTMLButtonAttributes` are forwarded.

---

## Props

| Prop       | Type                    | Default                | Description                            |
| ---------- | ----------------------- | ---------------------- | -------------------------------------- |
| `variant`  | see below               | `'solid-primary-main'` | Visual style of the button             |
| `size`     | see below               | `'default'`            | Padding, font size, and icon size      |
| `class`    | `string \| null`        | —                      | Extra Tailwind classes merged via `cn` |
| `customcn` | `(...inputs) => string` | —                      | Override the `cn` merge function       |
| `children` | `Snippet`               | —                      | Button label / content                 |

All remaining props (`disabled`, `onclick`, `aria-*`, etc.) are forwarded to the underlying button element.

---

## Variants

### `variant`

| Value                      | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| `solid-primary-main`       | Filled with `primary` color, white text — primary CTA                  |
| `solid-primary-light`      | Filled with `primary-light` — secondary CTA                            |
| `outline-primary-main`     | Transparent with `primary` border and text                             |
| `outline-invert`           | White border and text — for use on dark/colored backgrounds            |
| `transparent-primary-main` | No background, `primary` text, hover fills with `background-lightblue` |
| `link`                     | Inline link style, `primary` text with underline on interaction        |
| `link-invert`              | Inline link style, `grey-50` text — for dark backgrounds               |

### `size`

| Value         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `slim`        | Compact — `px-4 py-2`, small text (`text-d3`), 32px max icon |
| `default`     | Standard — `px-4 py-3`, `text-d1`                            |
| `large`       | Spacious — `px-6 py-4`, `text-b`                             |
| `giant`       | Extra large — `px-8 py-6`, `text-2xl`                        |
| `fancy-big`   | Standard padding with larger icon space                      |
| `fancy-small` | Compact padding with medium icon space                       |
| `link`        | No background or border, responsive text size                |

---

## Examples

### Primary CTA

```svelte
<Button>Book now</Button>
```

### Outline variant

```svelte
<Button variant="outline-primary-main">Learn more</Button>
```

### Disabled state

```svelte
<Button disabled>Unavailable</Button>
```

### Large with custom class

```svelte
<Button size="large" class="w-full">Continue</Button>
```

### Link style

```svelte
<Button variant="link" size="link">View details</Button>
```

### Invert (on dark background)

```svelte
<div class="bg-primary p-6">
	<Button variant="outline-invert">See flights</Button>
</div>
```

---

## Using `buttonVariants` directly

`buttonVariants` is exported so you can apply button styles to other elements (e.g., an `<a>` tag):

```svelte
<script>
	import { buttonVariants } from '$lib/components/button';
	import { cn } from '$lib';
</script>

<a href="/flights" class={cn(buttonVariants({ variant: 'solid-primary-main', size: 'default' }))}>
	Book now
</a>
```

---

## Notes

- The button always renders with `type="button"` unless you pass `type="submit"` explicitly.
- The base style includes `outline-offset-4` focus rings and `select-none` to prevent text selection.
- `disabled` state applies `cursor-not-allowed`, removes the outline, and greys out background and text.
