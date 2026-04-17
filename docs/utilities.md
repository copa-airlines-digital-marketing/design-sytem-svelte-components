# Utilities

Shared helper functions and configured instances exported from `src/lib/index.ts`. These are the building blocks used internally by every component — and available to consumers for custom compositions.

**Source:** `src/lib/index.ts`  
**Exports:** `cn`, `tv` (alias `tailwindVariants`), `tm` (alias `tailwindMerge`), `flyAndScale`, `styleToString`

---

## `cn` — class merge helper

```ts
import { cn } from '$lib';

cn(...inputs: Array<ClassValue | ClassNameValue | null | undefined>): string
```

A pre-configured merge function that combines [`clsx`](https://github.com/lukeed/clsx) (for conditional logic) with a custom [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) instance that knows about Copa's custom color, spacing, font, and text tokens.

Use it whenever you need to merge Tailwind classes — especially when combining a component's default classes with consumer-provided `class` overrides.

### Why not plain `tailwind-merge`?

Copa uses custom tokens like `text-primary`, `bg-background-paper`, `gap-grid-gutter`, etc. Plain `tailwind-merge` doesn't know about these and may incorrectly drop them when merging. `cn` uses the extended config (`cmTWMergeConfig`) that registers all custom tokens.

### Custom tokens recognized

**Colors:** `primary`, `primary-light`, `primary-dark`, `primary-ultradark`, `primary-ultralight`, `primary-faded`, `secondary`, `secondary-faded`, `tertiary`, `background-lightblue`, `background-paper`, `alternative-*`, `system-warning`, `system-warning-faded`, `system-error`, `system-error-faded`, `system-success`, `system-success-faded`, `grey-800` through `grey-50`, `common-black`, `common-white`, `status-*`

**Spacing:** `gutter`, `minimal`, `tiny`, `petit`, `normal`, `roomy`, `spacious`, `big`, `huge`

**Font families:** `gilroy`, `suisse`, `heading`, `body`

**Text sizes:** `d3`, `d2`, `d1`, `b`, `u1`–`u6`

### Examples

```ts
// Conditional class
cn('base-class', isActive && 'bg-primary', 'text-white');

// Merge with override (later class wins, duplicates are removed)
cn('text-grey-600', className);

// Null-safe
cn('foo', null, undefined, 'bar'); // → 'foo bar'
```

---

## `tv` — tailwind-variants factory

```ts
import { tv } from '$lib';
```

A pre-configured [`tailwind-variants`](https://www.tailwind-variants.org) instance that uses the same `cmTWMergeConfig` as `cn`. Use it to define component variant systems.

### Example

```ts
const buttonVariants = tv({
	base: 'rounded-full font-body',
	variants: {
		variant: {
			primary: 'bg-primary text-common-white',
			outline: 'border border-primary text-primary'
		},
		size: {
			default: 'px-4 py-3',
			slim: 'px-3 py-1.5'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default'
	}
});

// Usage
buttonVariants({ variant: 'outline', size: 'slim' });
// → 'rounded-full font-body border border-primary text-primary px-3 py-1.5'
```

`tv` is also exported as `tailwindVariants` for explicitness.

---

## `tm` — tailwind-merge instance

```ts
import { tm } from '$lib';
// or
import { tailwindMerge } from '$lib';
```

The raw `extendTailwindMerge` instance configured with `cmTWMergeConfig`. Useful when you need to merge classes without `clsx`'s conditional logic (i.e., when all inputs are already strings).

```ts
tm('text-primary text-grey-600'); // → 'text-grey-600'
```

In most cases you should prefer `cn` over `tm`.

---

## `flyAndScale` — enter transition

```ts
import { flyAndScale } from '$lib';
```

A Svelte transition function that combines a vertical fly with a scale effect. Used internally for dropdown/overlay animations.

### Signature

```ts
flyAndScale(
  node: Element,
  params?: {
    y?: number;       // vertical offset in px (default: -8)
    x?: number;       // horizontal offset in px (default: 0)
    start?: number;   // initial scale (default: 0.95)
    duration?: number // ms (default: 150 — but actual easing is 200ms)
  }
): TransitionConfig
```

### Example

```svelte
<script>
	import { flyAndScale } from '$lib';
	let open = $state(false);
</script>

{#if open}
	<div transition:flyAndScale={{ y: -4, duration: 150 }}>Dropdown content</div>
{/if}
```

---

## `styleToString` — style object to string

```ts
import { styleToString } from '$lib';
```

Converts a plain object of CSS properties to an inline style string. Used internally by `flyAndScale`.

```ts
styleToString({ transform: 'scale(0.95)', opacity: '0' });
// → 'transform:scale(0.95);opacity:0;'
```

Entries with `undefined` values are skipped.

---

## `customcn` prop pattern

Every component in this library accepts an optional `customcn` prop:

```ts
customcn?: (...inputs: ClassValue[]) => string
```

This allows you to pass an alternative merge function (e.g., one configured for a different token set) without overriding the global `cn`. Useful for embedding components in a different design system context.

```svelte
<Button customcn={myProjectCn} class="my-override">Submit</Button>
```

When `customcn` is not provided, components fall back to the library's default `cn`.
