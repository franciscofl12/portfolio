import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { Icon } from "@iconify/vue";
import LinkBtn from "./components/ui/LinkBtn.vue";
import { createPinia } from "pinia";
import 'flowbite';
import i18n from "./18n";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(i18n)
app.component("Icon", Icon);
app.component("LinkBtn", LinkBtn);
app.use(router);

app.mount("#app");
