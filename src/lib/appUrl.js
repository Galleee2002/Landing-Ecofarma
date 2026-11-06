const base = typeof import.meta.env.VITE_APP_URL === 'string'
    ? import.meta.env.VITE_APP_URL.replace(/\/$/, '')
    : '';

export function urlApp(ruta = '') {
    const path = typeof ruta === 'string' && ruta.startsWith('/') ? ruta : `/${ruta}`;
    if (base === '') {
        return path === '/' ? '/' : path;
    }
    if (path === '/') {
        return base;
    }
    return `${base}${path}`;
}
