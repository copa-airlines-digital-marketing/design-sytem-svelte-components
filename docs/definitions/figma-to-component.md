# Figma-to-Component Workflow

> **When to use this guide:** You have Figma Dev Mode or a Figma-to-code plugin output (Svelte) for a new component. Instead of using that code directly, you use it as a visual reference and let the AI produce a proper design-system component.

---

## 1. What Figma generates (and why we don't use it directly)

Figma-to-code tools typically output one of these patterns:

```svelte
<!-- Pattern A: arbitrary CSS values -->
<div class="w-[327px] h-[48px] bg-[#0032A0] rounded-[24px] font-['Gilroy'] text-[#FFFFFF]">
	Book now
</div>

<!-- Pattern B: CSS variables / inline styles -->
<div style="width: 327px; height: 48px; background: #0032A0; border-radius: 24px;">Book now</div>

<!-- Pattern C: CSS layers with generated class names -->
<div class="frame-427 button-primary">Book now</div>

<style>
  .frame-427 { display: flex; align-items: center; ... }
  .button-primary { background: #0032A0; ... }
</style>
```

**Problems with using this code directly:**

| Problem                                 | Why it matters                                                 |
| --------------------------------------- | -------------------------------------------------------------- |
| Hardcoded hex values                    | Breaks when design tokens change; not themeable                |
| Arbitrary Tailwind values (`w-[327px]`) | Bypasses the spacing scale; inconsistent with other components |
| Absolute pixel sizes                    | Doesn't adapt to responsive breakpoints                        |
| Separate CSS layer per variant          | Duplicates logic that `tailwind-variants` handles in one place |
| No `$props()` / Svelte 5 patterns       | Won't work correctly in this codebase                          |

---

## 2. Full conversion pipeline

### Step 1 — Paste the Figma output and describe the component

Tell the AI:

> "Here is Figma-to-code output for a [component name]. Convert it to a design system component."

Then paste the raw code.

### Step 2 — The AI identifies variants

From the pasted code (or multiple paste iterations for each Figma variant), the AI extracts the visual dimensions:

```
Button:
  variant: solid-primary, outline-primary, link
  size: slim (32px), default (48px), large (56px)
  state: default, hover, disabled
```

### Step 3 — Map CSS values → design-system tokens

The AI replaces arbitrary values with tokens from `tailwind-presets/v4/theme.css`:

#### Colors

| Figma value | Token                  |
| ----------- | ---------------------- |
| `#0032A0`   | `primary`              |
| `#001D5E`   | `primary-dark`         |
| `#204ECF`   | `primary-ultradark`    |
| `#E8EDFA`   | `primary-ultralight`   |
| `#EDF2FF`   | `background-lightblue` |
| `#FFFFFF`   | `common-white`         |
| `#F2F2F2`   | `grey-100`             |
| `#D9D9D9`   | `grey-300`             |
| `#9E9E9E`   | `grey-500`             |
| `#525252`   | `grey-600`             |
| `#323232`   | `grey-700`             |

#### Typography

| Figma value                 | Token                                 |
| --------------------------- | ------------------------------------- |
| `font-family: Gilroy`       | `font-heading`                        |
| `font-family: Suisse Int'l` | `font-body`                           |
| Figma text sizes →          | `text-u6 … text-d3` (see `theme.css`) |

#### Spacing / sizing

Use the Tailwind spacing scale. Common mappings:

- `8px` → `p-2` / `gap-2`
- `12px` → `p-3`
- `16px` → `p-4`
- `24px` → `p-6`
- Remove fixed widths (`w-[327px]`) — use `w-full` or let the component grow.

#### Borders / radius

- `border-radius: 999px` or very large → `rounded-full`
- `border-radius: 8px` → `rounded-lg`
- `border-radius: 16px` → `rounded-2xl`

### Step 4 — Factor with `tailwind-variants`

Each visual dimension becomes a variant key.

```ts
// src/lib/components/my-component/index.ts
import { tv } from '../../index.js';

const myComponentVariants = tv({
	base: 'font-body font-medium flex items-center justify-center rounded-full',
	variants: {
		variant: {
			primary: 'bg-primary text-common-white border border-primary',
			outline: 'bg-transparent text-primary border-2 border-primary',
			link: 'bg-transparent text-primary border-0 underline'
		},
		size: {
			slim: 'px-4 py-2 text-d3',
			default: 'px-4 py-3 text-d1',
			large: 'px-6 py-4 text-b'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default'
	}
});
```

**Rules:**

- One `tv()` call per logical component (sub-elements get their own `tv()`)
- `base` = classes shared by ALL variants
- Never put the same class in multiple variant values
- Disabled state goes in `data-[disabled]:` attribute selectors, not a variant key

### Step 5 — Write the Svelte 5 component

```svelte
<!-- src/lib/components/my-component/my-component.svelte -->
<script lang="ts">
	import { cn } from '../../index.js';
	import { myComponentVariants, type Props } from './index.js';

	let { class: className, variant, size, children, ...restProps }: Props = $props();
</script>

<button class={cn(myComponentVariants({ variant, size }), className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>
```

Key rules:

- Use `$props()` with explicit types — never `$$props`
- Export `Props` type from `index.ts`
- Use `cn(variantFn({ ...variantProps }), className)` for the class binding
- Use `{children}` snippet inside bits-ui primitives (not `{child}`)
- Pass `{...restProps}` for ARIA / event forwarding

### Step 6 — Add Storybook story

```svelte
<!-- src/stories/MyComponentStory.svelte -->
<script lang="ts">
	import MyComponent from '../lib/components/my-component/my-component.svelte';
	type Props = {
		label?: string;
		variant?: 'primary' | 'outline' | 'link';
		size?: 'slim' | 'default' | 'large';
	};
	let { label = 'Click me', variant = 'primary', size = 'default' }: Props = $props();
</script>

<MyComponent {variant} {size}>{label}</MyComponent>
```

```ts
// src/stories/my-component.stories.ts
import type { Meta, StoryObj } from '@storybook/svelte';
import MyComponentStory from './MyComponentStory.svelte';

const meta = {
	title: 'Components/MyComponent',
	component: MyComponentStory,
	tags: ['autodocs'],
	parameters: { controls: { include: ['label', 'variant', 'size'] } },
	argTypes: {
		variant: { control: 'select', options: ['primary', 'outline', 'link'] },
		size: { control: 'select', options: ['slim', 'default', 'large'] }
	},
	args: { label: 'Click me', variant: 'primary', size: 'default' }
} satisfies Meta<typeof MyComponentStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
```

### Step 7 — Write the test

```ts
// src/lib/components/my-component/my-component.test.ts
import { myComponentVariants } from './index.js';

describe('myComponentVariants', () => {
	test('base classes are always present', () => {
		const cls = myComponentVariants();
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('font-body');
	});

	test('primary variant applies bg-primary', () => {
		expect(myComponentVariants({ variant: 'primary' })).toContain('bg-primary');
	});

	test('outline variant applies border-primary', () => {
		expect(myComponentVariants({ variant: 'outline' })).toContain('border-primary');
	});

	test('slim size applies text-d3', () => {
		expect(myComponentVariants({ size: 'slim' })).toContain('text-d3');
	});
});
```

---

## 3. Status field — prevent double work

Every component definition doc in `docs/definitions/` **must** have a status line at the top.

### Format

```md
> **Status:** `pending` — Figma output pasted, component not yet built.
```

```md
> **Status:** `done` — Component lives at `src/lib/components/<name>/`. Do not regenerate.
```

### Rules for the AI

- **Before generating a component**, read the corresponding `docs/definitions/*.md`.
- If `Status: done` → **stop**. The component already exists. Do not overwrite.
- If `Status: pending` or file has no status → proceed with the pipeline.
- **After generating**, update the status line to `done` and add the component path.

### Lifecycle

| Status         | Meaning                                                             |
| -------------- | ------------------------------------------------------------------- |
| `pending`      | Figma output captured, component not yet built                      |
| `done`         | Component, story, and test all exist                                |
| `needs-update` | Component exists but the Figma design changed — needs a diff/update |

---

## 4. Checklist before committing a new component

- [ ] All Figma hex values replaced with design-system tokens
- [ ] All arbitrary Tailwind values (`w-[Xpx]`) replaced with scale values or removed
- [ ] No `style=""` attributes for colors / spacing / typography
- [ ] Variants factored into one or more `tv()` calls in `index.ts`
- [ ] Component uses `$props()` with explicit types
- [ ] `Props` type exported from `index.ts`
- [ ] `docs/components/<name>.md` updated or created
- [ ] Storybook story exists in `src/stories/`
- [ ] Test file exists alongside the component
