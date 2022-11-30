import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true,
})

const app = createApp(App)

app.use(router);
app.config.globalProperties.$axios = { ...axiosInstance }
app.mount('#app')
