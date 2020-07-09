import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Rem from './utils/rem'

createApp(App)
  .use(router)
  .use(store)
  .use(Rem)
  .mount("#app");
