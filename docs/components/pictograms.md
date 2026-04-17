# Pictograms

Larger, illustrative SVG components used to represent concepts or categories — distinct from functional icons. All pictograms use Copa's brand color palette.

**Source:** `src/lib/components/pictograms/`  
**Exports:** `AnunciosImportantes`, `CheckIn`, `Conexion`, `Tiquetes`

---

## Available pictograms

| Export                | Description                         | Namespace              |
| --------------------- | ----------------------------------- | ---------------------- |
| `AnunciosImportantes` | Important announcements / megaphone | Top-level              |
| `CheckIn`             | Check-in / boarding                 | Top-level              |
| `Conexion`            | Connection / layover                | Top-level + `Tiquetes` |

`Tiquetes` is a namespace object: `{ Conexion }` — groups ticket-related pictograms.

---

## Props (`Pictogram`)

| Prop       | Type                                            | Default | Description            |
| ---------- | ----------------------------------------------- | ------- | ---------------------- |
| `style`    | `'background' \| 'transparent' \| 'monochrome'` | —       | Color treatment        |
| `class`    | `string`                                        | —       | Extra Tailwind classes |
| `customcn` | `(...inputs) => string`                         | —       | Override `cn`          |

All remaining `HTMLAttributes<HTMLElement>` are forwarded.

### `style` variant reference

| Value         | Fill color      |
| ------------- | --------------- |
| `background`  | `fill-primary`  |
| `transparent` | `fill-primary`  |
| `monochrome`  | `fill-grey-600` |

> **Note:** `background` and `transparent` currently produce the same `fill-primary` output. The distinction is reserved for future multi-layer pictogram support where the background layer treatment may differ.

---

## Examples

### Default usage

```svelte
<script>
	import { AnunciosImportantes, CheckIn, Conexion } from '$lib/components/pictograms';
</script>

<AnunciosImportantes />
<CheckIn />
<Conexion />
```

### Monochrome treatment

```svelte
<AnunciosImportantes style="monochrome" />
```

### Custom size

Pictograms are SVGs — control their size with Tailwind classes:

```svelte
<CheckIn class="size-24" />
<Conexion class="w-32 h-auto" />
```

### Using the `Tiquetes` namespace

```svelte
<script>
	import { Tiquetes } from '$lib/components/pictograms';
</script>

<Tiquetes.Conexion />
```

---

## Notes

- Pictograms are decorative illustrations, not functional icons. Do not use them inside buttons or interactive elements.
- Always provide surrounding context (e.g., a heading or caption) so screen readers understand the meaning — pictograms do not carry an `alt` attribute by default.
- For functional icons (checkmark, close, carrot, etc.) use the [`Icon`](./icon.md) component family instead.
