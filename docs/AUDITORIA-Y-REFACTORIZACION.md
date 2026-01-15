# Auditoría y Refactorización: checklist accionable

Objetivo: eliminar malas prácticas, asegurar tipado/JSDoc y mejorar descubribilidad de la librería de componentes.

## Prioridad Alta (rompen o arriesgan build)
1) Imports relativos incorrectos  
   - Corregir rutas en: `grid/container.svelte`, `grid/item.svelte`, `checkbox/checkbox.svelte`, `pill/pill.svelte`, `pill/text.svelte`, `pill/icon.svelte`, `grid/index.ts`, `index.ts` (raíz), `icon/index.ts` si aplica.  
   - Regla: siempre importar `cn/tv` desde `../../index.js` (o equivalente relativo a `src/lib`).

2) Contexto de `Pill` no reactivo  
   - `pill/pill.svelte`: el contexto se fija una sola vez. Hacerlo reactivo con `$:` y actualizar cuando cambien `theme` o `thickness`.

3) Orden de `customcn`  
   - `boxes/informative/box.svelte`: usar `const cn = customcn || defaultcn;` para que `customcn` gane.

4) Tipado y JSDoc en utilidades exportadas  
   - `src/lib/index.ts`: `cn` debe tener tipo de retorno explícito y JSDoc. Asegurar que todas las funciones/exportaciones públicas (cn, tv, tm, flyAndScale, helpers) tengan JSDoc y tipos de retorno.

## Prioridad Media (calidad/mantenibilidad)
5) Variantes y estilos  
   - `pill/pill.svelte`: mover estilos hardcodeados (grid-template) a variantes `tv` o clases utilitarias.  
   - `pill/text.svelte`: clases fijas deberían vivir en variantes si son parte del contrato visual.

6) Tipos y nombres  
   - `pictograms/index.ts`: corregir `Pictogam` → `Pictogram`.  
   - `icon/index.ts`: variantes incompletas (`iconWithDirectionVariants` con clases vacías o incorrectas) — completar o simplificar.

7) Helpers tipados  
   - `typography/index.ts`: helpers exportados (`getTypography*`) con tipo de retorno explícito y JSDoc.

## Prioridad Baja (orden y ergonomía)
8) Barrel exports completos  
   - `index.ts` raíz debe re-exportar todos los componentes principales desde `src/lib/components/...` y utilidades desde `src/lib/index.ts`.  
   - Usar barrels por categoría para imports cortos.

9) Centralizar tipos comunes  
   - Re-exportar `ClassValue`, `VariantProps` desde `src/lib/index.ts` para evitar imports repetidos.

10) Componentes de bajo valor  
   - Revisar `picture/` (solo wrapper de `<source>`) y `pictograms/` (pocos iconos específicos). Eliminar o documentar si se mantiene; mover a `media/` si siguen.

## Cómo aplicar los cambios (resumen)
- Corregir rutas relativas y order de `customcn`.
- Hacer reactivo el contexto de `Pill` y mover estilos a variantes.
- Añadir JSDoc + tipos de retorno en utilidades y helpers exportados.
- Arreglar tipos/typos (`Pictogram`) y variantes incompletas en `icon`.
- Completar barrel exports y re-exportar tipos comunes.

## Post-refactor
- Ejecutar `pnpm check` para validar TypeScript/Svelte.
- Levantar la app (`pnpm dev -- --host`) y verificar que no haya errores en consola.

Consulta `docs/ESTRUCTURA-Y-GUIA.md` para la estructura recomendada y categorías de componentes.
