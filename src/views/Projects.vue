<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-black dark:text-head_text"
      >
        Projects<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">.</span>
      </h1>
      <p class="text-base slg:text-lg text-gray-800 dark:text-gray-400">
        Here are some public work I have worked on in the last years.
      </p>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col items-center justify-center gap-28">
      <MainProjectItem
        v-for="proj in projects"
        :key="proj.id"
        :name="proj.name"
        :image="proj.image"
        :description="proj.description"
        :techs="proj.techs"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import { useProjectStore } from "../store/projectStore";

export default {
  components: { MainProjectItem },
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.getProjectsByLatestId;

    return { projects };
}
};
</script>
