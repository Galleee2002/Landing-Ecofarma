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

`VITE_APP_URL` es la URL de la app. Los CTA «Descargar app» y las insignias de tienda apuntan a `{VITE_APP_URL}/donar`.

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
