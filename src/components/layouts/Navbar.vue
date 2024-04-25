<script setup>
import { useDark, useToggle } from '@vueuse/core';
import LanguageSwitcher from '../ui/LanguageSwitcher.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<template>
  <nav
    class="bottom-0 px-3 py-3 flex justify-between items-center border-b-[1px] border-border_sm fixed w-full dark:bg-navbar_back bg-white backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4">
    <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
    <router-link to="/" class="font-logo text-black dark:text-p_text text-3xl font-normal select-none slg:font-semibold lg:text-4xl">FranciscoFL
    </router-link>
    <div class="flex text-sm items-center gap-1 sm:gap-4">
      <router-link
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base text-gray-800 dark:text-gray-400"
        to="/">
        {{ $t('nav.home') }}
      </router-link>
      <router-link
        class="hover:bg-action_back hover:text-white font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base text-gray-800 dark:text-gray-400"
        to="/projects">
        {{ $t('nav.projects') }}
      </router-link>
      <button @click="toggleDark()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 dark:inline hidden">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 dark:hidden inline">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>
      <LanguageSwitcher />
    </div>
  </nav>
</template>
