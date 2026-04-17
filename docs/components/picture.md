# Picture (PictureSource)

A thin wrapper around the native `<source>` element for use inside a `<picture>` tag. Ties Copa's responsive breakpoint tokens to the `media` attribute so you don't have to remember pixel values.

**Source:** `src/lib/components/picture/`  
**Exports:** `PictureSource` (alias `Source`)

---

## Anatomy

```svelte
<picture>
	<PictureSource screen="lg" srcset="/image-large.jpg 1200w" />
	<PictureSource screen="md" srcset="/image-medium.jpg 800w" />
	<img src="/image-small.jpg" alt="Description" />
</picture>
```

The `<img>` tag is the fallback and must always be present as the last child of `<picture>`.

---

## Props

| Prop     | Type             | Default | Description                                            |
| -------- | ---------------- | ------- | ------------------------------------------------------ |
| `screen` | breakpoint token | —       | Maps to the corresponding `min-width` media query      |
| `srcset` | `string`         | —       | One or more image URLs with optional width descriptors |
| `type`   | `string`         | —       | MIME type (e.g., `'image/webp'`)                       |

All remaining `HTMLSourceAttributes` (`sizes`, `media`, etc.) are forwarded directly to `<source>`.

### `screen` breakpoint mapping

The `screen` prop accepts the same tokens defined in the Tailwind preset's `screens` config:

| Token | Media query         |
| ----- | ------------------- |
| `sm`  | `min-width: 640px`  |
| `md`  | `min-width: 768px`  |
| `lg`  | `min-width: 1024px` |
| `xl`  | `min-width: 1280px` |
| `2xl` | `min-width: 1536px` |

> Exact values depend on the `tailwind-presets/` configuration. Verify in `tailwind-presets/src/theme/screens/index.ts`.

---

## Examples

### Responsive image with two sources

```svelte
<picture>
	<PictureSource screen="md" srcset="/hero-desktop.jpg 1200w" type="image/jpeg" />
	<img src="/hero-mobile.jpg" alt="Copa Airlines hero image" class="w-full" />
</picture>
```

### WebP with JPEG fallback

```svelte
<picture>
	<PictureSource screen="md" srcset="/banner.webp" type="image/webp" />
	<PictureSource screen="md" srcset="/banner.jpg" type="image/jpeg" />
	<img src="/banner-mobile.jpg" alt="Promotional banner" />
</picture>
```

### Multiple widths in srcset

```svelte
<picture>
	<PictureSource
		screen="lg"
		srcset="/photo-800.jpg 800w, /photo-1200.jpg 1200w, /photo-1600.jpg 1600w"
	/>
	<img src="/photo-400.jpg" alt="Flight destination" />
</picture>
```

---

## Notes

- `PictureSource` only renders a `<source>` element — it has no visual output on its own.
- Always include an `<img>` fallback as the **last child** of `<picture>`. Browsers use it when no `<source>` matches.
- List sources from largest to smallest breakpoint — browsers pick the first matching `<source>`.
- Use `type="image/webp"` to offer WebP with a JPEG fallback for broader browser support.
