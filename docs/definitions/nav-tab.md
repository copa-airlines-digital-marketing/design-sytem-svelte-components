# Nav Tab

> **Status:** `done` — Component lives at `src/lib/components/nav-tab/`. Story at `src/stories/nav-tab.stories.ts`. **Do not regenerate.**

---

## Component analysis (from Figma output)

### Variants extracted

| Dimension | Values                                                              |
| --------- | ------------------------------------------------------------------- |
| `type`    | `primary` (dark bg / light text), `invert` (dark bg / white text)   |
| `active`  | `true` (selected tab — shows coloured indicator), `false` (default) |
| Hover     | Driven by CSS `:hover` — indicator appears automatically            |

### Token mapping

| Figma value                  | Design-system token              | Used for                               |
| ---------------------------- | -------------------------------- | -------------------------------------- |
| `#666666`                    | `text-grey-600`                  | Label and subtitle text (primary type) |
| `white`                      | `text-common-white`              | Label and subtitle text (invert type)  |
| `font-family: Suisse Int'l`  | `font-body`                      | All text                               |
| `font-size: 12px`            | `text-d3`                        | Subtitle                               |
| `font-size: 16px`            | `text-d1`                        | Nav tab label                          |
| `padding: 12px 8px`          | `px-2 py-3`                      | Container padding                      |
| `gap: 4px`                   | `gap-1`                          | Icon ↔ content spacing                |
| `width/height: 24px` (icons) | `size-6`                         | Icon wrapper                           |
| `border-bottom: 4px #999999` | `hover:border-grey-500`          | Hover indicator (primary)              |
| `border-bottom: 4px white`   | `hover:border-common-white`      | Hover indicator (invert)               |
| `border-bottom: 4px #0E68FF` | `border-primary-light`           | Active/selected indicator              |
| `position: absolute` (icons) | removed — use `fill-current` SVG | Not needed in component                |

### What Figma generates vs what we build

Figma outputs one flat CSS class per variant combination (`selectedidle-typeprimary`, `selectedhover-typeprimary`, etc.). We consolidate all states into a single `tv()` call with compound variants for the hover + type combinations.

---

## Component source

**Location:** `src/lib/components/nav-tab/`

```
nav-tab/
  index.ts          ← types, navTabVariants tv() function, re-exports
  nav-tab.svelte    ← component
  nav-tab.test.ts   ← variant tests
```

**Props:**

| Prop        | Type                    | Default     | Description                            |
| ----------- | ----------------------- | ----------- | -------------------------------------- |
| `type`      | `'primary' \| 'invert'` | `'primary'` | Color scheme                           |
| `active`    | `boolean`               | `false`     | Whether this tab is currently selected |
| `subtitle`  | `string`                | —           | Optional small text above the label    |
| `iconLeft`  | `Snippet`               | —           | Optional icon on the left              |
| `iconRight` | `Snippet`               | —           | Optional icon on the right             |
| `children`  | `Snippet`               | required    | Tab label                              |
| `class`     | `string`                | —           | Extra CSS classes                      |

---

## Figma raw output (reference only — do not use directly)

<details>
<summary>Idle primary</summary>

```html
<div class="selectedidle-typeprimary">
	<div data-property-1="Icon" data-property-2="tabs" class="component-1">
		<div data-filled="True" class="icon-info"></div>
	</div>
	<div class="frame-134">
		<div class="subtitle"><span class="subtitle_span">Subtitle</span></div>
		<div class="nav-tab"><span class="navtab_span">Nav Tab</span></div>
	</div>
	<div data-property-1="Icon" data-property-2="tabs" class="component-1_01">
		<div data-filled="True" class="icon-info_01"></div>
	</div>
</div>
<style>
	.selectedidle-typeprimary {
		padding: 12px 8px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 4px;
	}
	.subtitle_span {
		color: #666666;
		font-size: 12px;
		font-family: Suisse Int 'l; font-weight: 400; }
.navtab_span   { color: #666666; font-size: 16px; font-family: Suisse Int' l;
		font-weight: 400;
	}
	.component-1 {
		width: 24px;
		height: 24px;
		position: relative;
	}
	.frame-134 {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		display: inline-flex;
	}
</style>
```

</details>

<details>
<summary>Hover primary</summary>

```html
<style>
	.selectedhover-typeprimary {
		padding: 12px 8px;
		border-bottom: 4px #999999 solid;
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
</style>
```

</details>

<details>
<summary>Active primary</summary>

```html
<style>
	.selectedactive-typeprimary {
		padding: 12px 8px;
		border-bottom: 4px #0e68ff solid;
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
</style>
```

</details>

<details>
<summary>Idle / Hover / Active invert (same structure, white text)</summary>

```
idle invert:   no border-bottom, color: white
hover invert:  border-bottom: 4px white solid
active invert: border-bottom: 4px #0E68FF solid
```

</details>
