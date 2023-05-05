import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from "axios";
// import "vue-loading-overlay/dist/vue-loading.css";
import Vue3Transitions from 'vue3-transitions'



const app = createApp(App)

app.use(createPinia())
app.use(router,axios,Vue3Transitions)



app.mount('#app')
