---
name: Reorganizar guías y refactorizar código
overview: Actualizar la guía y auditoría con la nueva estructura propuesta, aplicar refactors y tipado estricto, y validar con TypeScript y ejecución de la app.
todos:
  - id: update-guides
    content: Actualizar guías de estructura y auditoría
    status: completed
  - id: refactor-code
    content: Aplicar refactors y tipado
    status: in_progress
    dependencies:
      - update-guides
  - id: validate
    content: Ejecutar checks y levantar app
    status: pending
    dependencies:
      - refactor-code
---

# Plan

1) Actualizar guías de estructura y refactor

- Revisar y reescribir `docs/ESTRUCTURA-Y-GUIA.md` con la estructura por categorías (primitives/layout/data-display/forms/feedback/media), barrels y pautas de descubribilidad.
- Reescribir `docs/AUDITORIA-Y-REFACTORIZACION.md` con checklist concreto de malas prácticas y refactors priorizados.

2) Refactors de código y tipado

- Corregir imports relativos incorrectos en componentes (`grid/*`, `checkbox`, `pill/*`, `index.ts` raíz, `icon`, etc.).
- Hacer contexto de `Pill` reactivo; priorizar `customcn`; mover estilos hardcodeados a variantes cuando proceda.
- Añadir tipos de retorno explícitos y JSDoc en utilidades exportadas (`cn`, `tv`, `flyAndScale`, helpers de typography/icon/pictograms); corregir typo `Pictogam` → `Pictogram`; completar variantes en `icon` o simplificarlas.
- Exportar todos los componentes principales desde el barrel global.

3) Validaciones

- Ejecutar `pnpm check` (TypeScript/Svelte) y revisar.
- Ejecutar `pnpm dev -- --host` (o comando equivalente) para asegurar que la app arranca sin errores.
- Ajustar si aparecen fallos y repetir `pnpm check` si se modificó el código.