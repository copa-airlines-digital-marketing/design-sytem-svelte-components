# Typography

A family of five semantic text components — `Heading`, `Caption`, `Body`, `Overline`, and `Link` — all backed by the same `tailwind-variants` typography config. Every component accepts a `tag` prop so you can control the rendered HTML element independently of the visual style.

**Source:** `src/lib/components/typography/`  
**Exports:** `Heading`, `Body`, `Caption`, `Overline`, `Link`

---

## Components overview

| Component  | Default tag | Font family                  | Use for                                  |
| ---------- | ----------- | ---------------------------- | ---------------------------------------- |
| `Heading`  | `h2`        | `font-heading`               | Page titles, section headers             |
| `Caption`  | `p`         | `font-body` semibold         | Labels, metadata, badge text             |
| `Body`     | `p`         | `font-body` normal           | Paragraphs, descriptions                 |
| `Overline` | `p`         | `font-body` medium uppercase | Category labels, eyebrows above headings |
| `Link`     | `a`         | `font-body`                  | Inline and standalone links              |

---

## `Heading`

### Props

| Prop       | Type                    | Default | Description            |
| ---------- | ----------------------- | ------- | ---------------------- |
| `tag`      | `'h1' – 'h6'`           | `'h2'`  | HTML element to render |
| `variant`  | see below               | `'h2'`  | Visual style           |
| `class`    | `string`                | —       | Extra classes          |
| `customcn` | `(...inputs) => string` | —       | Override `cn`          |

#### `variant` options

| Value           | Size token | Notes                                        |
| --------------- | ---------- | -------------------------------------------- |
| `h1`            | `u5`       | `primary` color, 4px top + 8px bottom margin |
| `h2`            | `u2`       | `primary-dark`, bold                         |
| `h3`            | `u1`       | `grey-700`, bold                             |
| `h4`            | `b`        | `grey-700`, bold                             |
| `display-big`   | `u6`       | `primary`, bold — hero/landing use           |
| `display`       | `u4`       | `primary`, bold                              |
| `display-small` | `u2`       | `grey-700`, normal weight                    |
| `display-tiny`  | `u1`       | `grey-700`, normal weight                    |

```svelte
<Heading tag="h1" variant="h1">Welcome to Copa</Heading>
<Heading tag="h2" variant="h2">Our destinations</Heading>
<Heading tag="h3" variant="display-big">Best prices</Heading>
```

---

## `Caption`

Short, semibold text for labels and secondary info.

### Props

| Prop      | Type                                                                                 | Default     | Description   |
| --------- | ------------------------------------------------------------------------------------ | ----------- | ------------- |
| `tag`     | any inline text element                                                              | `'p'`       | HTML element  |
| `size`    | `'caption' \| 'caption-large' \| 'caption-small' \| 'caption-tiny'`                  | `'caption'` | Text size     |
| `variant` | `'caption' \| 'caption-secondary' \| 'caption-invert' \| 'caption-invert-secondary'` | `'caption'` | Color scheme  |
| `class`   | `string`                                                                             | —           | Extra classes |

#### Size reference

| Value           | Token | Weight   |
| --------------- | ----- | -------- |
| `caption-large` | `u1`  | semibold |
| `caption`       | `b`   | semibold |
| `caption-small` | `d1`  | semibold |
| `caption-tiny`  | `d3`  | semibold |

#### Variant reference

| Value                      | Color          |
| -------------------------- | -------------- |
| `caption`                  | `grey-700`     |
| `caption-secondary`        | `grey-600`     |
| `caption-invert`           | `common-white` |
| `caption-invert-secondary` | `grey-200`     |

```svelte
<Caption size="caption-small" variant="caption-secondary">Economy class</Caption>
```

---

## `Body`

Standard paragraph text.

### Props

| Prop      | Type                                                                   | Default  | Description   |
| --------- | ---------------------------------------------------------------------- | -------- | ------------- |
| `tag`     | any inline text element                                                | `'p'`    | HTML element  |
| `size`    | `'body' \| 'body-large' \| 'body-small'`                               | `'body'` | Text size     |
| `variant` | `'body' \| 'body-emphasis' \| 'body-invert' \| 'body-invert-emphasis'` | `'body'` | Color scheme  |
| `class`   | `string`                                                               | —        | Extra classes |

#### Variant reference

| Value                  | Color          |
| ---------------------- | -------------- |
| `body`                 | `grey-600`     |
| `body-emphasis`        | `grey-700`     |
| `body-invert`          | `grey-200`     |
| `body-invert-emphasis` | `common-white` |

```svelte
<Body>Flight details will appear here once you select your route.</Body>
<Body variant="body-emphasis" size="body-large">Important notice</Body>
```

---

## `Overline`

Uppercase small text used as a label or eyebrow above a heading.

### Props

| Prop    | Type                             | Default      | Description   |
| ------- | -------------------------------- | ------------ | ------------- |
| `tag`   | any inline text element          | `'p'`        | HTML element  |
| `size`  | `'overline' \| 'overline-small'` | `'overline'` | Text size     |
| `class` | `string`                         | —            | Extra classes |

```svelte
<Overline>Special offer</Overline>
<Heading variant="h2">25% off all routes</Heading>
```

---

## `Link`

An `<a>` tag with design-system styles.

### Props

| Prop      | Type                                          | Default  | Description      |
| --------- | --------------------------------------------- | -------- | ---------------- |
| `href`    | `string`                                      | —        | Link destination |
| `variant` | `'link' \| 'link-invert' \| 'link-secondary'` | `'link'` | Color scheme     |
| `class`   | `string`                                      | —        | Extra classes    |

#### Variant reference

| Value            | Color           | Decoration         |
| ---------------- | --------------- | ------------------ |
| `link`           | `primary-light` | Underline on hover |
| `link-invert`    | `grey-200`      | Always underlined  |
| `link-secondary` | `grey-600`      | Underline on hover |

```svelte
<Link href="/destinations">View all destinations</Link>
<Link href="/login" variant="link-secondary">Sign in</Link>
```

All standard `HTMLLinkAttributes` (`target`, `rel`, `download`, etc.) are forwarded.

---

## Mixing tag and variant

All typography components separate the **HTML element** (`tag`) from the **visual style** (`variant`/`size`). This allows semantic correctness without sacrificing visual hierarchy:

```svelte
<!-- Visually an h1, semantically correct h1 -->
<Heading tag="h1" variant="h1">Page title</Heading>

<!-- Visually an h2, but inside an article the DOM order needs h3 -->
<Heading tag="h3" variant="h2">Section title</Heading>

<!-- Visually a caption inside a <span> for inline use -->
<Caption tag="span" size="caption-small">12 seats left</Caption>
```
