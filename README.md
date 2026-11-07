# ecofarma — Landing

Sitio de marketing de ecofarma. La plataforma (app) vive en el repo hermano `Ecofarma-Final`.

## Requisitos

- Node.js
- pnpm

## Configuración

```bash
pnpm install
cp .env.example .env.local
```

En `.env.local`:

```
VITE_APP_URL=http://localhost:5173
```

`VITE_APP_URL` es la URL de la app. Los CTA «Descargar app» e insignias de tienda apuntan a `/recibir`. El footer enlaza `/donar`, `/recibir`, `/terminos` y `/declaracion-jurada`.

En la app, el enlace «Inicio» usa `VITE_LANDING_URL` apuntando a esta landing.

## Desarrollo

```bash
pnpm dev
```

Por defecto corre en el puerto `5174`.

## Build

```bash
pnpm build
pnpm preview
```

Si falta `VITE_APP_URL`, el build de producción falla a propósito para evitar enlaces relativos al dominio de la landing.

## Despliegue en Vercel

1. Crear un proyecto en Vercel apuntando a este repositorio (Framework Preset: Vite, Build: `pnpm build`, Output: `dist`).
2. Cargar `VITE_APP_URL` con la URL pública de Ecofarma-Final (sin barra final).
3. Redeployar tras cambiar la variable: Vite la embebe en el build.
4. En la app, configurar `VITE_LANDING_URL` con la URL pública de esta landing y redeployar.

El archivo `vercel.json` reescribe rutas hacia `index.html` (SPA). Los CTA de la app viven en el dominio de Ecofarma-Final, no en esta landing.
