import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  withCredentials: true,
});

const app = createApp(App);

app.directive('click-outside', {
  beforeMount: (el, binding, vnode) => {
    el.clickOutsideEvent = (event) => {
      if(!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
});

app.use(router);
app.config.globalProperties.$axios = { ...axiosInstance };
app.mount("#app");
