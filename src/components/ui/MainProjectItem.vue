<template>
  <div class="flex flex-col items-center gap-12">
    <img :src="image" :alt="name" class="rounded-lg w-full" />
    <div class="flex flex-col w-5/6 items-left gap-6">
      <span class="font-theme_bold text-2xl text-black dark:text-head_text">{{ name }}</span>
      <p class="text-sm lg:text-lg text-gray-800 dark:text-gray-400">{{ description }}</p>
      <ActionButton class="w-fit" :link="link">
        {{ returnDomain(link) }}
        <Icon class="inline text-xl" icon="ep:top-right" color="#eaeaea" />
      </ActionButton>
      <div class="flex flex-row">
        <p class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          v-for="tech in techs">
          {{ tech }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ActionButton from "./ActionButton.vue";

export default {
  setup() {
    function returnDomain(domain) {
      const matches = domain.match(
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
      );

      return matches[0];
    }

    return { returnDomain };
  },
  props: ["name", "image", "description", "techs", "link"],
  components: { ActionButton },
};
</script>
