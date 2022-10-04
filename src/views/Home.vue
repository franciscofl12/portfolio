<script>
import LatestProjects from "../components/layouts/LatestProjects.vue";
import Hero from "../components/layouts/Hero.vue";
import Socials from "../components/layouts/Socials.vue";
export default {
  setup() {},
  components: { Hero, Socials, LatestProjects },
};
</script>

<template>
  <div class="flex flex-col gap-16 mb-16">
    <Hero />
    <Socials />
    <hr class="dark:bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <LatestProjects />
  </div>
</template>
