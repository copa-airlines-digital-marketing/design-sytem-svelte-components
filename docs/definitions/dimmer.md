# Dimmer

> **Status:** `done` — Component lives at `src/lib/components/dimmer/`. Story at `src/stories/dimmer.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma output)

### What it is

A full-viewport overlay used to dim the content behind modals, drawers, and bottom sheets. In production it is `position: fixed` and covers the full small viewport (`100svw × 100svh`).

### Variants extracted

| Dimension | Values                                         |
| --------- | ---------------------------------------------- |
| `color`   | `grey` (dark overlay), `white` (light overlay) |
| `opacity` | `'60'` (soft), `'80'` (strong)                 |

Figma names the four combinations: **Grey 80**, **Grey 60**, **White 60**, **White 80**.

### Token mapping

| Figma value           | Token                   | Usage               |
| --------------------- | ----------------------- | ------------------- |
| `background: #121212` | `grey-800`              | Dark overlay color  |
| `background: white`   | `common-white`          | Light overlay color |
| `opacity: 0.80`       | `/80` Tailwind modifier | Strong opacity      |
| `opacity: 0.60`       | `/60` Tailwind modifier | Soft opacity        |

> Figma uses two nested elements — an outer wrapper with the named opacity and an inner `.dimmer` div with `opacity: 0.64`. In the component we collapse this into a single element using Tailwind's `bg-color/<opacity>` syntax, which produces the same visual result without stacking transparencies.

### What Figma uses vs what we build

| Figma approach                          | Component approach                          |
| --------------------------------------- | ------------------------------------------- |
| Fixed `768×768px` container             | `fixed inset-0` — full viewport             |
| Two nested divs with multiplied opacity | Single `<div>` with `bg-color/<opacity>`    |
| Separate class per variant              | `tv()` compound variants for 4 combinations |

---

## Component API

```ts
type DimmerProps = {
	color?: 'grey' | 'white'; // default: 'grey'
	opacity?: '60' | '80'; // default: '80'
	class?: string | null;
	// + any HTMLDivElement attribute (id, onClick to dismiss, etc.)
};
```

### Usage

```svelte
<!-- Standard usage: fixed full-screen overlay -->
<Dimmer color="grey" opacity="80" />

<!-- Dismiss on click -->
<Dimmer
	color="grey"
	opacity="60"
	onclick={() => (open = false)}
	class="pointer-events-auto cursor-pointer"
/>

<!-- Light overlay (e.g. behind a loading spinner on white bg) -->
<Dimmer color="white" opacity="60" />
```

> By default `pointer-events-none` is set so the overlay does not block interactions. Override with `pointer-events-auto` when you need click-to-dismiss.

---

## Files

| File                                       | Purpose                                               |
| ------------------------------------------ | ----------------------------------------------------- |
| `src/lib/components/dimmer/index.ts`       | `dimmerVariants` tv() + `DimmerProps` type            |
| `src/lib/components/dimmer/dimmer.svelte`  | Component implementation                              |
| `src/stories/DimmerStory.svelte`           | Storybook wrapper (uses inline preview, not fixed)    |
| `src/stories/dimmer.stories.ts`            | Stories: GreyStrong, GreySoft, WhiteStrong, WhiteSoft |
| `src/lib/components/dimmer/dimmer.test.ts` | Variant class tests                                   |
