<template>
  <a :href="link" :title="title">
    <Icon
      :icon="icon"
      width="50"
      class="dark:text-p_text text-gray-800 rounded-md hover:bg-border_sm p-2 transition-all"
    />
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["link", "icon", "title"],
};
</script>
