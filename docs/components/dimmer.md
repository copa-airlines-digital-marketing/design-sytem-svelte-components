# Dimmer

A full-viewport overlay that dims background content. Used behind modals, drawers, and bottom sheets.

## Import

```ts
import { Dimmer } from '$lib/components/dimmer';
```

## Props

| Prop       | Type                | Default  | Description                                     |
| ---------- | ------------------- | -------- | ----------------------------------------------- |
| `color`    | `'grey' \| 'white'` | `'grey'` | Background color of the overlay                 |
| `opacity`  | `'60' \| '80'`      | `'80'`   | Opacity strength — `60` is soft, `80` is strong |
| `class`    | `string \| null`    | —        | Extra classes                                   |
| `customcn` | `fn`                | —        | Custom class merging function                   |

Accepts all standard `HTMLDivElement` attributes (e.g. `id`, `onclick`, `data-*`).

> **Note:** The dimmer renders `position: fixed` and covers the full viewport. It has `pointer-events-none` by default — add `pointer-events-auto` when you need click-to-dismiss behaviour.

## Examples

```svelte
<!-- Behind a modal -->
<Dimmer />

<!-- Soft variant behind a side drawer -->
<Dimmer opacity="60" />

<!-- Click to close -->
<Dimmer class="pointer-events-auto cursor-pointer" onclick={() => (drawerOpen = false)} />

<!-- Light overlay -->
<Dimmer color="white" opacity="60" />
```

## Variants

| `color` | `opacity` | Result                             |
| ------- | --------- | ---------------------------------- |
| `grey`  | `80`      | Dark near-opaque overlay (default) |
| `grey`  | `60`      | Dark semi-transparent overlay      |
| `white` | `80`      | Light near-opaque overlay          |
| `white` | `60`      | Light semi-transparent overlay     |
