# Design System Svelte Components

Librería de componentes Svelte para el design system de Copa Airlines.

Esta es una librería SvelteKit que se consume como **submódulo Git** en proyectos padre. Contiene componentes reutilizables basados en Svelte 4, TypeScript, Tailwind CSS v4 y Bits-UI.

## 📚 Documentación

- **[Guía de Estructura y Buenas Prácticas](docs/ESTRUCTURA-Y-GUIA.md)** - Cómo estructurar el código y seguir las mejores prácticas
- **[Auditoría y Recomendaciones de Refactorización](docs/AUDITORIA-Y-REFACTORIZACION.md)** - Antipatrones identificados y recomendaciones de mejora
- **[Actualizar Submodule](docs/ACTUALIZAR-SUBMODULE.md)** - Instrucciones para actualizar el submódulo `tailwind-presets`

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >20.18.0
- pnpm 10.4.1 (o superior)
- Git

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd design-sytem-svelte-components

# Instalar dependencias
pnpm install

# Inicializar submódulos
git submodule update --init --recursive
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo (muestra showcase/preview)
pnpm dev

# O abrir en el navegador automáticamente
pnpm dev -- --open
```

**Nota:** Todo dentro de `src/lib` es parte de la librería (lo que se exporta). Todo dentro de `src/routes` es solo para showcase/preview y no se incluye en el build de la librería.

### Actualizar Submódulo

Si necesitas actualizar el submódulo `tailwind-presets` (por ejemplo, después de cambiar de SSH a HTTPS):

```bash
# Ver instrucciones completas en docs/ACTUALIZAR-SUBMODULE.md
git submodule sync
git submodule update --init --recursive
```

## 📦 Construcción

### Construir la librería

```bash
pnpm package
```

Esto genera los archivos distribuibles en `dist/`.

### Construir showcase/preview

```bash
pnpm build
```

### Preview de producción

```bash
pnpm preview
```

## 🧪 Testing

```bash
# Ejecutar todos los tests
pnpm test

# Solo tests de integración (Playwright)
pnpm test:integration

# Solo tests unitarios (Vitest)
pnpm test:unit
```

## 🔍 Verificación y Linting

```bash
# Verificar tipos con svelte-check
pnpm check

# Verificar tipos en modo watch
pnpm check:watch

# Linting
pnpm lint

# Formatear código
pnpm format
```

## 📖 Uso como Submódulo

Este proyecto está diseñado para ser consumido como **submódulo Git** en otros proyectos.

### En el proyecto padre:

```bash
# Agregar este repositorio como submódulo
git submodule add <repository-url> path/to/submodule
git submodule update --init --recursive
```

### Importar componentes:

```typescript
// En tu proyecto padre
import { Button } from './path/to/submodule/index.js';
import { Avatar } from './path/to/submodule/index.js';
import { cn, tv } from './path/to/submodule/index.js';
```

**⚠️ IMPORTANTE:** No uses alias `$lib` en el código de esta librería. Siempre usa rutas relativas. Ver [Guía de Estructura](docs/ESTRUCTURA-Y-GUIA.md) para más detalles.

## 🛠️ Tecnologías

- **Svelte 4** - Framework de componentes
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos utilitarios
- **Tailwind Variants** - Sistema de variantes de componentes
- **Bits-UI** - Componentes primitivos accesibles
- **Vite** - Build tool
- **SvelteKit** - Framework base

## 📝 Reglas Importantes

1. **NO usar alias `$lib`, `$app`, `$env`** - Siempre usar rutas relativas
2. **Tipado estricto** - Todas las funciones exportadas deben tener tipos explícitos
3. **Documentación JSDoc** - Funciones y tipos exportados deben tener documentación
4. **Tailwind Variants** - Usar `tv()` para definir variantes de componentes
5. **No modificar submódulos directamente** - Ver [Guía de Estructura](docs/ESTRUCTURA-Y-GUIA.md)

Ver [Guía de Estructura y Buenas Prácticas](docs/ESTRUCTURA-Y-GUIA.md) para más detalles.

## 📚 Referencias

- [SvelteKit Packaging](https://kit.svelte.dev/docs/packaging)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Bits-UI](https://www.bits-ui.com/)
