<template>
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
      <SocialIcon
        title="Discord"
        link="https://discordapp.com/users/236855046237716493"
        icon="ant-design:discord-outlined"
      />
      <SocialIcon
        title="Email"
        link="mailto:franciscofl2002@gmail.com"
        icon="ant-design:mail-outlined"
      />
    </div>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import TooltipButton from "../ui/TooltipButton.vue";

export default {
  components: { SocialIcon, TooltipButton },
};
</script>
