import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

const app = createApp(App);
// app.directive('color', (el, binding) => {
//   // this will be called for both `mounted` and `updated`
//   el.style.color = binding.value
// })
// app.directive("click-outside", {
//   bind: function (element, binding, vnode) {
//     element.clickOutsideEvent = function (event) {
//       //  check that click was outside the el and his children
//       if (!(element === event.target || element.contains(event.target))) {
//         // and if it did, call method provided in attribute value
//         vnode.context[binding.expression](event);
//         // binding.value(); run the arg
//       }
//     };
//     document.body.addEventListener("click", element.clickOutsideEvent);
//   },
//   unbind: function (element) {
//     document.body.removeEventListener("click", element.clickOutsideEvent);
//   },
// });
app.use(router);
app.config.globalProperties.$axios = { ...axiosInstance };
app.mount("#app");
