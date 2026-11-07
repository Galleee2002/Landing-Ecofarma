function leerAppUrl() {
    const valor = import.meta.env.VITE_APP_URL;
    if (typeof valor === 'string' && valor.trim() !== '') {
        return valor.trim().replace(/\/$/, '');
    }
    if (import.meta.env.PROD) {
        throw new Error('Falta la variable de entorno VITE_APP_URL');
    }
    console.warn('Falta la variable de entorno VITE_APP_URL');
    return '';
}

const base = leerAppUrl();

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
