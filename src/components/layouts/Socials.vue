<template>
  <div class="dark:text-p_text text-gray-800">You can reach me on my social media:</div>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/franciscofl12"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Twitter"
        link="https://twitter.com/franciscofl12_"
        icon="ant-design:twitter-outlined"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/franciscofl12/"
        icon="ant-design:instagram-outlined"
      />
    </div>
    <TooltipButton>Discord: Xisko#0001</TooltipButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";
import TooltipButton from "../ui/TooltipButton.vue";

export default {
  components: { SocialIcon, ActionButton, TooltipButton },
};
</script>
