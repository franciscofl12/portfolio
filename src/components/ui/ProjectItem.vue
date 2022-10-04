<template>
  <a class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
    :href="link">
    <img class="w-full object-cover rounded-md slg:h-48" :src="image" :alt="name" />
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">{{
      name
      }}</span>
      <p class="text-sm md:text-base">
        {{ description }}
      </p>
      <div class="grid grid-cols-1 slg:grid-cols-3 gap-4">
        <p class="bg-gray-100 text-gray-800 text-xs font-semibold p-2 rounded dark:bg-gray-700 dark:text-gray-300" v-for="tech in techs">
        {{ tech }}
      </p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  setup() { },
  props: ["name", "image", "description", "techs", "link"],
};
</script>
