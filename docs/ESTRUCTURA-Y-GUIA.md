# Guía de Estructura y Buenas Prácticas (librería de componentes)

Objetivo: que la librería sea fácil de mantener, que los componentes se encuentren rápido y que el empaquetado como submódulo funcione sin sobresaltos.

## Principios clave
- Sin alias `$lib`, `$app`, `$env`. Siempre rutas relativas.
- Tipado estricto en todo lo exportado; prohibido `any`. Usa `unknown` sólo si es inevitable.
- JSDoc en miembros exportados (utils, variantes, componentes) para documentar contrato público.
- Componentes basados en variantes (`tv`) y utilidades (`cn/tm`) centralizadas.
- Nada de estilos ad-hoc en `<style>` si pueden ser variantes o utilidades de Tailwind.
- No modificar submódulos (`tailwind-presets`) dentro de este repo.

## Estructura recomendada
```
src/
  lib/
    index.ts            # utils (cn, tv, tm, transitions) + re-exports globales
    tokens/             # design tokens o presets compartidos (opcional)
    utils/              # helpers puros (sin Svelte)
    components/
      primitives/       # wrappers Bits-UI: button, checkbox, input, accordion, etc.
      layout/           # grid, container, divider, stack
      data-display/     # avatar, badge/pill, informative-box, typography, pictogram
      feedback/         # alert, toast, banner
      forms/            # controles compuestos (dropdowns, accordions, combos)
      media/            # icon, picture, ilustraciones
      index.ts          # barrel global de componentes (re-exporta categorías)
    styles/             # resets o CSS necesario para la lib (opcional)
  showcase/             # app de demo (mover lo que hoy está en src/routes)
    routes/             # páginas y ejemplos
index.ts                # re-exporta desde ./src/lib/index.js
```

### Barrels por categoría
- `components/<categoria>/index.ts` exporta solo su grupo.
- `components/index.ts` re-exporta todas las categorías.
- `src/lib/index.ts` re-exporta utilidades y el barrel de `components`.
- `src/index.ts` (raíz) re-exporta desde `./lib/index.js` para empaquetado.

## Plantilla de componente
```
components/<categoria>/<Componente>/
  <Componente>.svelte     # root
  index.ts                # variantes, tipos, exports
  parts/                  # subcomponentes opcionales (AvatarImage, AccordionItem)
```

Ejemplo de `index.ts`:
```ts
import { tv } from '../../index.js';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { type Button as ButtonPrimitive } from 'bits-ui';
import Root from './Button.svelte';

const buttonVariants = tv({ /* base/variants/defaultVariants */ });

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

export type ButtonProps = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
  customcn?: (...inputs: ClassValue[]) => string;
};

/** Botón primario del sistema de diseño. */
export { Root as Button, buttonVariants };
```

Ejemplo de componente:
```svelte
<script lang="ts">
  import { Button as Primitive } from 'bits-ui';
  import { buttonVariants, type ButtonProps } from './index.js';
  import { cn as defaultcn } from '../../index.js';

  type $$Props = ButtonProps;
  export let variant: $$Props['variant'] = 'solid-primary-main';
  export let size: $$Props['size'] = 'default';
  export let customcn: $$Props['customcn'] = undefined;
  export let className: $$Props['class'] = undefined;
  export { className as class };

  const cn = customcn || defaultcn;
</script>

<Primitive.Root class={cn(buttonVariants({ variant, size, className }))} {...$$restProps}>
  <slot />
</Primitive.Root>
```

## Nomenclatura y descubribilidad
- Carpetas en `kebab-case`; componentes en PascalCase o kebab-case consistente.
- Variantes declaradas en `index.ts`, no dispersas en el `.svelte`.
- `customcn` siempre debe sobrescribir a `cn` por defecto (orden: `customcn || defaultcn`).
- Subcomponentes bajo `parts/` o en la misma carpeta y re-exportados desde `index.ts`.

## Tokens y utils
- `tokens/`: colores, spacing, tipografía, presets de Tailwind si no viven en `tailwind-presets`.
- `utils/`: helpers puros (sin Svelte). Re-exporta lo necesario en `lib/index.ts`.

## Showcase
- Mantener la app de demo fuera de `lib` (por ej. `showcase/routes`). Nada de código de demo dentro de la librería empaquetada.

## Checklist para nuevos componentes
- [ ] Carpeta en `components/<categoria>/<Componente>/`.
- [ ] `index.ts` con variantes `tv`, tipos y exports (Props/Events).
- [ ] `.svelte` usando rutas relativas (sin `$lib`).
- [ ] Soporte `customcn` (usa `customcn || defaultcn`).
- [ ] Variantes en `tv`, no en strings ad-hoc ni `<style>` si se puede evitar.
- [ ] Tipos explícitos en todo lo exportado; sin `any`.
- [ ] JSDoc en miembros exportados.
- [ ] Re-exportado en el barrel de categoría y en el barrel global.
- [ ] Tests o ejemplo en showcase actualizado.

## Reglas rápidas
1) No aliases (`$lib`, `$app`, `$env`), solo rutas relativas.  
2) Tipado estricto y JSDoc en API pública.  
3) Variantes con `tv`; utilidades con `cn/tm`.  
4) No tocar submódulos; actualizarlos vía `git submodule update`.  
5) Showcase separado de la librería empaquetada.

## Referencias
- [SvelteKit Packaging](https://kit.svelte.dev/docs/packaging)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Bits-UI](https://www.bits-ui.com/)
