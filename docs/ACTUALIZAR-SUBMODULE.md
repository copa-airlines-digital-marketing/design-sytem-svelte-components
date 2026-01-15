# Instrucciones para Actualizar el Submodule

Este documento explica cómo actualizar el submódulo `tailwind-presets` después de cambiar la URL de SSH a HTTPS.

## Cambio Realizado

El archivo `.gitmodules` ha sido actualizado de:
```ini
url = git@github.com:copa-airlines-digital-marketing/tailwind-presets.git
```

A:
```ini
url = https://github.com/copa-airlines-digital-marketing/tailwind-presets.git
```

## Pasos para Completar la Actualización

### Opción 1: Actualización Automática con Git Submodule Sync

```bash
# 1. Sincronizar la configuración del submódulo con .gitmodules
git submodule sync

# 2. Actualizar el submódulo usando la nueva URL
git submodule update --init --recursive
```

### Opción 2: Actualización Manual

Si la opción automática no funciona, puedes actualizar manualmente:

```bash
# 1. Cambiar al directorio del submódulo
cd tailwind-presets

# 2. Cambiar la URL remota manualmente
git remote set-url origin https://github.com/copa-airlines-digital-marketing/tailwind-presets.git

# 3. Verificar que la URL cambió
git remote -v

# 4. Volver al directorio raíz
cd ..

# 5. Actualizar el submódulo
git submodule update --init --recursive
```

### Opción 3: Re-inicializar el Submódulo (Si todo lo demás falla)

```bash
# 1. Eliminar el directorio del submódulo (NO hacer commit de esto)
rm -rf tailwind-presets

# 2. Sincronizar la configuración
git submodule sync

# 3. Re-inicializar el submódulo
git submodule update --init --recursive
```

## Verificación

Después de ejecutar los comandos, verifica que todo funcionó correctamente:

```bash
# Verificar que el submódulo tiene la URL correcta
cd tailwind-presets
git remote -v
# Debería mostrar: origin  https://github.com/copa-airlines-digital-marketing/tailwind-presets.git (fetch)
# Debería mostrar: origin  https://github.com/copa-airlines-digital-marketing/tailwind-presets.git (push)

# Verificar que puedes hacer fetch
git fetch origin

# Volver al directorio raíz
cd ..
```

## Hacer Commit del Cambio

Una vez que hayas verificado que el submódulo funciona correctamente:

```bash
# Ver el estado actual
git status

# Agregar el cambio en .gitmodules
git add .gitmodules

# Si hubo cambios en el submódulo, agregarlos también
git add tailwind-presets

# Hacer commit
git commit -m "chore: actualizar submodule tailwind-presets de SSH a HTTPS"
```

## Notas Importantes

- El cambio de SSH a HTTPS significa que ya no necesitarás claves SSH configuradas para acceder al repositorio del submódulo.
- Si usas autenticación con HTTPS, puede que necesites configurar un Personal Access Token o usar un gestor de credenciales.
- Los proyectos que consuman este repositorio como submódulo también necesitarán actualizar sus submódulos siguiendo estos mismos pasos.

## Troubleshooting

### Error: "fatal: repository '...' not found"
- Verifica que tienes acceso al repositorio
- Verifica que la URL es correcta
- Si necesitas autenticación, configura tus credenciales de Git

### Error: "fatal: not a git repository"
- El directorio del submódulo puede estar corrupto
- Usa la Opción 3 para re-inicializar completamente

### El submódulo no se actualiza
- Verifica que `.gitmodules` tiene la URL correcta
- Ejecuta `git submodule sync` nuevamente
- Intenta eliminar el directorio y re-inicializarlo (Opción 3)
