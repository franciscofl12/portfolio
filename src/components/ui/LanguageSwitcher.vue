<template>
  <button @click="changeLanguage" title="Change Language" class="focus:outline-none">
    <img
      :src="flag"
      :alt="altText"
      class="w-10 rounded-md hover:bg-border_sm p-2 transition-all"
    />
  </button>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import englishFlag from '@/assets/flags/en.png'; // Usa @ para referenciar desde src
import spanishFlag from '@/assets/flags/es.png';

export default {
  setup() {
    const { locale } = useI18n();

    // Cambia el idioma de la interfaz entre inglés y español
    const changeLanguage = () => {
      locale.value = locale.value === 'en' ? 'es' : 'en';
    };

    // Determina la bandera a mostrar basándose en el idioma actual
    const flag = computed(() => {
      return locale.value === 'en' ? spanishFlag : englishFlag;
    });

    // Texto alternativo para la imagen, para accesibilidad
    const altText = computed(() => {
      return locale.value === 'en'
        ? 'Switch to Spanish'
        : 'Switch to English';
    });

    return { changeLanguage, flag, altText };
  }
};
</script>
