<script setup>
import { computed, ref } from 'vue';
import BaseButton from '../ui/BaseButton.vue';

const pasosDonar = [
    {
        titulo: 'Elegí el medicamento',
        texto: 'Buscalo en el vademécum y completá envase, lote y vencimiento.',
        imagen: '/landing/tutorial/donar-1.webp?v=4',
    },
    {
        titulo: 'Subí la foto del envase',
        texto: 'Agregá fotos nítidas para que quien lo solicita pueda revisarlo.',
        imagen: '/landing/tutorial/donar-2.webp?v=4',
    },
    {
        titulo: 'Publicá la donación',
        texto: 'Si coincide, queda disponible. Si no, pasa a revisión.',
        imagen: '/landing/tutorial/donar-3.webp?v=4',
    },
];

const pasosRecibir = [
    {
        titulo: 'Mirá lo disponible',
        texto: 'Filtrá el catálogo y abrí la ficha antes de solicitarlo.',
        imagen: '/landing/tutorial/recibir-1.webp?v=4',
    },
    {
        titulo: 'Enviá la solicitud',
        texto: 'Indicá para quién es y, si hace falta, adjuntá la receta.',
        imagen: '/landing/tutorial/recibir-2.webp?v=4',
    },
    {
        titulo: 'Coordiná el encuentro',
        texto: 'Acordá la entrega por el chat y confirmala con tu código.',
        imagen: '/landing/tutorial/recibir-3.webp?v=4',
    },
];

const modo = ref('donar');

const pasos = computed(function () {
    return modo.value === 'donar' ? pasosDonar : pasosRecibir;
});

function elegirModo(valor) {
    modo.value = valor;
}
</script>

<template>
    <section id="nuestra-app" class="scroll-mt-24 overflow-hidden bg-background" aria-labelledby="tutorial-titulo">
        <div class="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:py-16">
            <div class="mx-auto flex max-w-2xl flex-col items-center text-center">
                <h2 id="tutorial-titulo" class="tutorial-copy font-heading text-xl text-balance text-foreground sm:text-2xl md:text-3xl">
                    Cómo funciona nuestra app
                </h2>
                <p class="tutorial-copy mt-2 max-w-xl text-sm text-pretty text-muted sm:text-base">
                    Doná o recibí medicamentos en 3 simples pasos.
                </p>

                <div
                    class="mt-6 inline-flex items-center gap-2 sm:mt-8"
                    role="group"
                    aria-label="Elegir recorrido"
                >
                    <BaseButton
                        size="md"
                        :variant="modo === 'donar' ? 'primary' : 'outline'"
                        class="!min-h-11 !rounded-full !px-6"
                        :aria-pressed="modo === 'donar'"
                        @click="elegirModo('donar')"
                    >
                        Donar
                    </BaseButton>
                    <BaseButton
                        size="md"
                        :variant="modo === 'recibir' ? 'primary' : 'outline'"
                        class="!min-h-11 !rounded-full !px-6"
                        :aria-pressed="modo === 'recibir'"
                        @click="elegirModo('recibir')"
                    >
                        Recibir
                    </BaseButton>
                </div>
            </div>

            <div class="relative mt-8 sm:mt-12">
                <Transition name="tutorial-modo" mode="out-in">
                    <div :key="modo">
                        <div class="grid w-full min-w-0 grid-cols-3 items-end gap-2 sm:gap-6 lg:gap-10">
                            <div v-for="(paso, i) in pasos" :key="paso.imagen" class="min-w-0">
                                <img
                                    :src="paso.imagen"
                                    :alt="'Paso ' + (i + 1) + ': ' + paso.titulo"
                                    class="relative z-10 mx-auto h-auto w-full object-contain sm:max-w-52 md:max-w-60 lg:max-w-64"
                                    width="664"
                                    height="1402"
                                    decoding="async"
                                >
                            </div>
                        </div>

                        <ol class="relative z-10 mt-1 grid w-full min-w-0 grid-cols-3 items-start gap-2 sm:gap-6 lg:gap-10">
                            <li
                                v-for="(paso, i) in pasos"
                                :key="paso.titulo"
                                class="flex min-w-0 flex-col items-center text-center"
                            >
                                <span class="paso-numero relative z-10 -mt-3 flex size-8 items-center justify-center rounded-full font-heading text-sm font-bold sm:-mt-4 sm:size-10 sm:text-base">
                                    {{ i + 1 }}
                                </span>
                                <h3 class="tutorial-copy mt-3 font-heading text-sm text-balance text-foreground sm:text-base md:text-lg">
                                    {{ paso.titulo }}
                                </h3>
                                <p class="tutorial-copy mx-auto mt-1 max-w-[11rem] text-xs text-pretty text-muted sm:max-w-[16rem] sm:text-sm">
                                    {{ paso.texto }}
                                </p>
                            </li>
                        </ol>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>

<style scoped>
.tutorial-copy {
    text-align: center;
}

.paso-numero {
    background-color: color-mix(in srgb, var(--color-icon) 24%, white);
    color: var(--color-icon);
    box-shadow: 0 0 0 6px var(--color-background);
}

.tutorial-modo-enter-active,
.tutorial-modo-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.tutorial-modo-enter-from,
.tutorial-modo-leave-to {
    opacity: 0;
    transform: translateY(0.5rem);
}

@media (prefers-reduced-motion: reduce) {
    .tutorial-modo-enter-active,
    .tutorial-modo-leave-active {
        transition: none;
    }

    .tutorial-modo-enter-from,
    .tutorial-modo-leave-to {
        transform: none;
    }
}
</style>
