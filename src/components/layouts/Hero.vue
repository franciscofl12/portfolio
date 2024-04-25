<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-black dark:text-head_text" v-html="$t('hero.title')"></h1>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose text-gray-800 dark:text-gray-400" v-html="$t('hero.introduction')"></p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose text-gray-800 dark:text-gray-400" v-html="$t('hero.currentWork')"></p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose text-gray-800 dark:text-gray-400" v-html="$t('hero.cta')"></p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose text-gray-800 dark:text-gray-400" v-html="$t('hero.contact')"></p>
  </div>
</template>
