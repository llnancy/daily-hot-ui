import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "@/router";
import { mainStore } from "@/store";

// 全局样式
import "@/style/global.scss";

const app = createApp(App);

localStorage.clear();

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

router.beforeEach((to, from, next) => {
  const store = mainStore();
  if (to.name === 'type' && !store.newsArr.map(item => item.value).includes(to.params.type)) {
    next({ name: '404' })
  } else {
    next()
  }
});

app.use(pinia);
app.use(router);

app.mount("#app");
