import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import "./style/main.scss";
import App from "./App.vue";

import "virtual:svg-icons-register";
import SvgIcon from "./components/SvgIcon.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
app.component("SvgIcon", SvgIcon);
