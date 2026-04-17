# Copa Airlines Design System — Svelte Components

A Svelte 5 component library built on top of [bits-ui](https://bits-ui.com), [Tailwind CSS v4](https://tailwindcss.com), and [tailwind-variants](https://www.tailwind-variants.org). Components are fully typed, accessible, and composable.

> **AI context:** This is a publishable SvelteKit library (`svelte-package`). Source lives in `src/lib/components/`. Each component is a thin, styled wrapper around a `bits-ui` primitive or a plain HTML element. Styling is driven by `tailwind-variants` (`tv`) and merged with a custom `tailwindMerge` config (`cn`). All component props are exported from the component's `index.ts` — start there.

---

## Repository layout

```
src/
  lib/
    index.ts                  # cn, tv, flyAndScale, tailwindMerge — shared utilities
    components/
      avatar/
      boxes/informative/
      button/
      checkbox/
      divider/
      grid/
      icon/
      helper-text/
      input/
      option/
      select/
      input-dropdowns/accordion/
      pictograms/
      picture/
      pill/
      typography/
  routes/
    +page.svelte              # Live showcase / demo app
tailwind-presets/             # Standalone Tailwind preset / tokens package
docs/
  components/                 # Per-component documentation (props, variants, examples)
  utilities.md                # cn, tv, flyAndScale, tailwindMerge
```

---

## Prerequisites

| Tool | Version   |
| ---- | --------- |
| Node | > 20.18.0 |
| pnpm | 10.x      |

---

## Getting started

```bash
# Install dependencies
pnpm install

# Start the dev server (shows the component showcase at http://localhost:5173)
pnpm dev

# Type-check
pnpm check

# Run unit tests
pnpm test:unit

# Run integration tests (Playwright)
pnpm test:integration
```

---

## Using the library in another project

### Install

```bash
pnpm add design-sytem-svelte-components
```

The package entry point is `dist/index.js` (types at `dist/index.d.ts`). Every component and utility is re-exported from `src/lib/index.ts` at build time.

### Import a component

```svelte
<script>
	import { Button } from 'design-sytem-svelte-components/button';
	// or from the barrel:
	import { Button } from 'design-sytem-svelte-components';
</script>

<Button variant="solid-primary-main">Book now</Button>
```

### Tailwind CSS setup

Components rely on the custom token set from `tailwind-presets/`. Add it to your Tailwind config:

```js
// tailwind.config.js
import preset from 'design-sytem-svelte-components/tailwind-preset';

export default {
	presets: [preset]
};
```

---

## Building & publishing

```bash
# Build the library (outputs to dist/)
pnpm package

# Build the showcase app
pnpm build

# Publish to npm
npm publish
```

---

## Development conventions

- **Commit messages** follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint + husky).
- **Code style** is managed by Prettier and ESLint (`pnpm lint` / `pnpm format`).
- **Testing** — unit tests live alongside source (`*.test.ts`); integration tests are in `tests/`.
- **New components** — create a folder under `src/lib/components/<name>/`, add `index.ts` for the public API, and document the component in `docs/components/<name>.md`.

---

## Documentation

Detailed per-component docs live in [`docs/components/`](./docs/components/).

| Component                 | Doc                                                                        |
| ------------------------- | -------------------------------------------------------------------------- |
| Avatar                    | [docs/components/avatar.md](./docs/components/avatar.md)                   |
| Button                    | [docs/components/button.md](./docs/components/button.md)                   |
| Checkbox                  | [docs/components/checkbox.md](./docs/components/checkbox.md)               |
| Divider                   | [docs/components/divider.md](./docs/components/divider.md)                 |
| Grid                      | [docs/components/grid.md](./docs/components/grid.md)                       |
| Icon                      | [docs/components/icon.md](./docs/components/icon.md)                       |
| Informative Box           | [docs/components/informative-box.md](./docs/components/informative-box.md) |
| Accordion                 | [docs/components/accordion.md](./docs/components/accordion.md)             |
| Dimmer                    | [docs/components/dimmer.md](./docs/components/dimmer.md)                   |
| NavTab                    | [docs/components/nav-tab.md](./docs/components/nav-tab.md)                 |
| Pictograms                | [docs/components/pictograms.md](./docs/components/pictograms.md)           |
| Radio                     | [docs/components/radio.md](./docs/components/radio.md)                     |
| HelperText                | [docs/components/helper-text.md](./docs/components/helper-text.md)         |
| Input                     | [docs/components/input.md](./docs/components/input.md)                     |
| Option / OptionList       | [docs/components/option.md](./docs/components/option.md)                   |
| Select                    | [docs/components/select.md](./docs/components/select.md)                   |
| Autocomplete              | [docs/components/autocomplete.md](./docs/components/autocomplete.md)       |
| Slider                    | [docs/components/slider.md](./docs/components/slider.md)                   |
| Picture                   | [docs/components/picture.md](./docs/components/picture.md)                 |
| Pill                      | [docs/components/pill.md](./docs/components/pill.md)                       |
| Typography                | [docs/components/typography.md](./docs/components/typography.md)           |
| Utilities (`cn`, `tv`, …) | [docs/utilities.md](./docs/utilities.md)                                   |
