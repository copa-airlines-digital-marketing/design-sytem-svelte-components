# Icon

A collection of SVG icon components organized into three categories: **regular**, **filled**, and **social**. All icons are thin wrappers around inline SVGs and accept standard HTML attributes.

**Source:** `src/lib/components/icon/`  
**Exports:** `Carrot`, `Globe`, `Phone`, `Check`, `Close`, `NoIcon`, `Regular`, `Filled`, `Social`

---

## Available icons

### Top-level (standalone exports)

| Export   | File             | Notes                                       |
| -------- | ---------------- | ------------------------------------------- |
| `Carrot` | `carrot.svelte`  | Chevron/arrow — supports `direction` prop   |
| `Globe`  | `globe.svelte`   | Globe / world icon                          |
| `Phone`  | `phone.svelte`   | Phone icon                                  |
| `NoIcon` | `no-icon.svelte` | Empty placeholder — renders nothing visible |

### `Regular` namespace

| Export            | Description       |
| ----------------- | ----------------- |
| `Regular.Check`   | Checkmark         |
| `Regular.Close`   | × close / dismiss |
| `Regular.Walk`    | Walking person    |
| `Regular.Camera`  | Camera            |
| `Regular.History` | Clock / history   |

Also available as direct named exports: `Check`, `Close`.

### `Filled` namespace

| Export          | Description        |
| --------------- | ------------------ |
| `Filled.Time`   | Filled clock icon  |
| `Filled.Ticket` | Filled ticket icon |

### `Social` namespace

| Export             | Description      |
| ------------------ | ---------------- |
| `Social.Email`     | Email / envelope |
| `Social.Facebook`  | Facebook logo    |
| `Social.Instagram` | Instagram logo   |
| `Social.Tiktok`    | TikTok logo      |
| `Social.X`         | X (Twitter) logo |
| `Social.Youtube`   | YouTube logo     |
| `Social.Whatsapp`  | WhatsApp logo    |

---

## Props

### All icons — base props (`SingularIcon`)

| Prop       | Type                    | Default | Description            |
| ---------- | ----------------------- | ------- | ---------------------- |
| `class`    | `string`                | —       | Extra Tailwind classes |
| `customcn` | `(...inputs) => string` | —       | Override `cn`          |

All remaining `HTMLAttributes<HTMLElement>` are forwarded.

### `Carrot` — directional icon (`IconWithDirection`)

| Prop        | Type                                  | Default  | Description             |
| ----------- | ------------------------------------- | -------- | ----------------------- |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'down'` | Rotation of the chevron |
| `class`     | `string`                              | —        | Extra classes           |
| `customcn`  | `(...inputs) => string`               | —        | Override `cn`           |

---

## Examples

### Basic icon

```svelte
<script>
	import { Globe, Phone } from '$lib/components/icon';
</script>

<Globe />
<Phone />
```

### Carrot with direction

```svelte
<script>
	import { Carrot } from '$lib/components/icon';
</script>

<Carrot direction="right" class="text-primary" />
<Carrot direction="up" />
```

### Using namespaced icons

```svelte
<script>
	import { Regular, Filled, Social } from '$lib/components/icon';
</script>

<Regular.Check class="text-system-success" />
<Regular.Close />
<Filled.Ticket />
<Social.Whatsapp />
```

### Inside a `Pill`

```svelte
<script>
	import { Pill, Text, Icon as PillIcon } from '$lib/components/pill';
	import { Check } from '$lib/components/icon';
</script>

<Pill>
	<PillIcon side="left"><Check /></PillIcon>
	<Text>Confirmed</Text>
</Pill>
```

### Sizing

Icons inherit the current `font-size` / `currentColor` from their parent. Use Tailwind's `size-*`, `w-*`, `h-*` utilities or `text-*` color utilities on the icon component:

```svelte
<Globe class="size-6 text-primary" />
<Phone class="size-8 text-grey-600" />
```

---

## Notes

- Icons do not have a built-in `size` prop — control dimensions with Tailwind utility classes.
- SVGs use `fill-current` or `stroke-current` so the color inherits from `color` / `text-*` classes on the element or its parent.
- `NoIcon` is a safe empty placeholder to use when an icon slot is conditionally empty.
