import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import './assets/icon/iconfont.css'
import { VueMasonryPlugin } from "vue-masonry";

const url = "http://43.143.231.27:8081"
let app = createApp(App)

app.provide('url',url)
app.use(router).use(VueMasonryPlugin).mount('#app')
