# Avatar

A composable avatar component built on top of [`bits-ui`'s `Avatar` primitive](https://bits-ui.com/docs/components/avatar). Renders a circular image with an automatic text fallback when the image fails to load.

**Source:** `src/lib/components/avatar/`  
**Exports:** `Avatar` (alias `Root`), `Image`, `Fallback`

---

## Anatomy

```svelte
<Avatar>
	<Image src="..." alt="..." />
	<Fallback>AB</Fallback>
</Avatar>
```

The three parts are always used together:

| Part       | Element                    | Role                                             |
| ---------- | -------------------------- | ------------------------------------------------ |
| `Avatar`   | `AvatarPrimitive.Root`     | Circular container, controls size and stroke     |
| `Image`    | `AvatarPrimitive.Image`    | The actual `<img>`, hidden while loading         |
| `Fallback` | `AvatarPrimitive.Fallback` | Shown while the image is loading or if it errors |

---

## Props

### `Avatar`

| Prop       | Type                                               | Default    | Description                                                          |
| ---------- | -------------------------------------------------- | ---------- | -------------------------------------------------------------------- |
| `size`     | `'tiny' \| 'petit' \| 'normal' \| 'big' \| 'huge'` | `'normal'` | Controls diameter and font size of the fallback                      |
| `stroke`   | `boolean`                                          | `true`     | Adds a `primary-ultralight` border ring around the avatar            |
| `delayMs`  | `number`                                           | `0`        | Milliseconds to wait before showing the fallback (passed to bits-ui) |
| `class`    | `string`                                           | —          | Extra Tailwind classes merged via `cn`                               |
| `customcn` | `(...inputs) => string`                            | —          | Override the `cn` merge function                                     |

All additional HTML attributes are forwarded to the underlying `AvatarPrimitive.Root`.

#### Size reference

| Value    | Diameter      |
| -------- | ------------- |
| `tiny`   | 2rem (32px)   |
| `petit`  | 3rem (48px)   |
| `normal` | 3.5rem (56px) |
| `big`    | 4.5rem (72px) |
| `huge`   | 6rem (96px)   |

### `Image`

| Prop       | Type                    | Default | Description                           |
| ---------- | ----------------------- | ------- | ------------------------------------- |
| `src`      | `string`                | —       | Image URL                             |
| `alt`      | `string`                | —       | Alt text (required for accessibility) |
| `class`    | `string`                | —       | Extra classes                         |
| `customcn` | `(...inputs) => string` | —       | Override `cn`                         |

All additional HTML attributes are forwarded to `AvatarPrimitive.Image`.

### `Fallback`

| Prop       | Type                    | Default | Description                             |
| ---------- | ----------------------- | ------- | --------------------------------------- |
| `class`    | `string`                | —       | Extra classes                           |
| `customcn` | `(...inputs) => string` | —       | Override `cn`                           |
| `children` | `Snippet`               | —       | Text or icon to display (e.g. initials) |

All additional HTML attributes are forwarded to `AvatarPrimitive.Fallback`.

---

## Examples

### Basic usage

```svelte
<script>
	import { Avatar, Image, Fallback } from '$lib/components/avatar';
</script>

<Avatar size="normal">
	<Image src="https://example.com/user.jpg" alt="Jane Doe" />
	<Fallback>JD</Fallback>
</Avatar>
```

### Without stroke ring

```svelte
<Avatar size="big" stroke={false}>
	<Image src="/avatar.png" alt="User" />
	<Fallback>U</Fallback>
</Avatar>
```

### All sizes

```svelte
{#each ['tiny', 'petit', 'normal', 'big', 'huge'] as size}
	<Avatar {size}>
		<Image src="/avatar.png" alt="User" />
		<Fallback>AB</Fallback>
	</Avatar>
{/each}
```

---

## Notes

- The `Fallback` background defaults to `bg-primary-ultralight` with `text-primary`.
- `delayMs` prevents a flash of the fallback on fast connections — set it to `600` or more for a smooth UX.
- All three sub-components accept a `customcn` prop to replace the global `cn` merge function, useful for overriding tokens in isolation.
