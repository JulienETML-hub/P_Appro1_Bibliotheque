import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router/index";
//const app = createApp(App);

//const pinia = createPinia();

//app.use(app).use(pinia).use(router).mount("#app");
createApp(App).use(createPinia()).use(router).mount("#app");