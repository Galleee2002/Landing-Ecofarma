<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import BaseNavbar from './BaseNavbar.vue';
import { urlApp } from '../../lib/appUrl';

const enlaces = [
    { id: 'inicio', etiqueta: 'Inicio', href: '#inicio' },
    { id: 'sponsor', etiqueta: 'Sponsor', href: '#sponsor' },
    { id: 'nuestra-app', etiqueta: 'Nuestra App', href: '#nuestra-app' },
    { id: 'impacto', etiqueta: 'Impacto', href: '#impacto' },
    { id: 'faq', etiqueta: 'FAQ', href: '#faq' },
];

const seccionActiva = ref('inicio');
const hrefApp = urlApp('/recibir');

const ids = enlaces.map(function (enlace) {
    return enlace.id;
});

function clasesEnlace(enlace, movil) {
    const alto = movil ? 'min-h-11' : 'min-h-10';
    const clases = [
        'inline-flex items-center rounded-md px-3 py-2 font-semibold text-surface',
        alto,
        'transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current motion-reduce:transition-none',
        'hover:bg-surface/15',
    ];
    if (seccionActiva.value === enlace.id) {
        clases.push('bg-surface/20');
    }
    return clases.join(' ');
}

function actualizarSeccionActiva() {
    const offset = 96;
    let actual = ids[0];
    for (const id of ids) {
        const el = document.getElementById(id);
        if (el === null) {
            continue;
        }
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
            actual = id;
        }
    }
    seccionActiva.value = actual;
}

onMounted(function () {
    actualizarSeccionActiva();
    window.addEventListener('scroll', actualizarSeccionActiva, { passive: true });
    window.addEventListener('hashchange', actualizarSeccionActiva);
});

onUnmounted(function () {
    window.removeEventListener('scroll', actualizarSeccionActiva);
    window.removeEventListener('hashchange', actualizarSeccionActiva);
});

const claseCta = computed(function () {
    return 'inline-flex min-h-10 items-center justify-center rounded-md bg-surface px-4 font-semibold text-primary shadow-sm hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface';
});
</script>

<template>
    <BaseNavbar sticky logo-href="#inicio">
        <template #desktop-navigation>
            <a
                v-for="enlace in enlaces"
                :key="enlace.id"
                :href="enlace.href"
                :class="clasesEnlace(enlace, false)"
            >
                {{ enlace.etiqueta }}
            </a>
        </template>

        <template #actions>
            <a :href="hrefApp" :class="claseCta">
                Descargar app
            </a>
        </template>

        <template #mobile-navigation>
            <a
                v-for="enlace in enlaces"
                :key="enlace.id"
                :href="enlace.href"
                :class="clasesEnlace(enlace, true)"
            >
                {{ enlace.etiqueta }}
            </a>
        </template>

        <template #mobile-actions>
            <a :href="hrefApp" :class="[claseCta, 'w-full']">
                Descargar app
            </a>
        </template>
    </BaseNavbar>
</template>
