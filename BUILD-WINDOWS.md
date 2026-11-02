# FAST Desktop Tool — Build de Windows

## Requisitos

- Windows 10/11 de 64 bits.
- Node.js 22 LTS o superior.
- Git opcional.
- Herramientas de compilación de Visual Studio disponibles si `better-sqlite3` necesita compilarse.

## Instalación limpia

Desde la raíz del proyecto:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install --legacy-peer-deps
```

## Generar el instalador

```powershell
npm run build:win
```

El instalador se generará dentro de:

```text
release/
```

## Qué fue corregido

- El servidor de producción ahora entrega `dist/index.html` además de las rutas `/api`.
- Electron ejecuta prioritariamente el servidor copiado en `resources/app`.
- `dist` se copia explícitamente a `resources/app/dist`.
- La base de datos se mantiene en la carpeta persistente de Electron (`AppData/Roaming`).
- El arranque comprueba que la interfaz realmente responda antes de mostrar la ventana.
- Los errores de servidor o carga se muestran en un cuadro de diálogo en lugar de dejar una pantalla blanca.

## Verificación rápida

Después de instalar, abrir la aplicación desde el acceso directo del menú Inicio o del escritorio. También se puede revisar que el proceso de la aplicación no deje un proceso Node/Electron adicional activo después de cerrarla.

El instalador Windows debe construirse en Windows o en un runner CI Windows porque `better-sqlite3` es un módulo nativo y no puede recompilarse de forma cruzada desde Linux mediante `electron-builder`.
